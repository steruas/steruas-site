import { useI18n } from "@/lib/i18n";
import { useScrollToTop } from "@/lib/hooks";
import type { Locale } from "@/content/site";
import { FadeIn } from "@/components/FadeIn";

export function AboutFullPage({ locale: _locale }: { locale: Locale }) {
const { t } = useI18n();
  useScrollToTop();

  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20">
          <FadeIn>
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
        </div>
      </div>
    </section>
  );
}