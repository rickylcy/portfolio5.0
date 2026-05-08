"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";
import {
  BriefcaseBusiness,
  FileText,
  Home,
  Mail,
  UserRound,
} from "lucide-react";

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
  const pathname = usePathname();
  const t = navCopy[lang] || navCopy.en;
  const headerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { href: "/#home", label: t.home, section: "home", icon: Home },
    { href: "/#about", label: t.about, section: "about", icon: UserRound },
    {
      href: "/#projects",
      label: t.projects,
      section: "projects",
      icon: BriefcaseBusiness,
    },
    { href: "/#resume", label: t.resume, section: "resume", icon: FileText },
  ];

  const mobileLinks = [
    ...links,
    { href: "/#contact", label: t.contact, section: "contact", icon: Mail },
  ];

  function isActive(section) {
    if (pathname === "/projects") return section === "projects";
    if (pathname === "/resume") return section === "resume";
    if (pathname !== "/") return section === "home";
    return activeSection === section;
  }

  function handleNavClick(section) {
    setActiveSection(section);
  }

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

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["home", "about", "projects", "resume", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

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
            {links.map((link) => {
              const active = isActive(link.section);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.section)}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-1.5 py-1 text-sm font-semibold transition-colors ${
                    active
                      ? "text-violet-950 dark:text-violet-100"
                      : "text-slate-700 hover:text-violet-900 dark:text-slate-200 dark:hover:text-violet-200"
                  }`}
                >
                  {active ? (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-800 dark:bg-violet-300" />
                  ) : null}
                  {link.label}
                </Link>
              );
            })}
            <Button
              asChild
              variant={isActive("contact") ? "secondary" : "default"}
              className={`rounded-md px-6 ${
                isActive("contact")
                  ? "border border-violet-200 bg-violet-100 text-violet-950 hover:bg-violet-100 dark:border-violet-400/40 dark:bg-violet-500/20 dark:text-violet-100"
                  : "bg-violet-950 hover:bg-violet-900 dark:bg-violet-500 dark:hover:bg-violet-400"
              }`}
            >
              <Link
                href="/#contact"
                className="whitespace-nowrap"
                onClick={() => handleNavClick("contact")}
                aria-current={isActive("contact") ? "page" : undefined}
              >
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
              <Link
                href="/#contact"
                className="whitespace-nowrap text-[11px]"
                onClick={() => handleNavClick("contact")}
              >
                {t.contact}
              </Link>
            </Button>
          </div>
        </div>

        <nav className="md:hidden mt-2 pb-1">
          <div className="grid grid-cols-5 gap-1.5 rounded-2xl bg-white/82 p-1.5 text-[10px] shadow-[0_12px_32px_-26px_rgba(31,38,135,0.55)] backdrop-blur dark:bg-slate-900/78 dark:shadow-[0_12px_32px_-26px_rgba(2,6,23,0.95)]">
            {mobileLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.section);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.section)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 font-semibold transition-all ${
                    active
                      ? "bg-violet-950 text-white shadow-sm dark:bg-violet-500 dark:text-white"
                      : "text-slate-600 hover:bg-violet-50 hover:text-violet-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-100"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="max-w-full truncate">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
