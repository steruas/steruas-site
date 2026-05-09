import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale/ensaios")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}