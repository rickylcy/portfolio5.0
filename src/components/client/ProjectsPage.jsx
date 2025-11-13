"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";
import {
  Layers,
  MonitorSmartphone,
  Workflow,
  Globe2,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ---------------- page-local i18n copy ---------------- */

const pageCopy = {
  en: {
    eyebrow: "Selected work",
    title: "Projects I’m proud of",
    subtitle:
      "A mix of production systems and personal tools that show how I think about UX, data, and reliability.",
    projectLabel: "Project",
    roleLabel: "Role",
    stackLabel: "Tech stack",
    internalLabel: "Internal",
    personalLabel: "Personal",
    viewApp: "Open demo",
    viewCode: "View code",
    demo: "Demo",
    screenshots: "Screenshots",
    close: "Close",
    noPublicDemo:
      "This is a production or internal system, so there’s no public demo link. Here’s a quick overview and some screenshots instead.",
    filterAll: "All",
  },
  zh: {
    eyebrow: "精選作品",
    title: "讓我覺得值得分享的專案",
    subtitle:
      "包含正式上線系統與個人工具，反映我對 UX、資料結構與穩定度的思考方式。",
    projectLabel: "專案",
    roleLabel: "角色",
    stackLabel: "技術堆疊",
    internalLabel: "內部專案",
    personalLabel: "個人專案",
    viewApp: "開啟 Demo",
    viewCode: "檢視程式碼",
    demo: "Demo",
    screenshots: "截圖瀏覽",
    close: "關閉",
    noPublicDemo:
      "此為正式或內部系統，目前沒有對外公開 Demo，以下是簡介與部分畫面截圖。",
    filterAll: "全部",
  },
};

/* ---------------- project data ---------------- */
/* gallery: you can replace these paths with real images later */

const projects = [
  {
    id: "mobile-ordering",
    kind: "internal",
    icon: MonitorSmartphone,
    slug: "Mobile Ordering & QR Table Ordering",
    slugZh: "行動點餐與 QR 掃碼點餐",
    period: "2023 – Ongoing · POS Republic",
    role: "Lead developer (frontend + backend integration)",
    roleZh: "主導開發（前端 + 後端整合）",
    stack:
      "Next.js, React, Tailwind, shadcn/ui, MSSQL, Node.js, ESC/POS printing, Tyro/Linkly",
    tags: ["Production", "Hospitality", "Printing"],
    descEn:
      "End-to-end mobile ordering for dine-in and takeaway with QR table flows, printer mapping, kitchen labels, and admin portal.",
    descZh:
      "完整的行動點餐方案，支援內用與外帶 QR 掃碼流程、印表機群組與出單設定、廚房標籤與後台管理。",
    liveUrl: null,
    codeUrl: null,
    gallery: [
      "/projects/mobile-ordering/overview.png",
      "/projects/mobile-ordering/menu.png",
      "/projects/mobile-ordering/kitchen.png",
    ],
  },
  {
    id: "sales-report",
    kind: "internal",
    icon: Layers,
    slug: "Sales Report Dashboard",
    slugZh: "銷售報表儀表板",
    period: "2024 – Ongoing · POS Republic",
    role: "Frontend developer",
    roleZh: "前端開發",
    stack: "Next.js, Tailwind, shadcn/ui, Recharts, REST API, MSSQL",
    tags: ["Dashboard", "Data viz", "Internal"],
    descEn:
      "Responsive dashboard for store owners to explore daily and hourly sales, best/worst items, and payment breakdowns.",
    descZh:
      "提供店家檢視日／時銷售、熱銷與滯銷商品，以及付款方式比例的響應式儀表板。",
    liveUrl: null,
    codeUrl: null,
    gallery: [
      "/projects/sales-report/summary.png",
      "/projects/sales-report/best5.png",
      "/projects/sales-report/hourly.png",
    ],
  },
  {
    id: "plan-craft",
    kind: "personal",
    icon: Workflow,
    slug: "Plan-Craft Scheduling",
    slugZh: "Plan-Craft 排程系統",
    period: "2024 – Personal project",
    role: "Full-stack developer",
    roleZh: "全端開發",
    stack:
      "Next.js, Tailwind, shadcn/ui, drag-and-drop UI, MongoDB/Redis (planned)",
    tags: ["Scheduling", "Tooling"],
    descEn:
      "A flexible scheduling tool with drag-and-drop jobs, time slots, and shared plans—designed to work for many business types.",
    descZh:
      "可彈性配置的排程工具，支援拖曳任務、時間區間與共用排程，設計上適用於多種行業。",
    liveUrl: null,
    codeUrl: null,
    gallery: [
      "/projects/plan-craft/board.png",
      "/projects/plan-craft/detail.png",
    ],
  },
  {
    id: "printcraft",
    kind: "personal",
    icon: Layers,
    slug: "PrintCraft Studio",
    slugZh: "PrintCraft Studio 標籤設計／列印",
    period: "2024 – Personal / R&D",
    role: "Full-stack developer",
    roleZh: "全端開發",
    stack:
      "Next.js, Node.js, ZPL / ESC/POS, multi-workspace concept, Prisma (planned)",
    tags: ["Printing", "Tooling"],
    descEn:
      "A print-focused studio for building label templates and sending ZPL / ESC/POS jobs to different devices and shops.",
    descZh:
      "以列印為核心的工作室，提供標籤模板管理與 ZPL／ESC/POS 出單流程，支援多店與多裝置概念。",
    liveUrl: null,
    codeUrl: null,
    gallery: [
      "/projects/printcraft/editor.png",
      "/projects/printcraft/labels.png",
    ],
  },
  {
    id: "amherst",
    kind: "internal",
    icon: Globe2,
    slug: "Amherst School Sushi Portal",
    slugZh: "Amherst 校園壽司訂購平台",
    period: "2024 – POS Republic",
    role: "Full-stack developer",
    roleZh: "全端開發",
    stack: "Next.js, Firebase Auth, REST API, POS integration",
    tags: ["Ordering", "Portal", "Production"],
    descEn:
      "Online pre-order portal for school sushi days, connected to the POS system and kitchen printing.",
    descZh: "服務學校壽司日的線上預訂網站，與 POS 系統與廚房出單整合。",
    liveUrl: null,
    codeUrl: null,
    gallery: ["/projects/amherst/home.png", "/projects/amherst/orders.png"],
  },
  {
    id: "chat-app",
    kind: "personal",
    icon: MonitorSmartphone,
    slug: "Realtime Chat App",
    slugZh: "即時聊天應用",
    period: "2023 – Personal project",
    role: "Frontend developer",
    roleZh: "前端開發",
    stack: "React, Firebase, responsive UI",
    tags: ["Web", "Realtime"],
    descEn:
      "Responsive web chat app built to explore Firebase auth, realtime database, and clean component structure.",
    descZh:
      "為了探索 Firebase 登入、即時資料庫與乾淨元件結構而打造的響應式聊天網站。",
    liveUrl: "https://ricky-chat-app.vercel.app/",
    codeUrl: null,
    gallery: ["/projects/chat-app/chat.png", "/projects/chat-app/mobile.png"],
  },
  {
    id: "portfolios",
    kind: "personal",
    icon: Globe2,
    slug: "Portfolio 3.0 + 4.0",
    slugZh: "個人作品集 3.0 + 4.0",
    period: "2023 – 2025 · Personal",
    role: "Designer & developer",
    roleZh: "設計與開發",
    stack: "React, Next.js, Material UI / Joy UI / Tailwind / shadcn/ui",
    tags: ["Portfolio", "Web"],
    descEn:
      "Multiple iterations of my portfolio sites focusing on responsive layout, Joy UI / MUI, and now a bilingual Next.js + Tailwind + shadcn setup.",
    descZh:
      "多次重構的個人作品集網站，從 MUI / Joy UI 到現行的 Next.js + Tailwind + shadcn 雙語版本。",
    liveUrl: null,
    codeUrl: null,
    gallery: [
      "/projects/portfolio/hero.png",
      "/projects/portfolio/projects.png",
    ],
  },
  {
    id: "visa-portal",
    kind: "personal",
    icon: Globe2,
    slug: "Visa Portal – Visa to China",
    slugZh: "中國簽證申請入口網站",
    period: "Side project",
    role: "Full-stack developer",
    roleZh: "全端開發",
    stack: "Next.js, forms, content pages",
    tags: ["Portal", "Content"],
    descEn:
      "An informational and lead-capture site for people applying for visas to China, with structured steps and bilingual content planned.",
    descZh:
      "協助申請中國簽證的資訊與表單網站，規劃清楚流程與後續的中英文內容。",
    liveUrl: "https://visatochina.com.au/",
    codeUrl: null,
    gallery: [
      "/projects/visa-portal/home.png",
      "/projects/visa-portal/steps.png",
    ],
  },
  {
    id: "customer-display",
    kind: "internal",
    icon: MonitorSmartphone,
    slug: "POS Customer Display",
    slugZh: "POS 客顯畫面",
    period: "2023 – POS Republic",
    role: "Desktop / frontend developer",
    roleZh: "桌面與前端開發",
    stack: ".NET / WPF, multi-screen layout, real-time order sync",
    tags: ["POS", "Desktop", "Production"],
    descEn:
      "A secondary customer-facing screen that mirrors basket contents, promos, and QR flows alongside the main POS terminal.",
    descZh:
      "在主要 POS 終端旁的客戶顯示螢幕，即時顯示購物籃內容、優惠與 QR 流程。",
    liveUrl: null,
    codeUrl: null,
    gallery: [
      "/projects/customer-display/layout.png",
      "/projects/customer-display/ads.png",
    ],
  },
];

/* ---------------- UI helpers ---------------- */

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <Badge variant="outline" className="mb-3">
          {eyebrow}
        </Badge>
      ) : null}
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h1>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ProjectCard({ project, lang, t, onOpenDemo }) {
  const Icon = project.icon ?? Layers;
  const isZh = lang === "zh";

  const title = isZh ? project.slugZh : project.slug;
  const role = isZh ? project.roleZh : project.role;
  const desc = isZh ? project.descZh : project.descEn;

  const kindLabel =
    project.kind === "internal" ? t.internalLabel : t.personalLabel;

  const hasPublicDemo = Boolean(project.liveUrl);
  const hasCode = Boolean(project.codeUrl);

  return (
    <Card className="flex flex-col justify-between p-5 hover:shadow-md transition-shadow">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-base md:text-lg">{title}</h2>
          </div>
          <Badge variant="outline" className="text-xs">
            {kindLabel}
          </Badge>
        </div>

        <p className="text-xs text-muted-foreground">{project.period}</p>

        <p className="text-sm">{desc}</p>

        <div className="mt-2 space-y-1 text-xs text-muted-foreground">
          <div>
            <span className="font-medium">{t.roleLabel}:</span> {role}
          </div>
          <div>
            <span className="font-medium">{t.stackLabel}:</span> {project.stack}
          </div>
        </div>

        {project.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <Badge
                key={`${project.id}-${tag}`}
                variant="secondary"
                className="text-[10px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {/* Always show a Demo button – either link or modal */}
        {hasPublicDemo ? (
          <Button asChild size="sm">
            <Link href={project.liveUrl} target="_blank">
              {t.viewApp}
            </Link>
          </Button>
        ) : (
          <Button size="sm" onClick={() => onOpenDemo(project)}>
            {t.demo}
          </Button>
        )}

        {hasCode ? (
          <Button asChild size="sm" variant="outline">
            <Link href={project.codeUrl} target="_blank">
              {t.viewCode}
            </Link>
          </Button>
        ) : null}
      </div>
    </Card>
  );
}

/* ---------------- filter bar ---------------- */

function TagFilter({ tags, activeTag, onChange, t }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2 items-center">
      <span className="text-xs text-muted-foreground flex items-center gap-1">
        <Sparkles className="h-3 w-3" />
        {t.eyebrow}
      </span>
      <Button
        type="button"
        size="sm"
        variant={activeTag === "ALL" ? "default" : "outline"}
        onClick={() => onChange("ALL")}
        className="h-7 px-3 text-xs"
      >
        {t.filterAll}
      </Button>
      {tags.map((tag) => (
        <Button
          key={tag}
          type="button"
          size="sm"
          variant={activeTag === tag ? "default" : "outline"}
          onClick={() => onChange(tag)}
          className="h-7 px-3 text-xs"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
}

/* ---------------- demo modal ---------------- */

function DemoModal({ project, lang, t, onClose }) {
  const open = !!project;
  if (!project) return null;

  const isZh = lang === "zh";
  const title = isZh ? project.slugZh : project.slug;
  const desc = isZh ? project.descZh : project.descEn;
  const gallery = project.gallery || [];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {t.noPublicDemo}
            <br />
            <span className="text-xs text-muted-foreground">
              {project.period}
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <p className="text-sm">{desc}</p>

          {gallery.length > 0 && (
            <div>
              <p className="text-xs font-semibold mb-2 uppercase tracking-wide text-muted-foreground">
                {t.screenshots}
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {gallery.map((src, idx) => (
                  <div
                    key={`${project.id}-shot-${idx}`}
                    className="overflow-hidden rounded-md border bg-card"
                  >
                    {/* replace with <Image> later if you prefer */}
                    <img
                      src={src}
                      alt={`${title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" onClick={onClose}>
            {t.close}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- page ---------------- */

export default function ProjectsPage() {
  const { lang } = useLang();
  const t = pageCopy[lang] || pageCopy.en;

  const [activeTag, setActiveTag] = useState("ALL");
  const [demoProject, setDemoProject] = useState(null);

  // collect unique tags
  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => (p.tags || []).forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, []);

  const filteredProjects =
    activeTag === "ALL"
      ? projects
      : projects.filter((p) => (p.tags || []).includes(activeTag));

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <TagFilter
        tags={allTags}
        activeTag={activeTag}
        onChange={setActiveTag}
        t={t}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            lang={lang}
            t={t}
            onOpenDemo={setDemoProject}
          />
        ))}
      </div>

      <DemoModal
        project={demoProject}
        lang={lang}
        t={t}
        onClose={() => setDemoProject(null)}
      />
    </main>
  );
}
