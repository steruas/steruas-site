import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useScrollToTop } from "@/lib/hooks";
import { FadeIn } from "@/components/FadeIn";
import { Route as ParentRoute } from "./$locale.feito-com-ia.$slug";

export const Route = createFileRoute("/$locale/feito-com-ia/$slug/$instituicao")({
  loader: ({ params }) => {
    return { instituicaoSlug: params.instituicao };
  },
  head: ({ params }) => {
    return {
      meta: [
        { title: `${params.instituicao} — ${params.slug} — M.` },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { locale, project } = ParentRoute.useLoaderData();
  const { instituicaoSlug } = Route.useLoaderData();
  const { t } = useI18n();
  useScrollToTop();

  const institution = project.institutions.find((inst) => inst.slug === instituicaoSlug);
  if (!institution) throw notFound();

  const backLabel = locale === "pt" ? `Voltar para ${project.title[locale]}` : `Back to ${project.title[locale]}`;

  return (
    <article className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20">
          <FadeIn>
            <Link
              to="/$locale/feito-com-ia/$slug"
              params={{ locale, slug: project.slug }}
              className="inline-flex items-center gap-2 text-sm text-[#1A1A1A]/60 hover:text-[#B8862B] transition-colors mb-12"
            >
              <span aria-hidden>←</span>
              {backLabel}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="eyebrow">{project.title[locale]}</div>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] max-w-4xl">
              {institution.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-16 md:mt-20 max-w-2xl space-y-6 text-[18px] leading-[1.75] text-[#1A1A1A]/80">
              {institution.body[locale].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-20 max-w-2xl pt-8 border-t border-[#E5E3DC]">
              <Link
                to="/$locale/feito-com-ia/$slug"
                params={{ locale, slug: project.slug }}
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