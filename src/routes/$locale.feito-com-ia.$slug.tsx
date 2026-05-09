import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { cases } from "@/content/site";
import type { Locale } from "@/content/site";

export const Route = createFileRoute("/$locale/feito-com-ia/$slug")({
  loader: ({ params }) => {
    if (params.locale !== "pt" && params.locale !== "en") throw notFound();
    const project = cases.find((c) => c.slug === params.slug);
    if (!project) throw notFound();
    if (project.status === "coming-soon") throw notFound();
    return { locale: params.locale as Locale, project };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}