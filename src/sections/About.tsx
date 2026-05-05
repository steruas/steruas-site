import { useI18n } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <FadeIn>
              <span className="eyebrow">{t.about.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#1A1A1A]">
                {t.about.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-[17px] leading-[1.7] text-[#1A1A1A]/80">
                {t.about.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {t.about.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full border border-[#E5E3DC] text-xs uppercase tracking-[0.14em] text-[#1A1A1A]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="mt-10 inline-flex items-center gap-2 text-sm text-[#1A1A1A] border-b border-[#B8862B] pb-1 hover:text-[#B8862B] transition-colors"
              >
                {t.about.download}
                <span aria-hidden>↓</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
