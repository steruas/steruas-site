import { createFileRoute, notFound } from "@tanstack/react-router";
import { AboutFullPage } from "@/components/AboutFullPage";
import type { Locale } from "@/content/site";

export const Route = createFileRoute("/$locale/sobre")({
  loader: ({ params }) => {
    if (params.locale !== "pt" && params.locale !== "en") throw notFound();
    return { locale: params.locale as Locale };
  },
  head: ({ params }) => {
    const isPt = params.locale === "pt";
    const title = isPt
      ? "Sobre — M."
      : "About — M.";
    const desc = isPt
      ? "Estrategista voltando pra growth depois de seis anos em estratégia corporativa. Background plural por desenho: consultoria, startups e corporativo grande."
      : "Strategist returning to growth after six years in corporate strategy. Plural background by design: consulting, startups, and large corporations.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { locale } = Route.useLoaderData();
  return <AboutFullPage locale={locale} />;
}
