import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { sharedSandboxStore, type SandboxUser, type SandboxTransaction } from "../shared-sandbox-store.ts";
import { formatFriendlyTx, type WalletTx } from "../wallet-store.ts";

export interface UserWalletData {
  balance: number;
  transactions: WalletTx[];
  source: "supabase_remote" | "api_remote" | "sandbox_fallback";
}

/**
 * Hook TanStack Query para carregar a carteira e o ledger do usuário.
 * Consulta prioritariamente a API remota/Supabase.
 * Se offline ou em desenvolvimento local, recorre ao sharedSandboxStore sem quebrar a UI.
 */
export function useWalletData(userId?: string) {
  const activeUser = sharedSandboxStore.getActiveUser();
  const targetUserId = userId || activeUser.id;

  return useQuery<UserWalletData>({
    queryKey: ["walletData", targetUserId],
    queryFn: async () => {
      // 1. Tentar buscar da API remota /loyalty/wallet
      try {
        const res = await fetch(`/loyalty/wallet?token=usr_${targetUserId}`);
        if (res.ok) {
          const data = await res.json();
          const balance = data.balance ?? data.points ?? 0;
          const localTxs = sharedSandboxStore.getUserTransactions(targetUserId);

          return {
            balance,
            transactions: localTxs.map(formatFriendlyTx),
            source: "api_remote",
          };
        }
      } catch (err) {
        // Falha de rede ou ambiente sem servidor ativo - segue para fallback
      }

      // 2. Fallback resiliente no sharedSandboxStore
      const user = sharedSandboxStore.getUserById(targetUserId) || activeUser;
      const txs = sharedSandboxStore.getUserTransactions(user.id);

      return {
        balance: user.nfsBalance,
        transactions: txs.map(formatFriendlyTx),
        source: "sandbox_fallback",
      };
    },
    staleTime: 1000 * 30, // 30 segundos
    refetchOnWindowFocus: true,
  });
}

/**
 * Hook TanStack Query para carregar o perfil do usuário.
 */
export function useUserProfile(userId?: string) {
  const activeUser = sharedSandboxStore.getActiveUser();
  const targetUserId = userId || activeUser.id;

  return useQuery<SandboxUser>({
    queryKey: ["userProfile", targetUserId],
    queryFn: async () => {
      try {
        const res = await fetch(`/customer/profile?token=usr_${targetUserId}`);
        if (res.ok) {
          const profile = await res.json();
          return {
            ...activeUser,
            id: targetUserId,
            email: profile.email || activeUser.email,
            cpf: profile.cpf || activeUser.cpf,
            fullName: profile.fullName || profile.name || activeUser.fullName,
            nfsBalance: profile.nfsBalance ?? activeUser.nfsBalance,
            userCategory: profile.userCategory || activeUser.userCategory,
            isClubMember: profile.isClubMember ?? activeUser.isClubMember,
          };
        }
      } catch (err) {
        // Fallback local
      }

      return sharedSandboxStore.getUserById(targetUserId) || activeUser;
    },
    staleTime: 1000 * 60, // 1 minuto
  });
}

/**
 * Mutation TanStack Query para débito atômico de pontos FEFO.
 * Invalida automaticamente as chaves de cache após confirmação.
 */
export function useDebitPointsFEFOMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { userId: string; amount: number; title: string; orderId?: string }) => {
      const res = await fetch("/api/wallet/debit-fefo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Falha ao debitar pontos via FEFO");
      }

      return res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["walletData", variables.userId] });
      queryClient.invalidateQueries({ queryKey: ["userProfile", variables.userId] });
      // Atualiza o store compartilhado
      sharedSandboxStore.touch();
    },
  });
}
