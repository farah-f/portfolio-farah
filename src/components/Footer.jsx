import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t, d } = useLang();

  return (
    <footer className="bg-night text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand text-sm">FF</span>
          Farah Faggaa
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
          {d.navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${d.contact.email}`} className="text-sm text-white/70 hover:text-white transition-colors">
          {d.contact.email}
        </a>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Farah Faggaa · {t.footer.built}
      </div>
    </footer>
  );
}