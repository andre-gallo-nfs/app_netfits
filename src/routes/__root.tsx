import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { AppShell } from "@/components/AppShell";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Página não encontrada.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
        >
          Voltar ao feed
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Algo deu errado</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Netfits — A rede da longevidade ativa" },
      {
        name: "description",
        content:
          "Netfits: feed de saúde e esporte, marketplace, sistema de níveis e wallet com moeda netfits. Treine, compre, ganhe.",
      },
      { property: "og:title", content: "Netfits — A rede da longevidade ativa" },
      { property: "og:description", content: "Netfits: Your Health Hub connects users to health, sports content, a marketplace, and a loyalty program." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Netfits — A rede da longevidade ativa" },
      { name: "description", content: "Netfits: Your Health Hub connects users to health, sports content, a marketplace, and a loyalty program." },
      { name: "twitter:description", content: "Netfits: Your Health Hub connects users to health, sports content, a marketplace, and a loyalty program." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/295aaa4b-9612-4c80-a12d-847461b2a624/id-preview-869ab5db--3baa86c4-050f-4c79-a96b-d89f72afa2ed.lovable.app-1779568961248.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/295aaa4b-9612-4c80-a12d-847461b2a624/id-preview-869ab5db--3baa86c4-050f-4c79-a96b-d89f72afa2ed.lovable.app-1779568961248.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { GA4RouteTracker } from "@/lib/analytics";
import { HomologationControlPanel } from "@/components/HomologationControlPanel";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <GA4RouteTracker />
      <AppShell>
        <Outlet />
      </AppShell>
      <HomologationControlPanel />
    </QueryClientProvider>
  );
}
