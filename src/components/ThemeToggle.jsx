import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export default function ThemeToggle() {
  const { t } = useLang();
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  const label = dark ? t.theme.toDay : t.theme.toNight;

  return (
    <button
      onClick={() => setDark((v) => !v)}
      aria-label={label}
      title={label}
      className="grid place-items-center w-10 h-10 rounded-lg border border-line bg-surface text-ink hover:border-brand hover:text-brand transition"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}