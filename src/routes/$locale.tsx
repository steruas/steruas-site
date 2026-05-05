import { createFileRoute, notFound } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";
import type { Locale } from "@/content/site";

export const Route = createFileRoute("/$locale")({
  loader: ({ params }) => {
    if (params.locale !== "pt" && params.locale !== "en") throw notFound();
    return { locale: params.locale as Locale };
  },
  head: ({ params }) => {
    const isPt = params.locale === "pt";
    const title = isPt
      ? "M. — Growth com IA para serviços financeiros"
      : "M. — AI-native growth for financial services";
    const desc = isPt
      ? "Estrategista de growth com foco em serviços financeiros. Ensaios e ferramentas construídos com IA."
      : "Growth strategist focused on financial services. Essays and tools built with AI.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "M.",
            jobTitle: isPt ? "Estrategista de Growth com IA" : "AI Growth Strategist",
            description: desc,
          }),
        },
      ],
    };
  },
  component: RouteComponent,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">404</div>
  ),
});

function RouteComponent() {
  const { locale } = Route.useLoaderData();
  return <SitePage locale={locale} />;
}
