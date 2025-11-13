"use client";
import Link from "next/link";
import { useLang, copy } from "@/lib/lang";

export default function SiteFooter() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <footer className="border-t ">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Ricky Lau</div>
        <div className="flex gap-4">
          <span className="hidden sm:inline">{t.based}</span>
          <Link href="/projects" className="hover:text-foreground">
            {t.projects}
          </Link>
          <Link href="/resume" className="hover:text-foreground">
            {t.resume}
          </Link>
          <Link href="#contact" className="hover:text-foreground">
            {t.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
