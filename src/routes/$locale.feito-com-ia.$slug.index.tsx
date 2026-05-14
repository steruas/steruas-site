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

// Renderiza texto com **negrito** e `código inline`
function renderInline(text: string) {
  // Quebra por code, depois bold dentro de cada pedaço
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="font-mono text-[0.9em] bg-[#F0EFE8] px-1.5 py-0.5 rounded">
          {part.slice(1, -1)}
        </code>
      );
    }
    const bolds = part.split(/(\*\*[^*]+\*\*)/g);
    return bolds.map((b, j) => {
      if (b.startsWith("**") && b.endsWith("**")) {
        return <strong key={`${i}-${j}`} className="font-semibold text-[#1A1A1A]">{b.slice(2, -2)}</strong>;
      }
      return <span key={`${i}-${j}`}>{b}</span>;
    });
  });
}

function RouteComponent() {
  const { locale, project } = ParentRoute.useLoaderData();
  const { t } = useI18n();
  useScrollToTop();

  const backLabel = locale === "pt" ? "Voltar para projetos" : "Back to projects";
  // sections é opcional — só existe em cases que têm conteúdo rico
  const sections = (project as { sections?: { pt: unknown[]; en: unknown[] } }).sections?.[locale] as
    | Array<
        | { type: "heading"; eyebrow: string; title: string }
        | { type: "paragraph"; text: string }
        | { type: "callout"; label: string; text: string }
        | { type: "image"; src: string; alt: string; caption?: string }
        | { type: "tools-list"; items: Array<{ name: string; role: string; desc: string }> }
        | { type: "lessons"; items: Array<{ title: string; body: string }> }
      >
    | undefined;

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

          {/* Body padrão (parágrafos simples — usado pelo Bacen e como intro do post novo) */}
          <FadeIn delay={0.1}>
            <div className="mt-16 md:mt-20 max-w-2xl space-y-6 text-[18px] leading-[1.75] text-[#1A1A1A]/80">
              {project.body[locale].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>

          {/* Sections (conteúdo rico — opcional, usado pelo post 'como construí este site') */}
          {sections && (
            <FadeIn delay={0.15}>
              <div className="mt-16 max-w-2xl">
                {sections.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <div key={i} className="mt-20 first:mt-0">
                        <div className="eyebrow">{block.eyebrow}</div>
                        <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-[1.1] tracking-tight text-[#1A1A1A]">
                          {block.title}
                        </h2>
                      </div>
                    );
                  }
                  if (block.type === "paragraph") {
                    return (
                      <p key={i} className="mt-6 text-[18px] leading-[1.75] text-[#1A1A1A]/80">
                        {renderInline(block.text)}
                      </p>
                    );
                  }
                  if (block.type === "callout") {
                    return (
                      <div key={i} className="mt-10 border-l-2 border-[#B8862B] bg-[#F0EFE8] px-6 py-5">
                        <div className="eyebrow text-[#B8862B]">{block.label}</div>
                        <p className="mt-3 text-[17px] leading-[1.7] text-[#1A1A1A]/85">
                          {renderInline(block.text)}
                        </p>
                      </div>
                    );
                  }
                  if (block.type === "image") {
                    return (
                      <figure key={i} className="mt-10">
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="w-full rounded border border-[#E5E3DC]"
                          loading="lazy"
                        />
                        {block.caption && (
                          <figcaption className="mt-3 text-xs text-[#1A1A1A]/50 text-center uppercase tracking-[0.15em]">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                  if (block.type === "tools-list") {
                    return (
                      <div key={i} className="mt-10 divide-y divide-[#E5E3DC] border-t border-b border-[#E5E3DC]">
                        {block.items.map((tool, j) => (
                          <div key={j} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 py-5">
                            <div>
                              <div className="font-serif text-xl text-[#1A1A1A]">{tool.name}</div>
                              <div className="eyebrow text-[#B8862B] mt-1 !text-[10px]">{tool.role}</div>
                            </div>
                            <p className="text-[15px] leading-[1.6] text-[#1A1A1A]/70">
                              {renderInline(tool.desc)}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  if (block.type === "lessons") {
                    return (
                      <div key={i} className="mt-10 divide-y divide-[#E5E3DC]">
                        {block.items.map((lesson, j) => (
                          <div key={j} className="py-6">
                            <div className="flex items-baseline gap-4">
                              <span className="font-serif italic text-2xl text-[#B8862B] leading-none">
                                {["i.", "ii.", "iii.", "iv.", "v.", "vi."][j]}
                              </span>
                              <h3 className="font-serif text-xl font-medium text-[#1A1A1A]">
                                {lesson.title}
                              </h3>
                            </div>
                            <p className="mt-3 pl-10 text-[16px] leading-[1.65] text-[#1A1A1A]/80">
                              {renderInline(lesson.body)}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </FadeIn>
          )}

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
