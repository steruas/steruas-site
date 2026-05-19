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
      ? "Stéphanie Nakamura Ruas — Growth com IA e visão sistêmica"
      : "Stéphanie Nakamura Ruas — AI-native growth and systems thinking";
    const desc = isPt
      ? "Stéphanie Nakamura Ruas é estrategista de growth com foco em serviços financeiros. Ensaios e ferramentas construídos com IA."
      : "Stéphanie Nakamura Ruas is a growth strategist focused on financial services. Essays and tools built with AI.";
    const url = isPt ? "https://steruas.com/pt" : "https://steruas.com/en";
    const ogLocale = isPt ? "pt_BR" : "en_US";
    const ogLocaleAlt = isPt ? "en_US" : "pt_BR";

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "author", content: "Stéphanie Nakamura Ruas" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Stéphanie Nakamura Ruas" },
        { property: "og:locale", content: ogLocale },
        { property: "og:locale:alternate", content: ogLocaleAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "pt-BR", href: "https://steruas.com/pt" },
        { rel: "alternate", hrefLang: "en", href: "https://steruas.com/en" },
        { rel: "alternate", hrefLang: "x-default", href: "https://steruas.com/pt" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Stéphanie Nakamura Ruas",
            alternateName: ["SteRuas", "Stephanie Nakamura Ruas", "Stephanie Ruas"],
            url: "https://steruas.com",
            image: "https://steruas.com/logo.svg",
            jobTitle: isPt ? "Estrategista de Growth com IA" : "AI Growth Strategist",
            description: desc,
            knowsAbout: [
              "Growth Marketing",
              "Artificial Intelligence",
              "Corporate Strategy",
              "Financial Services",
              "Digital Marketing",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "São Paulo",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            sameAs: [
              "https://www.linkedin.com/in/steruas/",
            ],
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
