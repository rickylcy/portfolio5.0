"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";

const navCopy = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact Me",
  },
  zh: {
    home: "首頁",
    about: "關於",
    projects: "專案",
    resume: "履歷",
    contact: "聯絡我",
  },
};

export default function NavBar() {
  const { lang } = useLang();
  const t = navCopy[lang] || navCopy.en;
  const headerRef = useRef(null);

  const links = [
    { href: "/#home", label: t.home },
    { href: "/#about", label: t.about },
    { href: "/#projects", label: t.projects },
    { href: "/#resume", label: t.resume },
  ];

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateNavOffset = () => {
      document.documentElement.style.setProperty(
        "--nav-offset",
        `${el.offsetHeight}px`,
      );
    };

    updateNavOffset();
    const observer = new ResizeObserver(updateNavOffset);
    observer.observe(el);
    window.addEventListener("resize", updateNavOffset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateNavOffset);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed left-0 top-0 z-40 w-full bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-5 lg:px-6 pt-2 sm:pt-3 md:pt-4">
        <div className="h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-slate-900/90 px-2.5 sm:px-4 md:px-6 shadow-[0_12px_40px_-28px_rgba(31,38,135,0.45)] dark:shadow-[0_12px_40px_-28px_rgba(2,6,23,0.85)] backdrop-blur">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-violet-950 dark:text-violet-200"
          >
            <Image
              src="/logo.png"
              alt="Ricky Lau"
              width={120}
              height={32}
              priority
              className="h-[18px] sm:h-6 w-auto object-contain"
            />
            <span className="hidden min-[360px]:inline text-xs sm:text-sm md:text-[15px]">
              Ricky Lau
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-900 dark:hover:text-violet-200"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="rounded-md bg-violet-950 hover:bg-violet-900 dark:bg-violet-500 dark:hover:bg-violet-400 px-6"
            >
              <Link href="/#contact" className="whitespace-nowrap">
                {t.contact}
              </Link>
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-8 border-violet-300 dark:border-violet-400/70 text-violet-900 dark:text-violet-200 px-2"
            >
              <Link href="/#contact" className="whitespace-nowrap text-[11px]">
                {t.contact}
              </Link>
            </Button>
          </div>
        </div>

        <nav className="md:hidden mt-2 pb-1 grid grid-cols-4 gap-2 text-[11px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 rounded-lg bg-white/75 dark:bg-slate-900/70 py-1.5 text-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
