import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { AssociadosDashboardPage } from "./associados";

export const Route = createFileRoute("/associado")({
  head: () => ({
    meta: [
      { title: "Painel do Associado — Netfits" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AssociadoRedirectRoute,
});

function AssociadoRedirectRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/associados", replace: true });
  }, [navigate]);

  return <AssociadosDashboardPage />;
}
