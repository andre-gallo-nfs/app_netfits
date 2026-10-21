import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { InstitutionalHomePage } from "./home";
import { nativeBridge } from "@/lib/native-bridge";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Netfits — A Vida em Movimento Vale Mais | Longevidade Ativa & Healthspan" },
      {
        name: "description",
        content:
          "Plataforma AI-first de promoção à saúde, bem-estar e longevidade. Fazer cada movimento valer mais com educação médica, Active Loyalty e marketplace esportivo.",
      },
      { property: "og:title", content: "Netfits — A Vida em Movimento Vale Mais" },
    ],
  }),
  component: RootIndexRoute,
});

function RootIndexRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirecionamento automático para o app (/feed ou /auth) SOMENTE quando executando
    // dentro do aplicativo nativo (Android/iOS via Capacitor) ou PWA instalado (?app=true).
    // No navegador Web (www.netfits.com.br), o visitante DEVE SEMPRE permanecer na Homepage Institucional!
    const isNativeOrAppMode =
      nativeBridge.isNativePlatform() ||
      (typeof window !== "undefined" && window.location.search.includes("app=true"));

    if (isNativeOrAppMode) {
      if (sharedSandboxStore.hasActiveSession()) {
        navigate({ to: "/feed", replace: true });
      } else {
        navigate({ to: "/auth", replace: true });
      }
    }
  }, [navigate]);

  return <InstitutionalHomePage />;
}
