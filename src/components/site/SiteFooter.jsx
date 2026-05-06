"use client";
import Link from "next/link";
import { useLang, copy } from "@/lib/lang";

export default function SiteFooter() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <footer className="border-t ">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-6 py-6 sm:py-8 text-xs sm:text-sm text-muted-foreground flex flex-col md:flex-row gap-3 md:gap-2 items-center md:items-center md:justify-between">
        <div className="text-center md:text-left">© {new Date().getFullYear()} Ricky Lau</div>
        <div className="hidden sm:flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
          <span className="hidden sm:inline">{t.based}</span>
          <Link href="/#projects" className="hover:text-foreground">
            {t.projects}
          </Link>
          <Link href="/#resume" className="hover:text-foreground">
            {t.resume}
          </Link>
          <Link href="/#contact" className="hover:text-foreground">
            {t.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
