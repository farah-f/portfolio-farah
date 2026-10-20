import { Globe } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  const next = lang === "fr" ? "en" : "fr";

  return (
    <button
      onClick={() => setLang(next)}
      aria-label={t.langSwitch}
      title={t.langSwitch}
      className="flex items-center gap-1.5 h-10 px-3 rounded-lg border border-line bg-surface text-ink text-sm font-semibold hover:border-brand hover:text-brand transition"
    >
      <Globe size={16} />
      {next.toUpperCase()}
    </button>
  );
}