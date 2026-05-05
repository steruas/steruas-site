import { useI18n } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { posts } from "@/content/site";

export function Blog() {
  const { t, locale } = useI18n();
  const fmt = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    year: "numeric", month: "short", day: "numeric",
  });

  return (
    <section id="blog" className="section-dark py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-dark pt-16 md:pt-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <FadeIn>
              <span className="eyebrow">{t.blog.eyebrow}</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#F5F5F0]">
                {t.blog.headline}
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <FadeIn delay={0.1}>
              <p className="text-[17px] leading-[1.7] text-[#F5F5F0]/70">{t.blog.intro}</p>
            </FadeIn>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
          {posts.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05} className="bg-[#0A0A0A]">
              <article className="h-full p-8 md:p-10 group cursor-pointer transition-transform hover:scale-[1.01]">
                <div className="eyebrow">{p.category[locale]}</div>
                <h3 className="mt-5 font-serif text-2xl leading-[1.2] text-[#F5F5F0] group-hover:text-[#B8862B] transition-colors">
                  {p.title[locale]}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.6] text-[#F5F5F0]/65 line-clamp-2">
                  {p.excerpt[locale]}
                </p>
                <div className="mt-8 flex items-center gap-3 text-xs text-[#F5F5F0]/50">
                  <time>{fmt.format(new Date(p.date))}</time>
                  <span aria-hidden>·</span>
                  <span>{p.readingTime} {t.blog.readingTime}</span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="text-sm text-[#B8862B] hover:underline underline-offset-4">
            {t.blog.viewAll} →
          </a>
        </div>
      </div>
    </section>
  );
}
