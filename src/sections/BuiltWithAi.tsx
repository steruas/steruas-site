import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { cases } from "@/content/site";

export function BuiltWithAi() {
  const { t, locale } = useI18n();

  // Caso 1 (destaque) — primeiro do array, sempre active
  const featured = cases[0];
  // Casos secundários — todos os outros
  const others = cases.slice(1);

  return (
    <section id="built" className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <FadeIn>
              <span className="eyebrow">{t.builtWithAi.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#1A1A1A]">
                {t.builtWithAi.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <FadeIn delay={0.1}>
              <p className="text-[17px] leading-[1.7] text-[#1A1A1A]/75">{t.builtWithAi.intro}</p>
            </FadeIn>
          </div>
        </div>

        {/* Featured case — Caso 1 */}
        <FadeIn delay={0.1}>
          <article className="mt-20 border border-[#E5E3DC] bg-white/40 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 aspect-[16/10] lg:aspect-auto bg-[#0A0A0C] relative overflow-hidden">
                <img
                  src={featured.cover ?? "/cases/bacen-reclame-aqui-cover.png"}
                  alt={featured.title[locale]}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-2 p-8 md:p-10 flex flex-col">
                <div className="eyebrow">{t.builtWithAi.featured}</div>
                <h3 className="mt-4 font-serif text-2xl md:text-[28px] leading-[1.15] text-[#1A1A1A]">
                  {featured.title[locale]}
                </h3>
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
                <a
                  href={featured.externalUrl ?? `/${locale}/feito-com-ia/${featured.slug}`}
                  target={featured.externalUrl ? "_blank" : undefined}
                  rel={featured.externalUrl ? "noreferrer" : undefined}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-[#B8862B] hover:underline underline-offset-4"
                >
                  {t.builtWithAi.featuredCta} →
                </a>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Other cases */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((c, i) => {
            const isComingSoon = c.status === "coming-soon";
            const hasCover = !!c.cover;
            const cardClasses = `border rounded-lg p-8 h-full transition-transform ${
              isComingSoon
                ? "border-[#E5E3DC] opacity-75"
                : "border-[#E5E3DC] hover:scale-[1.02] hover:border-[#B8862B]/40 cursor-pointer"
            }`;

            const cardContent = (
              <article className={cardClasses}>
                <div className="aspect-[16/9] -mx-2 -mt-2 mb-6 rounded bg-gradient-to-br from-[#F0EFE8] to-[#E5E3DC] relative overflow-hidden">
                  {hasCover && (
                    <img
                      src={c.cover}
                      alt={c.title[locale]}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
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

        {/* Ver todos */}
        <div className="mt-16 text-center">
          <Link
            to="/$locale/feito-com-ia"
            params={{ locale }}
            className="text-sm text-[#B8862B] hover:underline underline-offset-4"
          >
            {t.builtWithAi.viewAll} →
          </Link>
        </div>
      </div>
    </section>
  );
}
