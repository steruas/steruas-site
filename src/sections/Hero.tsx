import { useI18n } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  const { t, locale } = useI18n();
  return (
    <section className="section-light pt-40 pb-32 md:pt-48 md:pb-40">
      <div className="container-wide grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <FadeIn>
            <span className="eyebrow block">{t.hero.eyebrow}</span>
          </FadeIn>
        </div>
        <div className="col-span-12 md:col-span-9">
          <FadeIn delay={0.05}>
            <h1 className="font-serif text-[44px] sm:text-[64px] md:text-[80px] leading-[1.02] tracking-[-0.025em] text-[#1A1A1A]">
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg md:text-xl leading-[1.6] text-[#1A1A1A]/75">
              {t.hero.sub}
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href={`/${locale}#built`}
                className="inline-flex items-center justify-center bg-[#B8862B] text-white px-6 h-12 rounded-md text-sm font-medium tracking-wide hover:bg-[#a3771f] transition-colors"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href={`/${locale}#blog`}
                className="inline-flex items-center justify-center px-6 h-12 rounded-md text-sm font-medium tracking-wide text-[#1A1A1A] border border-[#E5E3DC] hover:border-[#B8862B] hover:text-[#B8862B] transition-colors"
              >
                {t.hero.ctaGhost}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
