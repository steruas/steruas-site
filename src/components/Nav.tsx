import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { t, locale, other } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base = `/${locale}`;
  const otherPath = location.pathname.replace(/^\/(pt|en)/, `/${other}`) || `/${other}`;

  const items: Array<{ label: string; hash: string }> = [
    { label: t.nav.about, hash: "#about" },
    { label: t.nav.blog, hash: "#blog" },
    { label: t.nav.builtWithAi, hash: "#built" },
    { label: t.nav.contact, hash: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#FAFAF7]/75 border-b border-[#E5E3DC]" : ""
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16">
        <Link to="/$locale" params={{ locale }} className="font-serif text-xl tracking-tight text-[#1A1A1A]">
          M.
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-[#1A1A1A]">
          {items.map((it) => (
            <li key={it.hash}>
              <a href={`${base}${it.hash}`} className="hover:text-[#B8862B] transition-colors">
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          to={otherPath}
          className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A] hover:text-[#B8862B] transition-colors"
        >
          {locale === "pt" ? "EN" : "PT"}
        </Link>
      </nav>
    </header>
  );
}
