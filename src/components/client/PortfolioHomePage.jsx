"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  Layers,
  Mail,
  MonitorSmartphone,
  Linkedin as LinkedinIcon,
  MoveRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/lib/lang";
import ResumePreviewCard from "@/components/resume/ResumePreviewCard";
import SiteFooter from "@/components/site/SiteFooter";

const homeCopy = {
  en: {
    based: "Based in Brisbane · Bilingual (EN/中文)",
    hi: "Hi, I'm",
    role: "Ricky Lau",
    roleSub: "Full-Stack Developer",
    intro:
      "I build practical web products focused on usability, reliable architecture, and maintainable code.",
    viewProjects: "View projects",
    contactCta: "Contact me",
    aboutEyebrow: "About",
    aboutTitle: "Simple, reliable product delivery",
    aboutText:
      "I work from problem to production: clear requirements, clean UI, stable data flow, and practical deployment.",
    aboutHelpTitle: "How I can help you",
    help1: "Responsive web apps with strong UX foundations",
    help2: "Business workflows for reporting, ordering, and dashboards",
    help3: "Integrations for APIs, payments, and printing devices",
    projectsEyebrow: "Featured projects",
    projectsTitle: "Core work",
    projectsSubtitle:
      "A focused set of production and client projects that represent my main strengths.",
    previous: "Previous",
    next: "Next",
    viewSite: "Visit site",
    nextProject: "Next project",
    stackLabel: "Tech",
    contactTitle: "Contact",
    contactSubtitle: "Let's build something useful",
    contactFormTitle: "Send a message",
    contactNamePlaceholder: "Your name",
    contactEmailPlaceholder: "Your email",
    contactMessagePlaceholder: "Your message",
    sendEmail: "Send email",
    connectLinkedIn: "Open LinkedIn",
    contactButton: "Send message",
    contactSuccess: "Message sent. I will get back to you soon.",
    contactError:
      "Failed to send. Please try again, or email me at rickylcy8183@gmail.com.",
    featured: [
      {
        id: "noodles-broadbeach",
        icon: Layers,
        kind: "Business / Internal",
        title: "Noodle Broadbeach System",
        summary:
          "Unified reporting, accounting, and rostering platform for a multi-store restaurant group.",
        points: [
          "Replaced spreadsheet and chat-based reporting",
          "Role-based access with bilingual UI",
          "Improved daily operations visibility across stores",
        ],
        stack: "Next.js, NextAuth, MongoDB, Tailwind",
      },
      {
        id: "visa-portal",
        icon: Globe,
        kind: "Business / Client",
        title: "Visa Portal",
        summary:
          "Public-facing website that helps customers understand visa steps and submit enquiries.",
        points: [
          "Clear process-focused information architecture",
          "Simple client-maintainable content structure",
          "Improved trust and enquiry conversion",
        ],
        stack: "Next.js, Forms, Content Pages",
        liveUrl: "https://visatochina.com.au/",
      },
      {
        id: "mobile-ordering",
        icon: MonitorSmartphone,
        kind: "Production",
        title: "Mobile Ordering",
        summary:
          "QR dine-in and takeaway ordering with POS integration, printer routing, and store admin tools.",
        points: [
          "Reduced order double-entry",
          "Integrated ESC/POS and label printing",
          "Reusable rollout model for multiple stores",
        ],
        stack: "Next.js, MSSQL, Node.js, ESC/POS, Linkly/Tyro",
      },
      {
        id: "sales-report",
        icon: Code2,
        kind: "Internal",
        title: "Sales Report Dashboard",
        summary:
          "Responsive analytics dashboard for daily, hourly, and item-level sales performance.",
        points: [
          "Actionable KPIs for owners and managers",
          "Date, store, and time-window filters",
          "Improved staffing and promotion decisions",
        ],
        stack: "Next.js, Recharts, REST APIs, Tailwind",
      },
      {
        id: "customer-display",
        icon: MonitorSmartphone,
        kind: "Production",
        title: "POS Customer Display",
        summary:
          "Secondary counter display that mirrors basket updates, totals, and promotional content in real time.",
        points: [
          "Live sync with main POS terminal",
          "Cleaner customer-facing checkout experience",
          "Modernized front-of-house presentation",
        ],
        stack: ".NET/WPF, Multi-screen Sync",
      },
    ],
  },
  zh: {
    based: "位於布里斯本 · 雙語（英/中文）",
    hi: "你好，我是",
    role: "Ricky Lau",
    roleSub: "全端工程師",
    intro: "我專注打造實用且穩定的網頁產品，重視使用體驗、可維護架構與可靠交付。",
    viewProjects: "查看專案",
    contactCta: "聯絡我",
    aboutEyebrow: "關於我",
    aboutTitle: "簡潔、可靠的產品交付",
    aboutText: "我從問題到上線完整負責：釐清需求、設計介面、穩定資料流程，再落地部署。",
    aboutHelpTitle: "我可以協助你什麼",
    help1: "具備良好體驗的響應式網站",
    help2: "報表、點餐、儀表板等商業流程系統",
    help3: "API、金流與列印設備整合",
    projectsEyebrow: "精選專案",
    projectsTitle: "核心作品",
    projectsSubtitle: "精選正式上線與商業專案，呈現我主要的產品與工程能力。",
    previous: "上一個",
    next: "下一個",
    viewSite: "前往網站",
    nextProject: "下一個專案",
    stackLabel: "技術",
    contactTitle: "聯絡",
    contactSubtitle: "一起做出真正有用的產品",
    contactFormTitle: "傳送訊息",
    contactNamePlaceholder: "你的名字",
    contactEmailPlaceholder: "你的 Email",
    contactMessagePlaceholder: "你的訊息",
    sendEmail: "寄送 Email",
    connectLinkedIn: "開啟 LinkedIn",
    contactButton: "送出訊息",
    contactSuccess: "訊息已送出，我會盡快回覆。",
    contactError: "寄送失敗，請再試一次，或直接寫信到 rickylcy8183@gmail.com。",
    featured: [
      {
        id: "noodles-broadbeach",
        icon: Layers,
        kind: "商業 / 內部",
        title: "Noodle Broadbeach 系統",
        summary: "整合營業報表、會計與排班的多店管理平台。",
        points: [
          "取代原本試算表與聊天工具流程",
          "角色權限與中英雙語介面",
          "提升跨店營運可視化與管理效率",
        ],
        stack: "Next.js, NextAuth, MongoDB, Tailwind",
      },
      {
        id: "visa-portal",
        icon: Globe,
        kind: "商業 / 客戶",
        title: "Visa Portal",
        summary: "協助客戶理解簽證流程並留下詢問資料的對外網站。",
        points: [
          "流程導向的清晰資訊架構",
          "容易維護的內容管理方式",
          "提升品牌信任與詢問轉換",
        ],
        stack: "Next.js, 表單, 內容頁",
        liveUrl: "https://visatochina.com.au/",
      },
      {
        id: "mobile-ordering",
        icon: MonitorSmartphone,
        kind: "正式上線",
        title: "行動點餐系統",
        summary: "支援 QR 內用與外帶點餐，整合 POS、印表機路由與門市後台。",
        points: [
          "降低重複輸入訂單",
          "整合 ESC/POS 與標籤列印",
          "可快速複製到多間門市",
        ],
        stack: "Next.js, MSSQL, Node.js, ESC/POS, Linkly/Tyro",
      },
      {
        id: "sales-report",
        icon: Code2,
        kind: "內部系統",
        title: "Sales Report Dashboard",
        summary: "提供日、時段與商品層級銷售分析的響應式儀表板。",
        points: [
          "讓老闆與主管快速掌握 KPI",
          "支援日期、分店、時段篩選",
          "協助排班與行銷決策",
        ],
        stack: "Next.js, Recharts, REST APIs, Tailwind",
      },
      {
        id: "customer-display",
        icon: MonitorSmartphone,
        kind: "正式上線",
        title: "POS 客顯系統",
        summary: "櫃檯副螢幕即時顯示購物籃、金額與促銷資訊，提升結帳透明度。",
        points: [
          "與主 POS 終端即時同步",
          "提供更清楚的客戶結帳體驗",
          "提升門市前台的整體專業感",
        ],
        stack: ".NET/WPF, 多螢幕同步",
      },
    ],
  },
};

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  hideEyebrowOnMobile = false,
  hideSubtitleOnMobile = false,
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <Badge
          variant="outline"
          className={`mb-3 sm:mb-4 border-violet-300 text-violet-800 dark:border-violet-500/50 dark:text-violet-200 text-[11px] sm:text-xs ${
            hideEyebrowOnMobile ? "hidden sm:inline-flex" : ""
          }`}
        >
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="text-[1.6rem] sm:text-[2.05rem] md:text-[2.8rem] lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7 ${
            hideSubtitleOnMobile ? "hidden sm:block" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function DottedSurface({ children, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden sm:rounded-3xl bg-gradient-to-br from-white to-violet-50/40 dark:from-slate-900 dark:to-slate-950 shadow-[0_20px_60px_-40px_rgba(31,38,135,0.35)] dark:shadow-[0_20px_60px_-40px_rgba(2,6,23,0.9)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--dot-color) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}

function Hero({ t }) {
  return (
    <section
      id="home"
      className="scroll-mt-0 snap-start snap-always h-[100svh]"
    >
      <DottedSurface className="p-4 sm:p-7 md:p-10 lg:p-14 h-[100svh] flex items-center">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-5 sm:gap-10 md:gap-12 items-center lg:min-h-[620px]">
          <div>
            <Badge className="mb-4 sm:mb-5 rounded-sm bg-violet-950 hover:bg-violet-950 dark:bg-violet-500 dark:hover:bg-violet-500 text-white px-2.5 py-1 text-[11px] sm:text-xs">
              {t.based}
            </Badge>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300">
              {t.hi}
            </p>
            <h1 className="mt-2 text-[2rem] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.03] text-violet-900 dark:text-violet-200">
              {t.role}
            </h1>
            <p className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-[1.8rem] font-semibold text-slate-800 dark:text-slate-100">
              {t.roleSub}
            </p>
            <p className="mt-3 sm:mt-6 text-sm sm:text-[1.03rem] leading-6 sm:leading-8 text-slate-600 dark:text-slate-300 max-w-xl">
              {t.intro}
            </p>

            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
              <Button
                asChild
                size="lg"
                className="h-11 w-full sm:w-auto px-6 sm:px-7 rounded-md bg-violet-950 hover:bg-violet-900 dark:bg-violet-500 dark:hover:bg-violet-400"
              >
                <Link href="#projects">
                  {t.viewProjects} <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 w-full sm:w-auto px-6 sm:px-7 rounded-md border-violet-400 dark:border-violet-400/70 text-violet-900 dark:text-violet-200"
              >
                <Link href="#contact">{t.contactCta}</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative pt-2 sm:pt-4 lg:pt-0">
            <div className="hidden lg:block absolute right-0 top-0 h-[84%] w-[88%] rounded-2xl bg-violet-950 dark:bg-violet-600/90" />
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl p-2.5 sm:p-3 md:p-4">
              <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/resume-thumb.png"
                  alt="Ricky Lau profile"
                  fill
                  className="object-cover object-top scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </DottedSurface>
    </section>
  );
}

function AboutSection({ t }) {
  return (
    <section
      id="about"
      className="scroll-mt-0 snap-start snap-always h-[100svh]"
    >
      <DottedSurface className="px-4 pb-4 pt-[calc(var(--nav-offset)+1rem)] sm:px-7 sm:pb-7 sm:pt-[calc(var(--nav-offset)+1.75rem)] md:px-10 md:pb-10 lg:px-14 lg:pb-14 h-[100svh] flex items-center">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-7 sm:gap-8 md:gap-10 items-center">
          <div className="hidden lg:block relative order-2 lg:order-1">
            <div className="hidden sm:block absolute -left-2 bottom-0 h-[85%] w-[88%] rounded-2xl bg-violet-950 dark:bg-violet-600/90" />
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 sm:p-3 shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/resume-thumb.png"
                  alt="About Ricky Lau"
                  fill
                  className="object-cover object-top scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionTitle eyebrow={t.aboutEyebrow} title={t.aboutTitle} subtitle={t.aboutText} />
            <h3 className="mt-4 sm:mt-7 text-[1.35rem] sm:text-3xl md:text-4xl font-extrabold leading-tight text-violet-950 dark:text-violet-200">
              {t.aboutHelpTitle}
            </h3>
            <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
              {[t.help1, t.help2, t.help3].map((line) => (
                <Card key={line} className="p-3 sm:p-4 border-violet-100 dark:border-slate-700 bg-white/95 dark:bg-slate-900/80">
                  <p className="text-sm sm:text-[0.95rem] text-slate-700 dark:text-slate-200">{line}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DottedSurface>
    </section>
  );
}

function getProjectInitials(title) {
  const words = title.split(" ");
  return (words[0]?.[0] || "P") + (words[1]?.[0] || "R");
}

function ProjectCard({ project, t, onNextProject }) {
  const Icon = project.icon;

  return (
    <Card className="h-full p-3 sm:p-6 border-violet-100 dark:border-slate-700 bg-white/95 dark:bg-slate-900/80">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-violet-800 dark:text-violet-300" />
        <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-500/20 text-violet-900 dark:text-violet-200 text-[11px] sm:text-xs">
          {project.kind}
        </Badge>
      </div>

      <h3 className="mt-3 sm:mt-4 text-[1.25rem] sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="mt-2 sm:mt-3 text-[0.92rem] sm:text-base text-slate-600 dark:text-slate-300">
        {project.summary}
      </p>

      <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-[0.86rem] sm:text-sm text-slate-700 dark:text-slate-200">
        {project.points.map((point, pointIndex) => (
          <li
            key={point}
            className={`gap-2 ${pointIndex > 1 ? "hidden sm:flex" : "flex"}`}
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-violet-700 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="mt-3 sm:mt-4 text-[0.86rem] sm:text-sm text-slate-600 dark:text-slate-300">
        <span className="font-semibold text-slate-800 dark:text-slate-100">{t.stackLabel}:</span> {project.stack}
      </p>

      <div className="mt-4 sm:mt-5 flex gap-2.5 sm:gap-3">
        {project.liveUrl ? (
          <Button asChild className="h-9 flex-1 bg-violet-900 hover:bg-violet-800 dark:bg-violet-500 dark:hover:bg-violet-400">
            <Link href={project.liveUrl} target="_blank">
              {t.viewSite}
            </Link>
          </Button>
        ) : null}
        <Button
          className="h-9 flex-1"
          variant={project.liveUrl ? "outline" : "default"}
          onClick={onNextProject}
        >
          {t.nextProject}
        </Button>
      </div>
    </Card>
  );
}

function ProjectPreview({ project }) {
  const initials = getProjectInitials(project.title);

  return (
    <div className="hidden lg:block relative rounded-2xl border border-violet-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 sm:p-4 md:p-5 overflow-hidden">
      <div className="absolute right-0 top-0 h-20 w-20 sm:h-24 sm:w-24 rounded-bl-3xl bg-violet-100 dark:bg-violet-500/20" />
      <div className="absolute left-2.5 sm:left-3 bottom-2.5 sm:bottom-3 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-violet-100/70 dark:bg-violet-500/20" />

      <div className="absolute inset-3 sm:inset-5 rounded-2xl bg-violet-900 dark:bg-violet-600/80" />
      <div className="relative h-full min-h-[250px] sm:min-h-[280px] rounded-2xl bg-slate-100 dark:bg-slate-800 border border-white/60 dark:border-slate-700 p-4 sm:p-6 flex flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-violet-700 dark:text-violet-300 font-semibold">
            {project.id}
          </p>
          <p className="mt-2 text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100">
            {project.title}
          </p>
        </div>

        <div className="h-24 sm:h-28 rounded-xl bg-white dark:bg-slate-900 border dark:border-slate-600 flex items-center justify-center">
          <p className="text-3xl sm:text-4xl font-bold tracking-widest text-violet-900 dark:text-violet-200">
            {initials}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack
            .split(",")
            .slice(0, 3)
            .map((tag) => (
              <span
                key={`${project.id}-${tag}`}
                className="text-[11px] sm:text-xs rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-900 dark:text-violet-200 px-2.5 py-1"
              >
                {tag.trim()}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedProjectsSection({ t }) {
  const items = t.featured;
  const [index, setIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);

  const slides = useMemo(() => {
    if (!items.length) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items]);

  function prev() {
    if (items.length < 2) return;
    setIndex((v) => (v - 1 + items.length) % items.length);
    setTrackIndex((v) => v - 1);
  }

  function next() {
    if (items.length < 2) return;
    setIndex((v) => (v + 1) % items.length);
    setTrackIndex((v) => v + 1);
  }

  function goToProject(nextIndex) {
    setIndex(nextIndex);
    setTrackIndex(nextIndex + 1);
  }

  function handleTrackTransitionEnd(event) {
    if (event.target !== event.currentTarget) return;

    if (trackIndex === 0) {
      setIsJumping(true);
      setIndex(items.length - 1);
      setTrackIndex(items.length);
      return;
    }

    if (trackIndex === items.length + 1) {
      setIsJumping(true);
      setIndex(0);
      setTrackIndex(1);
    }
  }

  useEffect(() => {
    if (typeof document === "undefined") return;

    function syncReduceMotionState() {
      setReduceMotionEnabled(
        document.documentElement.classList.contains("reduce-motion")
      );
    }

    syncReduceMotionState();
    window.addEventListener("a11y:change", syncReduceMotionState);
    return () => window.removeEventListener("a11y:change", syncReduceMotionState);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotionEnabled || items.length < 2) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((v) => (v + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, reduceMotionEnabled, items.length]);

  useEffect(() => {
    if (!isJumping) return;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsJumping(false));
    });

    return () => cancelAnimationFrame(frame);
  }, [isJumping]);

  return (
    <section
      id="projects"
      className="scroll-mt-0 snap-start snap-always h-[100svh]"
    >
      <DottedSurface className="p-4 sm:p-6 md:p-8 lg:p-10 h-[100svh] flex items-center">
        <div
          className="w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-start justify-between gap-3">
          <SectionTitle
            eyebrow={t.projectsEyebrow}
            title={t.projectsTitle}
            subtitle={t.projectsSubtitle}
            hideEyebrowOnMobile
            hideSubtitleOnMobile
          />

          <div className="hidden sm:flex items-center gap-1.5">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label={t.previous}
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label={t.next}
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-4 sm:mt-7 overflow-hidden">
          <div
            className={`flex ${
              reduceMotionEnabled || isJumping
                ? "transition-none"
                : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            }`}
            style={{ transform: `translateX(-${trackIndex * 100}%)` }}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            {slides.map((project, slideIndex) => {
              const isCurrentSlide = slideIndex === trackIndex;

              return (
                <div
                  key={`${project.id}-${slideIndex}`}
                  className="min-w-full"
                  aria-hidden={!isCurrentSlide}
                  inert={!isCurrentSlide ? true : undefined}
                >
                  <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
                    <ProjectCard project={project} t={t} onNextProject={next} />
                    <ProjectPreview project={project} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 sm:mt-5 flex flex-wrap gap-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToProject(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-violet-800 dark:bg-violet-300" : "w-2.5 bg-violet-200 dark:bg-violet-500/40"
              }`}
            />
          ))}
        </div>
        </div>
      </DottedSurface>
    </section>
  );
}

function ContactSection({ t, lang }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    try {
      if (PUBLIC_KEY) emailjs.init({ publicKey: PUBLIC_KEY });
    } catch {
      // silent
    }
  }, [PUBLIC_KEY]);

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setOk(false);

    if (!name || !email || !message) {
      setErr(lang === "zh" ? "請填寫所有欄位。" : "Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErr(
        lang === "zh" ? "請輸入有效的 Email。" : "Please enter a valid email."
      );
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErr(
        "EmailJS is not configured. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
      );
      return;
    }

    try {
      setSending(true);
      setErr("");

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: name,
          user_email: email,
          user_message: message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setOk(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      const msg = e?.text || e?.message || t.contactError;
      setErr(msg);
      setOk(false);
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-0 snap-start snap-always h-[100svh]"
    >
      <DottedSurface className="px-3 pb-3 pt-[calc(var(--nav-offset)+0.75rem)] sm:px-6 sm:pb-6 sm:pt-[calc(var(--nav-offset)+1.5rem)] md:px-8 md:pb-8 lg:px-10 lg:pb-10 h-[100svh] flex flex-col justify-between">
        <div>
          <SectionTitle eyebrow={null} title={t.contactTitle} subtitle={t.contactSubtitle} />

          <div className="mt-4 sm:mt-8 grid gap-3 sm:gap-6 md:grid-cols-2 items-start">
            <div className="space-y-3 sm:space-y-4">
              <Card className="p-4 sm:p-6 flex flex-col items-start gap-2.5 sm:gap-3 border-violet-100 dark:border-slate-700 bg-white/95 dark:bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">Email</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">rickylcy8183@gmail.com</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="hidden sm:inline-flex mt-2 border-violet-300 dark:border-violet-400/70 text-violet-900 dark:text-violet-200">
                  <a href="mailto:rickylcy8183@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    {t.sendEmail}
                  </a>
                </Button>
              </Card>

              <Card className="hidden sm:flex p-4 sm:p-6 flex-col items-start gap-2.5 sm:gap-3 border-violet-100 dark:border-slate-700 bg-white/95 dark:bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="h-6 w-6 text-violet-700 dark:text-violet-300" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">LinkedIn</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Ching Yin (Ricky) Lau</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="mt-2 border-violet-300 dark:border-violet-400/70 text-violet-900 dark:text-violet-200">
                  <a
                    href="https://www.linkedin.com/in/ricky-lau-457825206/"
                    target="_blank"
                  >
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    {t.connectLinkedIn}
                  </a>
                </Button>
              </Card>
            </div>

            <Card className="p-4 sm:p-6 border-violet-100 dark:border-slate-700 bg-white/95 dark:bg-slate-900/80">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">{t.contactFormTitle}</h3>
              <form className="space-y-2.5 sm:space-y-3" onSubmit={handleSubmit}>
                <Input
                  placeholder={t.contactNamePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={sending}
                  className="border-violet-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
                <Input
                  placeholder={t.contactEmailPlaceholder}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={sending}
                  className="border-violet-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
                <textarea
                  className="min-h-[92px] sm:min-h-[140px] w-full rounded-md border border-violet-200 dark:border-slate-600 bg-background dark:bg-slate-900 px-3 py-2 text-sm dark:text-slate-100"
                  placeholder={t.contactMessagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={sending}
                />
                {err ? <p className="text-sm text-red-600">{err}</p> : null}
                {ok ? <p className="text-sm text-emerald-600">{t.contactSuccess}</p> : null}
                <Button
                  type="submit"
                  className="w-full bg-violet-900 hover:bg-violet-800 dark:bg-violet-500 dark:hover:bg-violet-400"
                  disabled={sending}
                >
                  {sending ? "Sending..." : t.contactButton}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        <div className="mt-4 sm:mt-8 lg:mt-6">
          <SiteFooter />
        </div>
      </DottedSurface>
    </section>
  );
}

export default function PortfolioHomePage() {
  const { lang } = useLang();
  const t = homeCopy[lang] || homeCopy.en;

  return (
    <main className="relative py-0">
      <div className="w-full space-y-0">
        <Hero t={t} />
        <AboutSection t={t} />
        <FeaturedProjectsSection t={t} />

        <section
          id="resume"
          className="scroll-mt-0 snap-start snap-always h-[100svh]"
        >
          <DottedSurface className="p-4 sm:p-6 md:p-10 h-[100svh] flex items-center">
            <ResumePreviewCard lang={lang} />
          </DottedSurface>
        </section>

        <ContactSection t={t} lang={lang} />
      </div>
    </main>
  );
}
