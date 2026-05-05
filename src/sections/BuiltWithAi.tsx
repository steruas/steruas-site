import { useI18n } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { cases } from "@/content/site";

export function BuiltWithAi() {
  const { t, locale } = useI18n();
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

        {/* Featured case */}
        <FadeIn delay={0.1}>
          <article className="mt-20 border border-[#E5E3DC] bg-white/40 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-[#F0EFE8] to-[#E5E3DC] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="eyebrow mb-3">Dashboard placeholder</div>
                    <div className="font-serif text-2xl text-[#1A1A1A]/40">[ embed area ]</div>
                  </div>
                </div>
                {/* faint chart lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 400 250">
                  <polyline fill="none" stroke="#B8862B" strokeWidth="1.5"
                    points="0,200 40,180 80,190 120,150 160,160 200,110 240,130 280,80 320,95 360,55 400,70" />
                  <polyline fill="none" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="3 3"
                    points="0,210 40,205 80,200 120,195 160,185 200,180 240,170 280,160 320,150 360,140 400,130" />
                </svg>
              </div>
              <div className="lg:col-span-2 p-8 md:p-10 flex flex-col">
                <div className="eyebrow">Featured</div>
                <h3 className="mt-4 font-serif text-2xl md:text-[28px] leading-[1.15] text-[#1A1A1A]">
                  {t.builtWithAi.featuredTitle}
                </h3>
                <div className="mt-5 space-y-4 text-[15px] leading-[1.65] text-[#1A1A1A]/75">
                  {t.builtWithAi.featuredDesc.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="eyebrow !text-[#1A1A1A]/50">{t.builtWithAi.tools}</div>
                    <div className="mt-2 text-[#1A1A1A]/80">Python · LLMs · dbt</div>
                  </div>
                  <div>
                    <div className="eyebrow !text-[#1A1A1A]/50">{t.builtWithAi.sector}</div>
                    <div className="mt-2 text-[#1A1A1A]/80">{locale === "pt" ? "Bancos" : "Banking"}</div>
                  </div>
                </div>
                <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm text-[#B8862B] hover:underline underline-offset-4">
                  {t.builtWithAi.featuredCta} →
                </a>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Smaller cases */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <article className="border border-[#E5E3DC] rounded-lg p-8 h-full transition-transform hover:scale-[1.02] hover:border-[#B8862B]/40 cursor-pointer">
                <div className="aspect-[16/9] -mx-2 -mt-2 mb-6 rounded bg-gradient-to-br from-[#F0EFE8] to-[#E5E3DC]" />
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
