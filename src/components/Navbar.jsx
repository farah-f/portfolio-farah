import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks as frLinks } from "../data";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import useActiveSection from "../hooks/useActiveSection";
import { useLang } from "../i18n/LanguageContext";

// Les ids de sections sont les mêmes dans les deux langues
const sectionIds = frLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const { t, d } = useLang();
  const navLinks = d.navLinks;
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#home" className="flex items-center gap-2 font-bold">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand text-white text-sm">
            FF
          </span>
          Farah Faggaa
        </a>

        <ul className="hidden md:flex gap-1 text-sm font-medium">
          {navLinks.map((l) => {
            const isActive = active === l.href.replace("#", "");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-brand bg-brand-soft"
                      : "text-muted hover:text-ink hover:bg-brand-soft"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden md:inline-block bg-brand text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            {t.nav.contact}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-line bg-surface text-ink hover:border-brand hover:text-brand transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-line bg-surface"
          >
            <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col">
              {navLinks.map((l) => {
                const isActive = active === l.href.replace("#", "");
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 text-lg font-medium border-b border-line transition-colors ${
                        isActive ? "text-brand" : "hover:text-brand"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-brand text-white font-semibold px-5 py-3 rounded-xl"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}