# NETFITS TECNOLOGIA LTDA.
# CONVENÇÕES DE ENGENHARIA DE SOFTWARE & DIRETRIZES DE CÓDIGO
**Versão:** 2.0 | **Data:** Outubro de 2026  
**Classificação:** Diretriz Interna Obrigatória  
**Aplica-se a:** Todos os Desenvolvedores, Engenheiros e Agentes Autônomos de Código  

---

## 1. PRINCÍPIOS FUNDAMENTAIS DE ENGENHARIA

O código da plataforma **Netfits** deve refletir os quatro valores do Manifesto Corporativo:
1. **Usuário antes do ego**: Escrever código previsível, legível e orientado à estabilidade da experiência do atleta.
2. **Clareza antes da complexidade**: Evitar abstrações prematuras ou hiper-arquiteturas que dificultem a manutenção.
3. **Evidência antes da convicção**: Tomar decisões baseadas em métricas, profiling de performance e testes automatizados.
4. **Velocidade com responsabilidade**: Entregar rápido através de padrões rígidos e quality gates inquebráveis.

---

## 2. REGRAS DE OURO INEGOCIÁVEIS (GOLDEN RULES)

### 2.1. REGRA 1: Não Criar Componentes Duplicados
- **Diretriz**: Antes de criar qualquer novo componente visual ou modal, é obrigatório inspecionar o diretório `src/components/` e verificar se já existe uma implementação reutilizável ou uma primitiva do Radix UI / shadcn.
- **Prática**:
  - Elementos de formulário (Inputs, Selects, Checkboxes, Sliders, Badges) devem ser consumidos exclusivamente de `src/components/`.
  - Componentes de negócios com propósitos semelhantes (ex: cards de quizzes, modais de checkout) devem ser parametrizados via *props* ou compostos via *slots*, e nunca clonados em novos arquivos.
- **Anti-padrão (PROIBIDO)**:
  ```tsx
  // ❌ ERRADO: Criar um botão estilizado inline ou duplicar um componente de botão existente
  export function CustomSaveButton({ onClick }: { onClick: () => void }) {
    return <button className="bg-emerald-500 text-white rounded-lg p-2 font-bold" onClick={onClick}>Salvar</button>;
  }
  ```
- **Padrão Correto**:
  ```tsx
  // ✅ CORRETO: Reutilizar o componente padrão da design system
  import { Button } from "@/components/button";

  export function SaveAction({ onSave }: { onSave: () => void }) {
    return <Button variant="default" size="default" onClick={onSave}>Salvar</Button>;
  }
  ```

---

### 2.2. REGRA 2: Usar TypeScript Estrito (`strict: true`)
- **Diretriz**: O projeto opera sob `"strict": true` no `tsconfig.json`. O compilador TypeScript atua como o primeiro Quality Gate.
- **Prática**:
  - É expressamente proibido o uso do tipo `any`. Caso o tipo seja dinâmico ou proveniente de fonte externa, utilizar `unknown` acompanhado obrigatoriamente de um validador de tempo de execução (Zod Schema ou Type Guard).
  - Todas as funções, hooks e métodos exportados devem declarar explicitamente seus tipos de entrada e saída.
  - Habilitar `noImplicitAny`, `strictNullChecks` e `noUncheckedIndexedAccess`.
- **Anti-padrão (PROIBIDO)**:
  ```ts
  // ❌ ERRADO: Uso de any e ausência de tipagem de retorno
  export function calculateCashback(order: any) {
    return order.total * 0.1;
  }
  ```
- **Padrão Correto**:
  ```ts
  // ✅ CORRETO: Tipagem estrita com interface explícita e tratamento de nulos
  export interface OrderSummary {
    totalBrl: number;
    cashbackPercentage: number;
  }

  export function calculateCashback(order: Readonly<OrderSummary>): number {
    if (order.totalBrl <= 0) return 0;
    return Number((order.totalBrl * (order.cashbackPercentage / 100)).toFixed(2));
  }
  ```

---

### 2.3. REGRA 3: Sempre Utilizar Supabase RPC para Mutações Financeiras e de Pontos
- **Diretriz**: **NENHUMA operação de escrita em saldo ou créditos/débitos de pontos pode ser executada via `supabase.from('users').update(...)` no frontend.**
- **Motivo**: O saldo `nfs` é um passivo financeiro da empresa. Atualizações diretas pelo cliente geram riscos de fraude, *race conditions* e corrupção do algoritmo FEFO.
- **Prática**:
  - Toda movimentação deve invocar uma Stored Procedure (RPC) no banco PostgreSQL com lock transacional (`SELECT ... FOR UPDATE`).
- **Anti-padrão (PROIBIDO)**:
  ```ts
  // ❌ VULNERABILIDADE GRAVE: Mutação direta do saldo no client-side
  const { data } = await supabase
    .from('users')
    .update({ wallet_balance_nfs: currentBalance - 100 })
    .eq('id', userId);
  ```
- **Padrão Correto**:
  ```ts
  // ✅ CORRETO: Chamada à procedure RPC atômica e segura
  const { data, error } = await supabase.rpc('rpc_debit_points_fefo', {
    p_user_id: userId,
    p_amount: 100,
    p_title: 'Resgate de Voucher Shop Netfits',
    p_order_id: orderId
  });

  if (error) {
    throw new Error(`Falha no débito atômico de pontos: ${error.message}`);
  }
  ```

---

### 2.4. REGRA 4: Proibido Lógica de Negócio em Componentes React
- **Diretriz**: Componentes React devem ser **estritamente apresentacionais** (*Dumb / Presentational Components*).
- **Prática**:
  - O componente React é responsável apenas por:
    1. Renderizar elementos da interface a partir de *props* ou do retorno de hooks;
    2. Capturar eventos do usuário (cliques, digitação, gestos);
    3. Delegar a execução para handlers providos por Custom Hooks.
  - Regras de cálculo, formatação atuarial, filtros complexos de dados, validações de dwell time e chamadas de rede devem residir em:
    - **`src/hooks/`**: Orquestração de estado e ciclo de vida do React.
    - **`src/lib/`**: Funções puras de domínio e regras de negócio testáveis sem necessidade de montagem do DOM.
- **Anti-padrão (PROIBIDO)**:
  ```tsx
  // ❌ ERRADO: Lógica de negócio, cálculos FEFO e regras financeiras dentro do JSX
  export function WalletWidget({ batches, user }: any) {
    // Cálculo atuarial acoplado na view!
    const expiringSoon = batches.filter((b: any) => b.daysRemaining < 30)
                                .reduce((acc: number, curr: any) => acc + curr.amount, 0);
    const provisionValue = expiringSoon * 0.01;

    return <div>{expiringSoon} pontos a vencer (R$ {provisionValue})</div>;
  }
  ```
- **Padrão Correto**:
  ```tsx
  // ✅ CORRETO: View desacoplada consumindo hook de negócio especializado
  // No hook: src/hooks/useWalletBreakage.ts
  export function useWalletBreakage(userId: string) {
    const { data: batches = [] } = useQuery(walletQueries.batches(userId));
    const analysis = useMemo(() => calculateExpiringBatches(batches, 30), [batches]);
    return analysis;
  }

  // No componente: src/components/WalletBreakageAlert.tsx
  export function WalletBreakageAlert({ userId }: { userId: string }) {
    const { expiringPoints, provisionValueBrl, hasUrgentExpiration } = useWalletBreakage(userId);

    if (!hasUrgentExpiration) return null;

    return (
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-amber-400">
        <p className="font-semibold">{expiringPoints} pontos vencem em 30 dias</p>
        <p className="text-xs text-muted-foreground">Valor equivalente: {formatBrl(provisionValueBrl)}</p>
      </div>
    );
  }
  ```

---

### 2.5. REGRA 5: Usar React Query (@tanstack/react-query) para Chamadas Assíncronas
- **Diretriz**: Todas as requisições de rede (Supabase, Nitro APIs, endpoints externos) devem ser encapsuladas em hooks do React Query (`useQuery`, `useMutation`).
- **Motivo**:
  - Previne chamadas duplicadas no mesmo ciclo de renderização;
  - Garante caching inteligente em memória, controle de `staleTime`, refetch em background e invalidação granular de cache após mutações;
  - Padroniza o tratamento de estados de carregamento (`isLoading`), sucesso (`data`) e falha (`error`).
- **Prática**:
  - Organizar as chaves de consulta (*Query Keys*) em objetos centralizados (*Query Key Factories*).
- **Exemplo de Implementação**:
  ```ts
  // src/lib/queries/user-queries.ts
  export const userKeys = {
    all: ['users'] as const,
    details: () => [...userKeys.all, 'detail'] as const,
    detail: (id: string) => [...userKeys.details(), id] as const,
    wallet: (id: string) => [...userKeys.all, 'wallet', id] as const,
  };

  // src/hooks/useUserWallet.ts
  export function useUserWallet(userId: string) {
    return useQuery({
      queryKey: userKeys.wallet(userId),
      queryFn: async () => {
        const client = getSupabaseClient();
        if (!client) throw new Error("Supabase não inicializado");
        
        const { data, error } = await client
          .from('users')
          .select('id, wallet_balance_nfs, level')
          .eq('id', userId)
          .single();

        if (error) throw error;
        return data;
      },
      staleTime: 1000 * 60 * 2, // 2 minutos de cache fresco
      enabled: Boolean(userId),
    });
  }
  ```

---

### 2.6. REGRA 6: Proibido Chumbar Parâmetros Operacionais e Econômicos no Código (Zero Hardcoded Business Parameters)
- **Diretriz**: **NENHUM valor numérico ou regra de negócio volátil pode ser "chumbado" (*hardcoded*) diretamente em componentes, rotas, hooks ou stores locais.**
- **Motivo**:
  - Taxas de breakage, CPP de acúmulo e resgate, take-rate, bonificações MGM, limites de emissão diária/semanal e flags de elegibilidade (como a pontuação de treinos exclusiva do Clube e aprovação da diretoria) são **parâmetros de gestão e governança**.
  - Devem ser dinamicamente calibrados pela diretoria através do Cockpit Administrativo (`/admin` -> Parâmetros Operacionais) sem a necessidade de novo build, commit ou deploy da aplicação.
- **Prática**:
  - Toda operação que envolva regras econômicas, limites ou validações DEVE consumir o hook `useOperationalParams()` (no React) ou a tabela `system_parameters` (no backend/RPCs).
- **Anti-padrão (PROIBIDO)**:
  ```tsx
  // ❌ VULNERABILIDADE / MÁ PRÁTICA: Valores de negócio chumbados no código
  export function WorkoutRewardCard() {
    // Valores chumbados ignorando se o usuário é do clube e se a diretoria aprovou!
    const pointsPerWorkout = 20; 
    const breakageRate = 0.05;
    const cppAcumulo = 0.015;

    return <div>Treine e ganhe {pointsPerWorkout} nfs!</div>;
  }
  ```
- **Padrão Correto**:
  ```tsx
  // ✅ CORRETO: Consumo reativo e dinâmico dos parâmetros operacionais
  import { useOperationalParams } from "@/lib/operational-params-store";

  export function WorkoutRewardCard({ isClubMember }: { isClubMember: boolean }) {
    const { 
      nfsPerWorkout, 
      workoutRewardClubOnly, 
      workoutRewardBoardApproved 
    } = useOperationalParams();

    // Verificação de elegibilidade e governança dinâmica
    const isEligible = isClubMember || !workoutRewardClubOnly;
    const isFeatureActive = isEligible && workoutRewardBoardApproved;

    if (!isFeatureActive) {
      return (
        <div className="text-xs text-muted-foreground">
          Sincronize seus treinos para gerar métricas e badges de constância.
        </div>
      );
    }

    return (
      <div className="text-emerald-400 font-semibold">
        Treino validado: ganhe até {nfsPerWorkout} nfs por sessão!
      </div>
    );
  }
  ```

---

## 3. CONVENÇÕES DE ESTRUTURA E ARQUIVOS

### 3.1. Nomenclatura de Arquivos
- **Componentes React**: PascalCase (ex: `ProductDetailSheet.tsx`, `AdminAuthGuard.tsx`).
- **Hooks**: camelCase com prefixo `use` (ex: `useUserWallet.ts`, `useDwellTimeTracker.ts`).
- **Stores e Utilitários**: kebab-case (ex: `operational-params-store.ts`, `marketplace-api-hub.ts`).
- **Rotas TanStack**: lowercase ou rotas dinâmicas do TanStack Router (ex: `activities.tsx`, `wallet.tsx`, `index.tsx`).

### 3.2. Importações e Aliases
Utilizar sempre os aliases configurados no `tsconfig.json`:
- `@/*` -> aponta para `./src/*`
- `@/components/*` -> aponta para `./src/components/*`
- `@/lib/*` -> aponta para `./src/lib/*`
- É proibido o uso de caminhos relativos profundos com mais de um nível (ex: `../../../../components/button`).

---

## 4. SEGURANÇA E PRIVACIDADE (LGPD POR DESIGN)

1. **Proteção de Segredos**:
   - Nenhuma credencial sensível (`SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL`, `API_SECRET`) pode ser exposta no código frontend ou prefixada com `VITE_`.
   - Chaves de serviço devem rodar exclusivamente em endpoints de servidor Nitro ou Edge Functions protegidas.
2. **Dados Pessoais e de Saúde**:
   - Dados de sensores e telemetria (frequência cardíaca, rotas de GPS, glicemia) só podem ser persistidos após consentimento formal registrado na tabela `user_consent_logs`.
   - É terminantemente proibido compartilhar ou expor dados brutos de saúde a parceiros comerciais ou marketplaces integrados.

---

## 5. QUALITY GATE DE BUILD E COMMIT

Antes de promover qualquer alteração para homologação (`staging`) ou produção (`production`), o código deve ser validado localmente executando:

```bash
npm run qa:check
```

Esse comando executa atomicamente:
1. `node scripts/validate-routes.cjs` (Garante que nenhuma rota do TanStack Router está quebrada);
2. `tsc --noEmit` (Garante zero erros de tipagem estrita no TypeScript);
3. `vite build` (Garante compilação impecável de todos os bundles de frontend e SSR).
