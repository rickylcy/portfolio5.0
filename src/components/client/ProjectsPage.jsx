// src/app/projects/page.jsx (or wherever this file lives)
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/lang";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  MonitorSmartphone,
  Workflow,
  Globe2,
  SlidersHorizontal,
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
    title: "Projects",
    subtitle:
      "A focused selection of client work, internal systems, and personal builds.",
    projectLabel: "Project",
    roleLabel: "Role",
    stackLabel: "Tech stack",
    internalLabel: "Internal",
    businessLabel: "Business / Client",
    personalLabel: "Personal",
    viewApp: "Visit site",
    viewCode: "View code",
    demo: "View details",
    screenshots: "Screenshots",
    close: "Close",
    overviewIntro: "Project overview and screenshots.",
    noPublicDemo: "No public demo is available for this project.",
    filterTitle: "Filter by",
    filterAll: "All projects",
    problemTitle: "Why this project",
    solutionTitle: "What I built",
    impactTitle: "Impact",
    showing: "Showing",
    of: "of",
  },
  zh: {
    eyebrow: "精選作品",
    title: "專案",
    subtitle:
      "精選商業專案、內部系統與個人作品，呈現我在 UX 與工程落地上的做法。",
    projectLabel: "專案",
    roleLabel: "角色",
    stackLabel: "技術堆疊",
    internalLabel: "內部專案",
    businessLabel: "商業專案",
    personalLabel: "個人專案",
    viewApp: "前往網站",
    viewCode: "檢視程式碼",
    demo: "查看內容",
    screenshots: "截圖瀏覽",
    close: "關閉",
    overviewIntro: "專案概要與畫面截圖。",
    noPublicDemo: "此專案目前沒有對外公開 Demo。",
    filterTitle: "篩選方式",
    filterAll: "全部專案",
    problemTitle: "為什麼需要這個系統",
    solutionTitle: "我負責的內容",
    impactTitle: "帶來的改變",
    showing: "顯示",
    of: "共",
  },
};

/* ---------------- project data ---------------- */

const projects = [
  {
    id: "noodles-broadbeach",
    kind: "business",
    icon: Layers,
    slug: "Noodle Broadbeach – Reporting, Accounting & Rostering System",
    slugZh: "Noodle Broadbeach — 營業報表、會計與排班系統",
    period: "2024 – Business client · Multi-store restaurant group",
    role: "Full-stack developer",
    roleZh: "全端開發",
    stack:
      "Next.js, NextAuth, Tailwind, MongoDB Atlas, REST API, Session Layer, Role-based access",
    tags: ["Business", "Reporting", "Accounting", "Rostering", "Multi-store"],
    descEn:
      "Internal web app I designed and built for a multi-store noodle group to replace spreadsheets and WhatsApp for daily sales, basic accounting, and weekly rosters. One bilingual, role-based system instead of three disconnected workflows.",
    descZh:
      "為多間分店的麵店集團設計並開發的內部系統，用來取代原本用試算表與 WhatsApp 處理的每日營業報表、基本會計紀錄與每週排班，改為一套具備角色與權限、同時支援中英文的整合平台。",
    problemEn: [
      "Daily reports were done on paper or Excel, then sent as photos/files in chat. Managers had to chase each store and manually keep records.",
      "Paper reports weren’t private, were easy to lose, and there was no single place to see per-store sales, invoices, and rosters together.",
      "Some staff were more comfortable in Chinese, but there was no consistent, bilingual tool everyone could use.",
    ],
    solutionEn: [
      "Designed a cloud-based daily reporting module: one structured form per store/day (lunch/dinner totals, payment channels, cash payout reason, notes) with filters, edit history, and Excel export.",
      "Built a lightweight accounting area for tracking invoices and companies per store, with permissions so only the owner/accountant can adjust accounting data.",
      "Implemented a weekly rostering tool per store with staff lists, multiple shifts per day, availability, public holidays, special bonus days, and a print-friendly roster view.",
      "Set up role-based access (admin/manager/staff), store scoping, bilingual EN/中文 UI, and a session timeout/extend flow using NextAuth and custom middleware.",
    ],
    impactEn: [
      "Store staff now submit reports directly into the system; managers no longer chase photos or spreadsheets across chat apps.",
      "Managers can review sales, rosters, and key accounting records for all stores in one place, from laptop or phone.",
      "The external accountant receives clean Excel exports instead of mixed formats and screenshots, reducing manual reconciliation.",
      "The client gained a reusable internal product they can extend as they open more stores, instead of relying on ad-hoc tools.",
    ],
    problemZh: [
      "每天的營業報表原本用紙張或 Excel 填寫，再用通訊軟體傳照片或檔案給主管，主管必須一間間收集並自己存檔。",
      "紙本報表既不隱私也容易遺失，也沒有一個地方可以同時看到各店的營業數字、發票紀錄與排班。",
      "部分員工習慣使用中文介面，但公司沒有一套統一、雙語且大家都能用的工具。",
    ],
    solutionZh: [
      "設計雲端化的每日營業報表模組：每店每日一份結構化表單（午市／晚市金額、付款方式、現金支出與原因、備註），支援篩選、編輯歷史與 Excel 匯出。",
      "開發輕量會計區，記錄各店與不同公司之間的發票與款項，並透過權限設定只讓老闆或會計調整會計相關資料。",
      "實作用於每間分店的每週排班工具，可設定員工清單、每日多個班次、可上班時段、公眾假期與特別獎金日，並提供適合列印的排班視圖。",
      "整合角色與權限（Admin / Manager / Staff）、分店範圍控管、英文／繁中雙語介面，以及使用 NextAuth 實作的 Session 倒數與延長登入機制。",
    ],
    impactZh: [
      "門市員工現在直接在系統填報表，主管不再需要每天追著照片和試算表跑。",
      "主管可以在同一個介面上查看所有分店的營業數字、排班以及重要會計紀錄，無論在電腦或手機都能使用。",
      "外部會計拿到的是乾淨一致的 Excel 匯出，而不是格式混亂的截圖與檔案，大幅減少人工對帳時間。",
      "客戶因此多了一套可隨著分店擴張而延伸的內部系統，而不是持續依賴臨時工具與人工流程。",
    ],
    liveUrl: null,
    codeUrl: null,
    gallery: [
      "/projects/noodles/overview.png",
      "/projects/noodles/report-list.png",
      "/projects/noodles/report-edit.png",
      "/projects/noodles/dashboard.png",
      "/projects/noodles/roster-week.png",
    ],
  },

  {
    id: "visa-portal",
    kind: "business",
    icon: Globe2,
    slug: "Visa Portal – Visa to China",
    slugZh: "中國簽證申請入口網站",
    period: "Side project · Live business client",
    role: "Full-stack developer",
    roleZh: "全端開發",
    stack: "Next.js, forms, content pages",
    tags: ["Business", "Portal", "Content"],
    descEn:
      "Public-facing site for a visa service business helping customers apply for visas to China. Focused on clear steps, enquiries, and trust-building content.",
    descZh:
      "為中國簽證代辦服務打造的對外網站，協助客戶了解申請流程並留下聯絡資訊。",
    problemEn: [
      "Customers were often unsure which visa type or documents they needed and kept asking the same questions by phone or message.",
      "The business didn’t have a modern website to explain the process clearly or capture enquiries in a structured way.",
    ],
    solutionEn: [
      "Designed and built a Next.js marketing/information site with clear step-by-step guidance, FAQ-style content, and contact options.",
      "Structured the content so it can be extended later into full EN/中文 bilingual pages without changing the layout.",
      "Optimised for simple maintenance, so the owner can update copy and pricing without deep technical knowledge.",
    ],
    impactEn: [
      "Gave the business a professional online presence they can point new customers to instead of explaining everything from scratch.",
      "Reduced repeated basic questions by directing people to the website’s process overview before they call.",
    ],
    liveUrl: "https://visatochina.com.au/",
    codeUrl: null,
    gallery: [
      "/projects/visa-portal/home.png",
      "/projects/visa-portal/steps.png",
    ],
  },

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
    problemEn: [
      "Restaurants wanted QR table ordering and online takeaway without running a separate system from their existing POS.",
      "Kitchen printers and label printers needed consistent routing per area (kitchen, drinks, sushi, etc.), but different stores had different layouts.",
      "Manual re-typing of online orders into the POS was slow and error-prone.",
    ],
    solutionEn: [
      "Built a responsive Next.js web app for QR table ordering and takeaway, integrating directly with the existing POS back-end.",
      "Implemented flexible printer mapping (kitchen groups, label printers, receipt printers) controlled by store-level settings.",
      "Handled ESC/POS and ZPL output for different printer types, including kitchen chit formatting and item/label templates.",
      "Added an admin portal for stores to manage menus, surcharges, printer configuration, and basic reporting.",
    ],
    impactEn: [
      "Reduced double-entry: online orders flow directly to the POS and the correct printers instead of being re-typed by staff.",
      "Improved order accuracy and speed for both dine-in and takeaway, especially during busy periods.",
      "Created a reusable white-label solution that can be rolled out to new stores with minimal configuration.",
    ],
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
    problemEn: [
      "Store owners were exporting raw POS reports or Excel files and manually piecing together trends for each store.",
      "It was hard to quickly answer questions like “What are our best 5 items this week?” or “Which hours are the quietest?”.",
    ],
    solutionEn: [
      "Built a Next.js dashboard that calls existing company APIs and visualises the data with KPI cards and Recharts charts.",
      "Implemented filters for date range, time window, and store selection, with a global state store so components stay in sync.",
      "Added views for best/worst items, hourly and daily performance, and payment method breakdown.",
    ],
    impactEn: [
      "Gave owners and managers a single responsive dashboard they can open on laptop or mobile to understand performance.",
      "Made it easier to decide staffing and promotions based on real sales patterns instead of guessing.",
    ],
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
    problemEn: [
      "Many small businesses I talk to use whiteboards or spreadsheets to plan jobs, which don’t handle recurring work or team visibility very well.",
      "I wanted to explore more advanced scheduling UX patterns (drag-and-drop, time slots, shared boards) beyond basic calendars.",
    ],
    solutionEn: [
      "Designed a board-style UI where jobs can be dragged between days and time slots, with basic metadata for each job.",
      "Experimented with a data model that could support recurrence rules, multiple assignees, and different business types.",
      "Planned real-time collaboration using Redis/pub-sub so multiple users can see updates live.",
    ],
    impactEn: [
      "Serves as a playground for scheduling UX and data modelling that I can later bring into real client projects.",
      "Demonstrates how I think about designing generic tools that can still feel tailored to specific workflows.",
    ],
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
    problemEn: [
      "In my day job, label and receipt printing across different printers and shops is a constant pain point.",
      "Most tools are either too generic or locked into one hardware ecosystem, making it hard to manage multiple layouts and destinations.",
    ],
    solutionEn: [
      "Prototyped a web studio for designing label layouts and mapping them to ZPL/ESC/POS templates.",
      "Explored a multi-workspace concept where each shop or brand can manage its own templates and printer targets.",
      "Used this project to refine my understanding of ZPL, ESC/POS, and how to send raw jobs reliably from a web app.",
    ],
    impactEn: [
      "Gave me a reusable base for future label/receipt tools that need more flexibility than a single hard-coded layout.",
      "Deepened my experience with printer languages and edge cases, which I apply directly in production POS projects.",
    ],
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
    problemEn: [
      "The school was collecting sushi orders with paper forms and cash envelopes, which was slow and error-prone.",
      "Canteen staff had to manually count orders and key them into the POS before the day started.",
    ],
    solutionEn: [
      "Built a Next.js portal where parents can sign in with Google and place pre-paid sushi orders for their children.",
      "Integrated the portal with the POS back-end and kitchen printing so orders arrive in a format staff already understand.",
      "Designed a parent/child account model so one parent account can manage multiple students.",
    ],
    impactEn: [
      "Reduced manual counting and data entry for school and canteen staff on sushi days.",
      "Gave parents a more modern experience for placing and paying for orders online.",
    ],
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
    problemEn: [
      "I wanted a small but realistic project to learn Firebase Authentication and Firestore realtime updates.",
      "I also wanted to practise building a chat UI that works well on both mobile and desktop.",
    ],
    solutionEn: [
      "Implemented Google login with Firebase Auth and stored user profiles in Firestore.",
      "Built a simple chat room interface with realtime message updates and read-style timestamps.",
      "Kept the component structure clean and reusable so the same patterns can be used in future apps.",
    ],
    impactEn: [
      "Gave me confidence working with Firebase as a backend-as-a-service option for small projects.",
      "Improved my ability to design responsive layouts that still feel good for chat-style interactions.",
    ],
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
    problemEn: [
      "I needed a place to explain my projects clearly and keep examples up to date as my stack evolved.",
      "Earlier versions of my portfolio were either single-language or didn’t reflect my newer work.",
    ],
    solutionEn: [
      "Built several iterations (3.0, 4.0, now 5.0) using different UI libraries to experiment with design systems.",
      "Introduced bilingual EN/中文 content, better project structure, and more realistic case-study-style pages.",
    ],
    impactEn: [
      "Gave me a living playground for trying new UI frameworks and patterns.",
      "Helps recruiters and hiring managers quickly understand not just screenshots, but the context behind each project.",
    ],
    liveUrl: null,
    codeUrl: null,
    gallery: [
      "/projects/portfolio/hero.png",
      "/projects/portfolio/projects.png",
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
    problemEn: [
      "Stores wanted a more modern customer-facing experience than just a small VFD or printed receipts.",
      "Customers couldn’t easily see their current basket or promotions while the cashier was keying items.",
    ],
    solutionEn: [
      "Built a WPF desktop application that runs on a secondary screen and syncs live with the main POS basket.",
      "Designed layouts that show current items, totals, promos, and QR flows without distracting the cashier.",
    ],
    impactEn: [
      "Improved transparency for customers by showing them exactly what’s being added to the basket in real time.",
      "Gave stores a more modern, branded look at the counter without changing their core POS workflow.",
    ],
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
    project.kind === "internal"
      ? t.internalLabel
      : project.kind === "business"
      ? t.businessLabel
      : t.personalLabel;

  const hasPublicDemo = Boolean(project.liveUrl);
  const canNavigateGallery = gallery.length > 1;

  function goToShot(nextIndex) {
    if (!canNavigateGallery) return;
    setActiveShot((nextIndex + gallery.length) % gallery.length);
  }
  const hasCode = Boolean(project.codeUrl);
  const displayTags = (project.tags || []).slice(0, 3);

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

        {displayTags.length ? (
          <div className="mt-2 flex flex-wrap gap-1">
            {displayTags.map((tag) => (
              <Badge
                key={`${project.id}-${tag}`}
                variant="secondary"
                className="text-[11px]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {hasPublicDemo ? (
          <Button asChild size="sm" className="w-full sm:w-auto">
            <Link href={project.liveUrl} target="_blank">
              {t.viewApp}
            </Link>
          </Button>
        ) : null}

        <Button
          size="sm"
          className="w-full sm:w-auto"
          variant={hasPublicDemo ? "outline" : "default"}
          onClick={() => onOpenDemo(project)}
        >
          {t.demo}
        </Button>

        {hasCode ? (
          <Button asChild size="sm" variant="ghost">
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

function CategoryFilter({ categories, activeCategory, onChange, t }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2 items-center">
      <span className="text-xs text-muted-foreground flex items-center gap-1">
        <SlidersHorizontal className="h-3 w-3" />
        {t.filterTitle}
      </span>
      <Button
        type="button"
        size="sm"
        variant={activeCategory === "ALL" ? "default" : "outline"}
        onClick={() => onChange("ALL")}
        className="h-8 px-3 text-xs"
      >
        {t.filterAll}
      </Button>
      {categories.map((category) => (
        <Button
          key={category.value}
          type="button"
          size="sm"
          variant={activeCategory === category.value ? "default" : "outline"}
          onClick={() => onChange(category.value)}
          className="h-8 px-3 text-xs"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}

/* ---------------- demo modal ---------------- */

function DemoModal({ project, lang, t, onClose }) {
  const [activeShot, setActiveShot] = useState(0);
  const open = !!project;
  if (!project) return null;

  const isZh = lang === "zh";
  const title = isZh ? project.slugZh : project.slug;
  const desc = isZh ? project.descZh : project.descEn;
  const gallery = project.gallery || [];
  const activeGalleryIndex = gallery.length
    ? Math.min(activeShot, gallery.length - 1)
    : 0;
  const activeGalleryImage = gallery[activeGalleryIndex];

  const problem = isZh ? project.problemZh : project.problemEn;
  const solution = isZh ? project.solutionZh : project.solutionEn;
  const impact = isZh ? project.impactZh : project.impactEn;
  const hasPublicDemo = Boolean(project.liveUrl);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      {/* max-h + flex so the middle area can scroll */}
      <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {t.overviewIntro}
            <br />
            {!hasPublicDemo ? (
              <span className="text-xs text-muted-foreground">{t.noPublicDemo}</span>
            ) : null}
            {!hasPublicDemo ? <br /> : null}
            <span className="text-xs text-muted-foreground">
              {project.period}
            </span>
          </DialogDescription>
        </DialogHeader>

        {/* scrollable content */}
        <div className="space-y-4 mt-2 overflow-y-auto pr-1">
          {/* short description */}
          <p className="text-sm">{desc}</p>

          {/* tech stack recap */}
          {project.stack ? (
            <p className="text-xs md:text-sm text-muted-foreground">
              <span className="font-medium">{t.stackLabel}:</span>{" "}
              {project.stack}
            </p>
          ) : null}

          {/* structured bullets */}
          {(problem || solution || impact) && (
            <div className="mt-2 space-y-4 text-sm">
              {problem?.length ? (
                <div>
                  <p className="font-semibold">{t.problemTitle}</p>
                  <ul className="mt-1 list-disc list-inside space-y-1 text-muted-foreground">
                    {problem.map((line, idx) => (
                      <li key={`p-${idx}`}>{line}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {solution?.length ? (
                <div>
                  <p className="font-semibold">{t.solutionTitle}</p>
                  <ul className="mt-1 list-disc list-inside space-y-1 text-muted-foreground">
                    {solution.map((line, idx) => (
                      <li key={`s-${idx}`}>{line}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {impact?.length ? (
                <div>
                  <p className="font-semibold">{t.impactTitle}</p>
                  <ul className="mt-1 list-disc list-inside space-y-1 text-muted-foreground">
                    {impact.map((line, idx) => (
                      <li key={`i-${idx}`}>{line}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )}

          {/* screenshots */}
          {gallery.length > 0 && (
            <div>
              <p className="text-xs font-semibold mb-2 uppercase tracking-wide text-muted-foreground">
                {t.screenshots}
              </p>

              <div className="relative overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-inner dark:border-slate-800 dark:bg-slate-100">
                <div className="relative aspect-[2/1] min-h-[220px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={activeGalleryImage}
                      alt={`${title} screenshot ${activeGalleryIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 70vw"
                      className="bg-white object-contain object-center"
                    />
                  </div>

                  {canNavigateGallery ? (
                    <>
                      <Button
                        type="button"
                        size="icon"
                        variant="secondary"
                        className="absolute left-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-white/90 text-violet-950 shadow-lg backdrop-blur hover:bg-white dark:bg-slate-900/90 dark:text-violet-200 dark:hover:bg-slate-900"
                        onClick={() => goToShot(activeGalleryIndex - 1)}
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="secondary"
                        className="absolute right-2 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-white/90 text-violet-950 shadow-lg backdrop-blur hover:bg-white dark:bg-slate-900/90 dark:text-violet-200 dark:hover:bg-slate-900"
                        onClick={() => goToShot(activeGalleryIndex + 1)}
                        aria-label="Next screenshot"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  ) : null}
                </div>

                <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-violet-900 shadow-sm dark:bg-slate-900/90 dark:text-violet-200">
                  {activeGalleryIndex + 1} / {gallery.length}
                </span>
              </div>

              <div className="mt-3 flex gap-2 overflow-x-auto rounded-2xl border border-violet-100 bg-white/85 p-2 dark:border-slate-800 dark:bg-slate-900/80">
                {gallery.map((src, idx) => (
                  <button
                    type="button"
                    key={`${project.id}-shot-${idx}`}
                    className={`group relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border bg-card text-left transition sm:h-20 sm:w-32 ${
                      idx === activeGalleryIndex
                        ? "border-violet-700 ring-2 ring-violet-200 dark:border-violet-300 dark:ring-violet-500/30"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setActiveShot(idx)}
                    aria-label={`View ${title} screenshot ${idx + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`${title} screenshot ${idx + 1}`}
                      fill
                      sizes="128px"
                      className="object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:brightness-90"
                    />
                    <span className="absolute bottom-1 right-1 rounded-full bg-slate-950/75 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* sticky-ish footer inside dialog */}
        <div className="mt-4 pt-2 flex justify-end border-t">
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

  const [activeCategory, setActiveCategory] = useState("ALL");
  const [demoProject, setDemoProject] = useState(null);

  const categories = useMemo(
    () => [
      { value: "business", label: t.businessLabel },
      { value: "internal", label: t.internalLabel },
      { value: "personal", label: t.personalLabel },
    ],
    [t.businessLabel, t.internalLabel, t.personalLabel]
  );

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.kind === activeCategory);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionTitle eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
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

      <p className="mt-6 text-sm text-muted-foreground">
        {t.showing} {filteredProjects.length} {t.of} {projects.length}
      </p>

      <DemoModal
        project={demoProject}
        lang={lang}
        t={t}
        onClose={() => setDemoProject(null)}
      />
    </main>
  );
}
