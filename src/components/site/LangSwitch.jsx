"use client";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLang } from "@/lib/lang";

/**
 * Global language switch used in NavBar (desktop + mobile).
 *
 * Props:
 *  - compact?: boolean  → mobile version, icon only
 */
export default function LangSwitch({ compact = false }) {
  const { lang, setLang } = useLang();
  const isEN = lang === "en";
  const label = isEN ? "EN" : "中文";

  function toggle() {
    setLang(isEN ? "zh" : "en");
  }

  if (compact) {
    // Mobile: icon-only, round pill
    return (
      <Button
        variant="outline"
        size="icon"
        onClick={toggle}
        aria-label="Language switch"
        className="rounded-full"
      >
        <Languages className="h-4 w-4" />
      </Button>
    );
  }

  // Desktop: icon + label (same style as the old floating one)
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggle}
      aria-label="Language switch"
      className="rounded-full"
    >
      <Languages className="h-4 w-4 mr-2" />
      {label}
    </Button>
  );
}
