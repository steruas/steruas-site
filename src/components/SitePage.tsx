import { I18nProvider } from "@/lib/i18n";
import type { Locale } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Blog } from "@/sections/Blog";
import { BuiltWithAi } from "@/sections/BuiltWithAi";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export function SitePage({ locale }: { locale: Locale }) {
  return (
    <I18nProvider locale={locale}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Blog />
        <BuiltWithAi />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
