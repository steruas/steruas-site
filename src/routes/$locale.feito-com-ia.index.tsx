import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useScrollToTop } from "@/lib/hooks";
import { FadeIn } from "@/components/FadeIn";
import { cases } from "@/content/site";
import type { Locale } from "@/content/site";

export const Route = createFileRoute("/$locale/feito-com-ia/")({
  loader: ({ params }) => {
    if (params.locale !== "pt" && params.locale !== "en") throw notFound();
    return { locale: params.locale as Locale };
  },
  head: ({ params }) => {
    const isPt = params.locale === "pt";
    const title = isPt ? "Feito com IA — SteRuas" : "Built with AI — SteRuas";
    const desc = isPt
      ? "Análises, protótipos e ferramentas que estou construindo, com foco inicial no setor financeiro brasileiro."
      : "Analyses, prototypes, and tools I'm building, with initial focus on the Brazilian financial sector.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { t, locale } = useI18n();
  useScrollToTop();

  const featured = cases[0];
  const others = cases.slice(1);

  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20">
          <FadeIn>
            <span className="eyebrow">{t.builtWithAi.eyebrow}</span>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] max-w-4xl">
              {t.builtWithAi.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-[#1A1A1A]/70">
              {t.builtWithAi.intro}
            </p>
          </FadeIn>

          {/* Caso 1 — destaque */}
          <FadeIn delay={0.15}>
            <a
              href={featured.externalUrl ?? `/${locale}/feito-com-ia/${featured.slug}`}
              target={featured.externalUrl ? "_blank" : undefined}
              rel={featured.externalUrl ? "noreferrer" : undefined}
              className="mt-20 block group"
            >
              <article className="border border-[#E5E3DC] bg-white/40 rounded-lg overflow-hidden transition-all hover:border-[#B8862B]/40">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-3 aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-[#F0EFE8] to-[#E5E3DC] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-8">
                        <div className="eyebrow mb-3">Dashboard placeholder</div>
                        <div className="font-serif text-2xl text-[#1A1A1A]/40">[ embed area ]</div>
                      </div>
                    </div>
                    <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 400 250">
                      <polyline fill="none" stroke="#B8862B" strokeWidth="1.5"
                        points="0,200 40,180 80,190 120,150 160,160 200,110 240,130 280,80 320,95 360,55 400,70" />
                      <polyline fill="none" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="3 3"
                        points="0,210 40,205 80,200 120,195 160,185 200,180 240,170 280,160 320,150 360,140 400,130" />
                    </svg>
                  </div>
                  <div className="lg:col-span-2 p-8 md:p-10 flex flex-col">
                    <div className="eyebrow">{t.builtWithAi.featured}</div>
                    <h2 className="mt-4 font-serif text-2xl md:text-[28px] leading-[1.15] text-[#1A1A1A] group-hover:text-[#B8862B] transition-colors">
                      {featured.title[locale]}
                    </h2>
                    <p className="mt-5 text-[15px] leading-[1.65] text-[#1A1A1A]/75">
                      {featured.desc[locale]}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="eyebrow !text-[#1A1A1A]/50">{t.builtWithAi.tools}</div>
                        <div className="mt-2 text-[#1A1A1A]/80">{featured.tools.join(" · ")}</div>
                      </div>
                      <div>
                        <div className="eyebrow !text-[#1A1A1A]/50">{t.builtWithAi.sector}</div>
                        <div className="mt-2 text-[#1A1A1A]/80">{featured.sector[locale]}</div>
                      </div>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#B8862B] group-hover:underline underline-offset-4">
                      {t.builtWithAi.featuredCta} →
                    </span>
                  </div>
                </div>
              </article>
            </a>
          </FadeIn>

          {/* Casos 2 e 3 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((c, i) => {
              const isComingSoon = c.status === "coming-soon";
              const cardClasses = `border rounded-lg p-8 h-full transition-transform ${
                isComingSoon
                  ? "border-[#E5E3DC] opacity-75"
                  : "border-[#E5E3DC] hover:scale-[1.02] hover:border-[#B8862B]/40 cursor-pointer"
              }`;

              const cardContent = (
                <article className={cardClasses}>
                  <div className="aspect-[16/9] -mx-2 -mt-2 mb-6 rounded bg-gradient-to-br from-[#F0EFE8] to-[#E5E3DC] relative">
                    {isComingSoon && (
                      <div className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.18em] text-[#1A1A1A]/60 bg-white/80 px-2 py-1 rounded">
                        {t.builtWithAi.comingSoon}
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1A1A]">{c.title[locale]}</h3>
                  <p className="mt-3 text-sm text-[#1A1A1A]/70 leading-[1.6]">{c.desc[locale]}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.tools.map((tool) => (
                      <span key={tool} className="text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A]/60 border border-[#E5E3DC] px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#B8862B] border border-[#B8862B]/30 px-2 py-1 rounded">
                      {c.sector[locale]}
                    </span>
                  </div>
                </article>
              );

              return (
                <FadeIn key={c.slug} delay={i * 0.08}>
                  {isComingSoon ? (
                    cardContent
                  ) : (
                    <Link
                      to="/$locale/feito-com-ia/$slug"
                      params={{ locale, slug: c.slug }}
                      className="block h-full"
                    >
                      {cardContent}
                    </Link>
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}