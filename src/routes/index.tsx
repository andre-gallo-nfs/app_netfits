import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { InstitutionalHomePage } from "./home";
import { nativeBridge } from "@/lib/native-bridge";

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
    // Se estiver rodando dentro do empacotamento nativo móvel (Capacitor iOS ou Android),
    // direciona automaticamente para o Feed da aplicação
    if (nativeBridge.isNativePlatform()) {
      navigate({ to: "/feed", replace: true });
    }
  }, [navigate]);

  return <InstitutionalHomePage />;
}
