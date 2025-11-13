// src/content/resume.js

const en = {
  header: {
    name: "Ricky Lau",
    title: "Full-stack Developer",
    meta: "Brisbane • lauyin8183@gmail.com • github.com/rickylcy • linkedin.com/in/ricky-lau-457825206/",
  },
  summaryLabel: "Summary",
  summary:
    "Full-stack developer focused on Next.js + Tailwind, with real-world experience in POS/ordering systems. I value clean UI, fast UX, and shipping pragmatic solutions.",
  sections: [
    {
      heading: "Experience",
      items: [
        {
          title: "POS Republic — Software Developer",
          period: "Oct 2022 → Present",
          bullets: [
            "Built Mobile Ordering and Customer Display (second screen) used in live stores.",
            "Integrated kitchen printing/label printing; refined receipt formatting (ESC/POS).",
            "Created Sales Report web app with responsive dashboards.",
            "Integrated third-party APIs (Tyro, Linkly, Deliverect, etc.).",
          ],
        },
        {
          title: "Leap In! — Software Developer Intern",
          period: "Jun 2020 → Jun 2021",
          bullets: [
            "Implemented feedback mechanism for NDIS providers.",
            "Designed REST APIs to store and fetch feedback data.",
            "Built and maintained a structured database schema.",
          ],
        },
      ],
    },
    {
      heading: "Projects",
      items: [
        {
          title: "Visa Portal (Visa to China)",
          bullets: ["Real client site for China visas (Brisbane)."],
        },
        {
          title: "Amherst Platform (Sushi)",
          bullets: [
            "Ordering portal with auth, checkout, admin connected to POS.",
          ],
        },
        {
          title: "Plan-Craft & PrintCraft Studio",
          bullets: [
            "Scheduling tool and label/printing studio exploring multi-tenant, drag-and-drop workflows, and ZPL/ESC/POS output.",
          ],
        },
        {
          title: "Portfolio v2.0 → v5.0",
          bullets: [
            "Personal portfolio; i18n, resume preview, MDX content, and responsive UI.",
          ],
        },
        {
          title: "Good-forum",
          bullets: [
            "Forum prototype (LIHKG-style) derived from AnyPortal; Next.js + MongoDB.",
          ],
        },
      ],
    },
    {
      heading: "Skills",
      items: [
        {
          title: "Core",
          bullets: [
            "Next.js, React, Tailwind, shadcn/ui, Zustand, Node.js/Express, REST API, SQL, Firebase",
          ],
        },
        {
          title: "Also",
          bullets: [
            "React Native, WebUSB / ESC/POS / ZPL printing, MongoDB, Email (Nodemailer / Resend / EmailJS), charting, POS integrations",
          ],
        },
      ],
    },
  ],
};

const zh = {
  header: {
    name: "Ricky Lau",
    title: "全端開發者",
    meta: "布里斯本 • lauyin8183@gmail.com • github.com/rickylcy • linkedin.com/in/ricky-lau-457825206/",
  },
  summaryLabel: "摘要",
  summary:
    "專注 Next.js + Tailwind 的全端開發者，具備 POS／點餐系統實戰經驗。重視乾淨介面、快速體驗與務實交付。",
  sections: [
    {
      heading: "經歷",
      items: [
        {
          title: "POS Republic — 軟體開發者",
          period: "2022/10 → 至今",
          bullets: [
            "打造行動點餐與第二顯示螢幕（實際門市上線）。",
            "整合廚房／標籤列印；優化收據格式（ESC/POS）。",
            "開發銷售報表網站（響應式儀表板）。",
            "串接第三方 API（Tyro、Linkly、Deliverect 等）。",
          ],
        },
        {
          title: "Leap In! — 軟體開發實習生",
          period: "2020/06 → 2021/06",
          bullets: [
            "實作 NDIS 供應商回饋機制。",
            "設計回饋資料的 REST API（儲存／讀取）。",
            "建立並維護結構化資料庫。",
          ],
        },
      ],
    },
    {
      heading: "專案",
      items: [
        {
          title: "簽證公司網站（Visa Portal）",
          bullets: ["中國簽證實際客戶專案（布里斯本）。"],
        },
        {
          title: "Amherst 平台（壽司點餐）",
          bullets: ["點餐入口：登入、結帳、後台管理，與 POS 串接。"],
        },
        {
          title: "Plan-Craft & PrintCraft Studio",
          bullets: [
            "排程工具與標籤／列印工作室，探索多租戶、拖曳排程與 ZPL／ESC/POS 出單流程。",
          ],
        },
        {
          title: "作品集 v2.0 → v5.0",
          bullets: ["個人展示網站；雙語、履歷預覽、MDX 內容與響應式設計。"],
        },
        {
          title: "Good-forum",
          bullets: ["由 AnyPortal 延伸的論壇原型（Next.js + MongoDB）。"],
        },
      ],
    },
    {
      heading: "技能",
      items: [
        {
          title: "核心",
          bullets: [
            "Next.js、React、Tailwind、shadcn/ui、Zustand、Node.js/Express、REST API、SQL、Firebase",
          ],
        },
        {
          title: "其他",
          bullets: [
            "React Native、WebUSB／ESC/POS／ZPL 列印、MongoDB、Email（Nodemailer／Resend／EmailJS）、圖表、POS 整合",
          ],
        },
      ],
    },
  ],
};

export function getResumeData(lang = "en") {
  return lang === "zh" ? zh : en;
}
