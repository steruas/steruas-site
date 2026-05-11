import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useScrollToTop } from "@/lib/hooks";
import { FadeIn } from "@/components/FadeIn";
import { Route as ParentRoute } from "./$locale.feito-com-ia.$slug";

export const Route = createFileRoute("/$locale/feito-com-ia/$slug/")({
  head: ({ params }) => {
    return {
      meta: [
        { title: `${params.slug} — SteRuas` },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { locale, project } = ParentRoute.useLoaderData();
  const { t } = useI18n();
  useScrollToTop();

  const backLabel = locale === "pt" ? "Voltar para projetos" : "Back to projects";

  return (
    <article className="section-light py-24 md:py-32">
      <div className="container-wide">
        <div className="hairline-light pt-16 md:pt-20">
          <FadeIn>
            <Link
              to="/$locale/feito-com-ia"
              params={{ locale }}
              className="inline-flex items-center gap-2 text-sm text-[#1A1A1A]/60 hover:text-[#B8862B] transition-colors mb-12"
            >
              <span aria-hidden>←</span>
              {backLabel}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="eyebrow">{t.builtWithAi.eyebrow}</div>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] max-w-4xl">
              {project.title[locale]}
            </h1>

            <div className="mt-8 max-w-2xl flex flex-wrap gap-3 text-xs">
              <div>
                <div className="eyebrow !text-[#1A1A1A]/50">{t.builtWithAi.tools}</div>
                <div className="mt-2 text-[#1A1A1A]/80">{project.tools.join(" · ")}</div>
              </div>
              <div className="ml-8">
                <div className="eyebrow !text-[#1A1A1A]/50">{t.builtWithAi.sector}</div>
                <div className="mt-2 text-[#1A1A1A]/80">{project.sector[locale]}</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-16 md:mt-20 max-w-2xl space-y-6 text-[18px] leading-[1.75] text-[#1A1A1A]/80">
              {project.body[locale].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>

          {/* Lista de instituições */}
          {project.institutions.length > 0 && (
            <FadeIn delay={0.15}>
              <div className="mt-20 max-w-3xl">
                <h2 className="font-serif text-2xl md:text-3xl leading-[1.2] text-[#1A1A1A] mb-8">
                  {t.builtWithAi.institutions}
                </h2>
                <ul className="divide-y divide-[#E5E3DC]">
                  {project.institutions.map((inst) => (
                    <li key={inst.slug}>
                      <Link
                        to="/$locale/feito-com-ia/$slug/$instituicao"
                        params={{ locale, slug: project.slug, instituicao: inst.slug }}
                        className="block py-6 group"
                      >
                        <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] group-hover:text-[#B8862B] transition-colors flex items-center justify-between">
                          <span>{inst.name}</span>
                          <span aria-hidden className="text-[#B8862B] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.2}>
            <div className="mt-20 max-w-2xl pt-8 border-t border-[#E5E3DC]">
              <Link
                to="/$locale/feito-com-ia"
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