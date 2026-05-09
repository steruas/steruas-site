import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useScrollToTop } from "@/lib/hooks";
import type { Locale } from "@/content/site";
import { FadeIn } from "@/components/FadeIn";

export function AboutFullPage({ locale }: { locale: Locale }) {
  const { t } = useI18n();
  useScrollToTop();

  const backLabel = locale === "pt" ? "Voltar para home" : "Back to home";

  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20">
          <FadeIn>
            <Link
              to="/$locale"
              params={{ locale }}
              className="inline-flex items-center gap-2 text-sm text-[#1A1A1A]/60 hover:text-[#B8862B] transition-colors mb-12"
            >
              <span aria-hidden>←</span>
              {backLabel}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] max-w-4xl">
              {t.about.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-16 md:mt-20 max-w-2xl space-y-6 text-[18px] leading-[1.75] text-[#1A1A1A]/80">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16 max-w-2xl flex flex-wrap gap-2">
              {t.about.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full border border-[#E5E3DC] text-xs uppercase tracking-[0.14em] text-[#1A1A1A]/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-20 max-w-2xl pt-8 border-t border-[#E5E3DC]">
              <Link
                to="/$locale"
                params={{ locale }}
                className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] border-b border-[#B8862B] pb-1 hover:text-[#B8862B] transition-colors"
              >
                <span aria-hidden>←</span>
                {backLabel}
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}