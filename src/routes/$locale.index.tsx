import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Blog } from "@/sections/Blog";
import { BuiltWithAi } from "@/sections/BuiltWithAi";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/$locale/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <BuiltWithAi />
      <Contact />
    </>
  );
}