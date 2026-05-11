import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useScrollToTop } from "@/lib/hooks";
import { FadeIn } from "@/components/FadeIn";
import { posts } from "@/content/site";
import type { Locale } from "@/content/site";

export const Route = createFileRoute("/$locale/ensaios/")({
  loader: ({ params }) => {
    if (params.locale !== "pt" && params.locale !== "en") throw notFound();
    return { locale: params.locale as Locale };
  },
  head: ({ params }) => {
    const isPt = params.locale === "pt";
    const title = isPt ? "Ensaios — SteRuas" : "Essays — SteRuas";
    const desc = isPt
      ? "Ensaios sobre IA, growth e o futuro do trabalho. Notas de campo, reações ao que estou lendo, e tentativas de articular pensamento próprio."
      : "Essays on AI, growth, and the future of work. Field notes, reactions to what I'm reading, and attempts to articulate my own thinking.";
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
  const fmt = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20">
          <FadeIn>
            <span className="eyebrow">{t.blog.eyebrow}</span>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] max-w-4xl">
              {t.blog.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-[#1A1A1A]/70">
              {t.blog.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="mt-20 max-w-3xl divide-y divide-[#E5E3DC]">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/$locale/ensaios/$slug"
                    params={{ locale, slug: p.slug }}
                    className="block py-8 group"
                  >
                    <div className="eyebrow">{p.category[locale]}</div>
                    <h2 className="mt-3 font-serif text-2xl md:text-3xl leading-[1.2] text-[#1A1A1A] group-hover:text-[#B8862B] transition-colors">
                      {p.title[locale]}
                    </h2>
                    <p className="mt-3 text-[16px] leading-[1.6] text-[#1A1A1A]/70 line-clamp-2">
                      {p.excerpt[locale]}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-[#1A1A1A]/50">
                      <time>{fmt.format(new Date(p.date))}</time>
                      <span aria-hidden>·</span>
                      <span>
                        {p.readingTime} {t.blog.readingTime}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}