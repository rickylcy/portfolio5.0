"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Accessibility, Contrast, Minus, Plus, Pause } from "lucide-react";
import clsx from "clsx";

export default function A11yButton() {
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState("base"); // base | lg | xl
  const [contrast, setContrast] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const d = document.documentElement;
    d.classList.remove("fs-base", "fs-lg", "fs-xl");
    d.classList.add(`fs-${font}`);
    d.classList.toggle("hc", contrast);
    d.classList.toggle("reduce-motion", reduced);
    localStorage.setItem("a11y", JSON.stringify({ font, contrast, reduced }));
  }, [font, contrast, reduced]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("a11y") || "{}");
      if (saved.font) setFont(saved.font);
      if (typeof saved.contrast === "boolean") setContrast(saved.contrast);
      if (typeof saved.reduced === "boolean") setReduced(saved.reduced);
    } catch {}
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-2 rounded-xl border bg-background/95 backdrop-blur p-2 shadow-lg flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setFont(font === "base" ? "lg" : font === "lg" ? "xl" : "base")
            }
            title="Font size"
          >
            {font === "base" ? (
              <Plus className="h-4 w-4" />
            ) : font === "lg" ? (
              <Plus className="h-4 w-4" />
            ) : (
              <Minus className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant={contrast ? "default" : "outline"}
            size="icon"
            onClick={() => setContrast((v) => !v)}
            title="High contrast"
          >
            <Contrast className="h-4 w-4" />
          </Button>
          <Button
            variant={reduced ? "default" : "outline"}
            size="icon"
            onClick={() => setReduced((v) => !v)}
            title="Reduce motion"
          >
            <Pause className="h-4 w-4" />
          </Button>
        </div>
      )}
      <Button
        size="icon"
        className={clsx("rounded-full")}
        onClick={() => setOpen((v) => !v)}
        aria-label="Accessibility"
      >
        <Accessibility className="h-5 w-5" />
      </Button>
    </div>
  );
}
