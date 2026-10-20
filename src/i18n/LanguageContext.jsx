import { createContext, useContext, useEffect, useState } from "react";
import * as fr from "../data";
import * as en from "../data.en";
import { ui } from "./ui";

const datasets = { fr, en };
const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") return saved;
    } catch {}
    return navigator.language?.startsWith("fr") ? "fr" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const value = { lang, setLang, t: ui[lang], d: datasets[lang] };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);