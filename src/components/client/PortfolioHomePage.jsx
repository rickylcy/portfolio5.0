// src/components/client/PortfolioHomePage.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Github,
  Linkedin,
  FileText,
  Rocket,
  Workflow,
  Code2,
  Layers,
  MonitorSmartphone,
  Settings2,
  ScrollText,
  Globe,
  MoveRight,
  Mail,
  Linkedin as LinkedinIcon,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/lib/lang";
import ResumePreviewCard from "@/components/resume/ResumePreviewCard";
import SiteFooter from "@/components/site/SiteFooter";

/* ---------------- home copy (local) ---------------- */

const homeCopy = {
  en: {
    based: "Based in Brisbane · Bilingual (EN/中文)",
    hi: "Hi, I’m",
    role: "Frontend-leaning Full-stack Developer.",
    intro:
      "I build clean, fast web apps with React/Next.js, solid UI systems (Tailwind + shadcn), and practical integrations (APIs, printing, payments). I love shipping end-to-end: from UX to data.",
    viewProjects: "View Projects",
    downloadCV: "Download CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    strengths1Title: "Frontend that feels right",
    strengths1Desc:
      "Next.js, React hooks, state stores, and tidy component APIs.",
    strengths2Title: "Responsive, real world",
    strengths2Desc: "Mobile-first UIs, dashboards, and POS-style workflows.",
    strengths3Title: "From UI to data",
    strengths3Desc: "API wiring, auth, databases, and pragmatic deployment.",
    knownForEyebrow: "What I’m known for",
    knownForTitle: "Pragmatic, reliable, and user-first",
    knownForSub: "I care about usability, performance, and maintainable code.",
    shipMindset: "Shipping mindset",
    shipMindsetDesc:
      "I focus on clear scope, vertical slices, and visible progress.",
    systemsReuse: "Systems & reuse",
    systemsReuseDesc:
      "Design tokens, component libraries, predictable state and data flow.",
    problemSolving: "Problem-solving",
    problemSolvingDesc:
      "From odd printing hardware to flaky APIs—I like hard edges.",
    bilingualUX: "Bilingual UX",
    bilingualUXDesc: "English/中文 content from day one for broader reach.",
    process: "Process",
    howIWork: "How I work",
    understand: "Understand",
    understandDesc: "Clarify outcomes, users, constraints.",
    design: "Design",
    designDesc: "Wire, component map, data contracts.",
    build: "Build",
    buildDesc: "Vertical slice: UI → API → persistence.",
    polish: "Polish",
    polishDesc: "Accessibility, performance, handoff docs.",
    coreSkillsEyebrow: "Core skills",
    coreSkillsTitle: "Tech that I use daily",
    coreSkillsSub: "Solid foundations, modern DX, and production pragmatism.",
    skills: [
      "React / Next.js (App Router)",
      "Tailwind CSS + shadcn/ui",
      "REST / GraphQL APIs",
      "Recharts & data viz",
      "Auth & session flows",
      "MongoDB / MySQL",
      "Printing (ESC/POS, ZPL)",
      "Payments & webhooks",
    ],

    // contact
    contactTitle: "Contact Me",
    contactSubtitle: "Get in touch",
    contactStayConnected: "Stay Connected",
    contactFormTitle: "Send me a message",
    contactNamePlaceholder: "Insert your name",
    contactEmailPlaceholder: "Insert your email",
    contactMessagePlaceholder: "Write your message",
    sendEmail: "Send Email",
    connectLinkedIn: "Connect",
    contactButton: "Send Message",
    contactSuccess: "Message sent! I’ll get back to you soon.",
    contactError:
      "Failed to send. Please try again, or email me at rickylcy8183@gmail.com.",
  },
  zh: {
    based: "位於布里斯本 · 雙語（英/中文）",
    hi: "你好，我是",
    role: "以前端為主的全端工程師。",
    intro:
      "專注以 React/Next.js 打造乾淨、快速的網頁應用；熟悉 Tailwind + shadcn 的設計系統，並整合各類實務功能（API、列印、金流）。從 UX 到資料端到端落地。",
    viewProjects: "查看專案",
    downloadCV: "下載履歷",
    github: "GitHub",
    linkedin: "LinkedIn",
    strengths1Title: "順手的前端體驗",
    strengths1Desc: "Next.js、React hooks、狀態管理與乾淨的元件 API。",
    strengths2Title: "響應式、貼近實務",
    strengths2Desc: "行動優先、儀表板、POS 流程等實戰場景。",
    strengths3Title: "從介面到資料",
    strengths3Desc: "API 串接、認證、資料庫與務實佈署。",
    knownForEyebrow: "我的特色",
    knownForTitle: "務實可靠、以使用者為中心",
    knownForSub: "重視可用性、效能與可維護的程式碼。",
    shipMindset: "交付導向",
    shipMindsetDesc: "明確範圍、垂直切片、持續可見的進度。",
    systemsReuse: "系統化與重用",
    systemsReuseDesc: "設計語彙、元件庫、可預期的狀態與資料流。",
    problemSolving: "問題解決",
    problemSolvingDesc: "從各式列印硬體到不穩 API，我都樂在其中。",
    bilingualUX: "雙語體驗",
    bilingualUXDesc: "英/中文內容從第一天就到位，覆蓋更廣。",
    process: "流程",
    howIWork: "我怎麼做",
    understand: "理解",
    understandDesc: "釐清目標、使用者與限制。",
    design: "設計",
    designDesc: "框線、元件地圖與資料契約。",
    build: "開發",
    buildDesc: "垂直切片：UI → API → 資料。",
    polish: "打磨",
    polishDesc: "無障礙、效能、交接文件。",
    coreSkillsEyebrow: "核心技能",
    coreSkillsTitle: "我每天使用的技術",
    coreSkillsSub: "穩健基礎、良好開發體驗與務實生產。",
    skills: [
      "React / Next.js（App Router）",
      "Tailwind CSS + shadcn/ui",
      "REST / GraphQL API",
      "Recharts 與資料視覺化",
      "認證與 Session 流程",
      "MongoDB / MySQL",
      "列印（ESC/POS、ZPL）",
      "金流與 Webhooks",
    ],

    contactTitle: "聯絡我",
    contactSubtitle: "歡迎來信",
    contactStayConnected: "保持聯繫",
    contactFormTitle: "傳訊給我",
    contactNamePlaceholder: "輸入你的名字",
    contactEmailPlaceholder: "輸入你的 Email",
    contactMessagePlaceholder: "寫下你的訊息",
    sendEmail: "寄送 Email",
    connectLinkedIn: "在 LinkedIn 上連結",
    contactButton: "送出訊息",
    contactSuccess: "已送出！我會儘快回覆你。",
    contactError: "寄送失敗，請再試一次，或直接寫信到 rickylcy8183@gmail.com。",
  },
};

/* ---------------- shared section components ---------------- */

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <Badge variant="outline" className="mb-3">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ThinProgress({ show }) {
  return (
    <div
      className={`pointer-events-none fixed left-0 right-0 top-[calc(56px+env(safe-area-inset-top,0))] z-40 h-[2px] overflow-hidden transition-opacity ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="h-full w-1/3 animate-[progress_1s_linear_infinite] bg-primary" />
      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  );
}

/* ---------------- sections ---------------- */

function Hero({ t }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center snap-start">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_60rem_at_50%_-10%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              {t.based}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {t.hi} <span className="text-primary">Ricky Lau</span>.
              <br className="hidden md:block" />
              {t.role}
            </h1>

            <p className="mt-4 text-muted-foreground">{t.intro}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link href="/projects">
                  {t.viewProjects} <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume">
                  <FileText className="mr-2 h-4 w-4" />
                  {t.downloadCV}
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <Link
                href="https://github.com/rickylcy"
                target="_blank"
                className="inline-flex items-center gap-2 hover:opacity-80"
              >
                <Github className="h-4 w-4" /> {t.github}
              </Link>
              <Link
                href="https://www.linkedin.com/in/ricky-lau-457825206/"
                target="_blank"
                className="inline-flex items-center gap-2 hover:opacity-80"
              >
                <Linkedin className="h-4 w-4" /> {t.linkedin}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 blur-3xl opacity-60 bg-gradient-to-tr from-primary/20 to-muted" />
            <div className="grid gap-4">
              <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <Code2 className="h-6 w-6" />
                  <div className="font-semibold">{t.strengths1Title}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.strengths1Desc}
                </p>
              </Card>

              <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <MonitorSmartphone className="h-6 w-6" />
                  <div className="font-semibold">{t.strengths2Title}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.strengths2Desc}
                </p>
              </Card>

              <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <Layers className="h-6 w-6" />
                  <div className="font-semibold">{t.strengths3Title}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.strengths3Desc}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights({ t }) {
  const items = [
    { icon: Rocket, title: t.shipMindset, desc: t.shipMindsetDesc },
    { icon: Workflow, title: t.systemsReuse, desc: t.systemsReuseDesc },
    { icon: Settings2, title: t.problemSolving, desc: t.problemSolvingDesc },
    { icon: Globe, title: t.bilingualUX, desc: t.bilingualUXDesc },
  ];
  return (
    <section
      id="highlights"
      className="min-h-screen flex items-center justify-center snap-start"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 w-full">
        <SectionTitle
          eyebrow={t.knownForEyebrow}
          title={t.knownForTitle}
          subtitle={t.knownForSub}
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Card
              key={it.title}
              className="p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <it.icon className="h-5 w-5 text-primary" />
                <div className="font-semibold">{it.title}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIWork({ t }) {
  const steps = [
    { n: 1, title: t.understand, desc: t.understandDesc },
    { n: 2, title: t.design, desc: t.designDesc },
    { n: 3, title: t.build, desc: t.buildDesc },
    { n: 4, title: t.polish, desc: t.polishDesc },
  ];
  return (
    <section className="min-h-screen flex items-center justify-center snap-start">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 w-full">
        <SectionTitle eyebrow={t.process} title={t.howIWork} />
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <Card key={s.n} className="p-5 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10" />
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  {s.n}
                </div>
                <div className="font-semibold">{s.title}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreTech({ t, lang }) {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 w-full">
        <SectionTitle
          eyebrow={t.coreSkillsEyebrow}
          title={t.coreSkillsTitle}
          subtitle={t.coreSkillsSub}
        />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {t.skills.map((f) => (
            <Card key={`${lang}-skill-${f}`} className="p-4">
              <div className="flex items-start gap-3">
                <ScrollText className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm">{f}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact section with EmailJS ---------------- */

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
      console.error("EmailJS error:", e);
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
      className="min-h-screen flex items-center justify-center snap-start"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* Left: contact cards */}
          <div className="space-y-4">
            <Card className="p-6 flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">
                    rickylcy8183@gmail.com
                  </p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-2 rounded-full px-4"
              >
                <a href="mailto:rickylcy8183@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  {t.sendEmail}
                </a>
              </Button>
            </Card>

            <Card className="p-6 flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <LinkedinIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">
                    Ching Yin (Ricky) Lau
                  </p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-2 rounded-full px-4"
              >
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

          {/* Right: form */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">{t.contactFormTitle}</h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <Input
                placeholder={t.contactNamePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={sending}
              />
              <Input
                placeholder={t.contactEmailPlaceholder}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={sending}
              />
              <textarea
                className="min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm"
                placeholder={t.contactMessagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={sending}
              />
              {err ? <p className="text-sm text-red-600">{err}</p> : null}
              {ok ? (
                <p className="text-sm text-emerald-600">{t.contactSuccess}</p>
              ) : null}
              <Button type="submit" className="w-full" disabled={sending}>
                {sending ? "Sending…" : t.contactButton}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------------- page ---------------- */

export default function PortfolioHomePage() {
  const [showTopBar] = useState(false);
  const { lang } = useLang();
  const t = homeCopy[lang] || homeCopy.en;

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  return (
    <main className="relative h-screen overflow-y-auto snap-y snap-proximity">
      <ThinProgress show={showTopBar} />

      <Hero t={t} />
      <Highlights t={t} />
      <HowIWork t={t} />
      <CoreTech t={t} lang={lang} />

      {/* Resume preview as its own snap section */}
      <section className="md:min-h-screen md:flex md:items-center md:justify-center md:snap-start">
        <div className="mx-auto max-w-6xl px-4 w-full">
          <ResumePreviewCard lang={lang} />
        </div>
      </section>

      {/* Expanded contact */}
      <ContactSection t={t} lang={lang} />

      {/* Footer now lives inside the scroll container, after all sections */}
      <SiteFooter />
    </main>
  );
}
