import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="section-dark hairline-dark">
      <div className="container-wide py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-[#F5F5F0]/70">
        <div>
          <div className="font-serif text-2xl text-[#F5F5F0]">SteRuas</div>
          <p className="mt-3 max-w-xs">{t.footer.tagline}</p>
        </div>
        <ul className="space-y-2">
          <li><a href="#about" className="hover:text-[#B8862B] transition-colors">{t.nav.about}</a></li>
          <li><a href="#blog" className="hover:text-[#B8862B] transition-colors">{t.nav.blog}</a></li>
          <li><a href="#built" className="hover:text-[#B8862B] transition-colors">{t.nav.builtWithAi}</a></li>
          <li><a href="#contact" className="hover:text-[#B8862B] transition-colors">{t.nav.contact}</a></li>
        </ul>
        <ul className="space-y-2 md:text-right">
          <li><a href="https://www.linkedin.com/in/steruas/" className="hover:text-[#B8862B] transition-colors">LinkedIn</a></li>
          <li><a href="https://wa.me/5511951629833" className="hover:text-[#B8862B] transition-colors">WhatsApp</a></li>
        </ul>
      </div>
      <div className="hairline-dark">
        <div className="container-wide py-6 text-xs text-[#F5F5F0]/45 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 SteRuas · {t.footer.built}</span>
          <span>São Paulo / Remote</span>
        </div>
      </div>
    </footer>
  );
}