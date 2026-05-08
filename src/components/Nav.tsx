import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { t, locale, other } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Fecha com Esc
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

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
        scrolled || menuOpen ? "backdrop-blur-md bg-[#FAFAF7]/75 border-b border-[#E5E3DC]" : ""
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16">
        <Link
          to="/$locale"
          params={{ locale }}
          className="font-serif text-xl tracking-tight text-[#1A1A1A]"
          onClick={() => setMenuOpen(false)}
        >
          M.
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[#1A1A1A]">
          {items.map((it) => (
            <li key={it.hash}>
              <a href={`${base}${it.hash}`} className="hover:text-[#B8862B] transition-colors">
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle de idioma desktop */}
        <Link
          to={otherPath}
          className="hidden md:inline-flex text-xs uppercase tracking-[0.18em] text-[#1A1A1A] hover:text-[#B8862B] transition-colors"
        >
          {locale === "pt" ? "EN" : "PT"}
        </Link>

        {/* Botão hambúrguer mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col justify-between w-6 h-4 relative z-50"
        >
          <span
            className={`h-[1.5px] bg-[#1A1A1A] transition-transform duration-300 origin-left ${
              menuOpen ? "rotate-45 translate-x-[2px]" : ""
            }`}
          />
          <span
            className={`h-[1.5px] bg-[#1A1A1A] transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] bg-[#1A1A1A] transition-transform duration-300 origin-left ${
              menuOpen ? "-rotate-45 translate-x-[2px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile (top sheet + dim) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim atrás do menu */}
            <motion.div
              key="dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0 top-16 bg-[#1A1A1A]/30 z-40"
              aria-hidden
            />

            {/* Top sheet com os links */}
            <motion.div
              key="sheet"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden absolute inset-x-0 top-16 bg-[#F0EDE3] border-b border-[#E5E3DC] z-40"
            >
              <ul className="container-wide py-8 flex flex-col gap-6 text-base text-[#1A1A1A]">
                {items.map((it) => (
                  <li key={it.hash}>
                      <a
                      href={`${base}${it.hash}`}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-[#B8862B] transition-colors"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4 border-t border-[#E5E3DC]">
                  <Link
                    to={otherPath}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A] hover:text-[#B8862B] transition-colors"
                  >
                    {locale === "pt" ? "EN" : "PT"}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}