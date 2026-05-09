import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useScrollToTop } from "@/lib/hooks";
import { FadeIn } from "@/components/FadeIn";
import { posts } from "@/content/site";
import type { Locale } from "@/content/site";

export const Route = createFileRoute("/$locale/ensaios/$slug")({
  loader: ({ params }) => {
    if (params.locale !== "pt" && params.locale !== "en") throw notFound();
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { locale: params.locale as Locale, post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { locale, post } = loaderData;
    const title = `${post.title[locale]} — M.`;
    const desc = post.excerpt[locale];
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { locale, post } = Route.useLoaderData();
  const { t } = useI18n();
  useScrollToTop();
  const fmt = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const backLabel = locale === "pt" ? "Voltar para ensaios" : "Back to essays";

  return (
    <article className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20">
          <FadeIn>
            <Link
              to="/$locale/ensaios"
              params={{ locale }}
              className="inline-flex items-center gap-2 text-sm text-[#1A1A1A]/60 hover:text-[#B8862B] transition-colors mb-12"
            >
              <span aria-hidden>←</span>
              {backLabel}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="eyebrow">{post.category[locale]}</div>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] max-w-4xl">
              {post.title[locale]}
            </h1>
            <div className="mt-6 flex items-center gap-3 text-sm text-[#1A1A1A]/50">
              <time>{fmt.format(new Date(post.date))}</time>
              <span aria-hidden>·</span>
              <span>
                {post.readingTime} {t.blog.readingTime}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-16 md:mt-20 max-w-2xl space-y-6 text-[18px] leading-[1.75] text-[#1A1A1A]/80">
              {post.body[locale].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-20 max-w-2xl pt-8 border-t border-[#E5E3DC]">
              <Link
                to="/$locale/ensaios"
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
    </article>
  );
}