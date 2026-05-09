import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale/feito-com-ia")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}