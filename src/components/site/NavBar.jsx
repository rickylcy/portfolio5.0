"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLang, copy } from "@/lib/lang";
import LangSwitch from "@/components/site/LangSwitch";

export default function NavBar() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/logo.png"
            alt="Ricky Lau"
            width={120}
            height={32}
            priority
            className="h-6 w-auto object-contain"
          />
          <span className="hidden sm:inline">Ricky Lau Portfolio 5.0</span>
        </Link>

        <nav className="hidden md:flex items-center gap-3">
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t.projects}
          </Link>
          {/* 🔁 always go to home + scroll to contact */}
          <Link
            href="/#contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t.contact}
          </Link>
          <Button asChild size="sm" className="ml-2">
            <Link href="/resume">{t.resume}</Link>
          </Button>
          <LangSwitch />
        </nav>

        {/* Mobile: lang switch + resume button */}
        <div className="md:hidden flex items-center gap-2">
          <LangSwitch compact />
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="h-8 px-3 rounded-full"
          >
            <Link href="/resume">{t.resume}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
