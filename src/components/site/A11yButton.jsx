"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accessibility,
  Languages,
  Moon,
  Plus,
  Settings2,
  Sun,
  Type,
} from "lucide-react";
import clsx from "clsx";
import { useLang } from "@/lib/lang";

function getStoredA11y() {
  if (typeof window === "undefined") {
    return { font: "base", dark: false };
  }
  try {
    const saved = JSON.parse(localStorage.getItem("a11y") || "{}");
    const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    return {
      font: saved.font || "base",
      dark: typeof saved.dark === "boolean" ? saved.dark : Boolean(systemDark),
    };
  } catch {
    return { font: "base", dark: false };
  }
}

export default function A11yButton() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState(() => getStoredA11y().font); // base | lg | xl
  const [dark, setDark] = useState(() => getStoredA11y().dark);

  useEffect(() => {
    const d = document.documentElement;
    d.classList.remove("fs-base", "fs-lg", "fs-xl");
    d.classList.add(`fs-${font}`);
    // Remove legacy toggles since settings are now simplified.
    d.classList.remove("hc", "reduce-motion");
    d.classList.toggle("dark", dark);
    localStorage.setItem("a11y", JSON.stringify({ font, dark }));
    window.dispatchEvent(
      new CustomEvent("a11y:change", {
        detail: { font, dark },
      })
    );
  }, [font, dark]);

  function toggleFontSize() {
    setFont((v) => (v === "base" ? "lg" : v === "lg" ? "xl" : "base"));
  }

  function toggleLanguage() {
    setLang(lang === "en" ? "zh" : "en");
  }

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50">
      {open && (
        <div className="mb-2 sm:mb-3 w-[min(17rem,calc(100vw-1.5rem))] rounded-2xl border border-violet-200/80 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur p-2.5 sm:p-3 shadow-[0_18px_40px_-24px_rgba(31,38,135,0.55)] dark:shadow-[0_18px_40px_-24px_rgba(2,6,23,0.95)]">
          <div className="mb-2.5 text-[11px] sm:text-xs font-semibold tracking-wide text-violet-700 dark:text-violet-300">
            DISPLAY SETTINGS
          </div>

          <div className="grid gap-2">
            <Button
              variant="outline"
              className="justify-between border-violet-200 dark:border-slate-700"
              onClick={toggleFontSize}
            >
              <span className="inline-flex items-center gap-2">
                <Type className="h-4 w-4" />
                Text size
              </span>
              <span className="text-xs uppercase">{font}</span>
            </Button>

            <Button
              variant="outline"
              className="justify-between border-violet-200 dark:border-slate-700"
              onClick={toggleLanguage}
            >
              <span className="inline-flex items-center gap-2">
                <Languages className="h-4 w-4" />
                Language
              </span>
              <span className="text-xs">{lang === "en" ? "EN" : "中文"}</span>
            </Button>

            <Button
              variant={dark ? "default" : "outline"}
              className="justify-between border-violet-200 dark:border-slate-700"
              onClick={() => setDark((v) => !v)}
            >
              <span className="inline-flex items-center gap-2">
                {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                Dark mode
              </span>
              <span className="text-xs">{dark ? "On" : "Off"}</span>
            </Button>
          </div>
        </div>
      )}
      <Button
        size="icon"
        className={clsx(
          "rounded-full h-10 w-10 sm:h-12 sm:w-12 border border-violet-200 dark:border-slate-700",
          "bg-gradient-to-br from-violet-700 to-violet-900 hover:from-violet-600 hover:to-violet-800",
          "text-white shadow-[0_14px_28px_-16px_rgba(31,38,135,0.8)]"
        )}
        onClick={() => setOpen((v) => !v)}
        aria-label="Settings"
      >
        {open ? <Accessibility className="h-5 w-5" /> : <Settings2 className="h-5 w-5" />}
      </Button>
    </div>
  );
}
