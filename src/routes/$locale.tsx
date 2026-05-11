import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { Footer } from "@/sections/Footer";
import type { Locale } from "@/content/site";

export const Route = createFileRoute("/$locale")({
  loader: ({ params }) => {
    if (params.locale !== "pt" && params.locale !== "en") throw notFound();
    return { locale: params.locale as Locale };
  },
  head: ({ params }) => {
    const isPt = params.locale === "pt";
    const title = isPt
      ? "SteRuas — Growth com IA e visão sistêmica"
      : "SteRuas — AI-native growth and systems thinking";
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
            name: "SteRuas",
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
  return (
    <I18nProvider locale={locale}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </I18nProvider>
  );
}