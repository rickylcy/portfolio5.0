"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext({ lang: "en", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
    // reflect as attribute for CSS hooks if needed
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/* Simple copy dictionary */
export const copy = {
  en: {
    highlights: "Highlights",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
    based: "Based in Brisbane · Bilingual (EN/中文)",
    accessibility: "Accessibility",
  },
  zh: {
    highlights: "亮點",
    projects: "專案",
    contact: "聯絡",
    resume: "履歷",
    based: "位於布里斯班 · 雙語（英/中文）",
    accessibility: "無障礙",
  },
};
