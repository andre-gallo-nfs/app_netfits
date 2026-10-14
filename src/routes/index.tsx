import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { InstitutionalHomePage } from "./home";
import { nativeBridge } from "@/lib/native-bridge";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Netfits Ltda. — A Primeira Camada de Fidelidade para a Vida em Movimento" },
      {
        name: "description",
        content:
          "Fazer cada movimento valer mais. Conheça a Netfits: feed de saúde, marketplace com cashback, ecossistema de parceiros e programa de fidelidade.",
      },
      { property: "og:title", content: "Netfits Ltda. — Fazer cada movimento valer mais" },
    ],
  }),
  component: RootIndexRoute,
});

function RootIndexRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    // Se o dispositivo já possui uma conta/sessão ativa autenticada, direciona diretamente para o app (/feed)
    if (sharedSandboxStore.hasActiveSession()) {
      navigate({ to: "/feed", replace: true });
    } else if (nativeBridge.isNativePlatform() || window.location.search.includes("app=true")) {
      navigate({ to: "/auth", replace: true });
    }
  }, [navigate]);

  return <InstitutionalHomePage />;
}
