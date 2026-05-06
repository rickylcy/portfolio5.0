// src/content/resume.js

const en = {
  header: {
    name: "Ricky Lau",
    title: "Full-stack Developer",
    meta: "Brisbane • lauyin8183@gmail.com • github.com/rickylcy • linkedin.com/in/ricky-lau-457825206/",
  },
  summaryLabel: "Summary",
  summary:
    "Full-stack developer with hands-on experience building POS and ordering products. I focus on reliable delivery, clear user interfaces, and maintainable code.",
  sections: [
    {
      heading: "Experience",
      items: [
        {
          title: "POS Republic — Software Developer",
          period: "Oct 2022 → Present",
          bullets: [
            "Built and shipped mobile ordering and customer display features used in live stores.",
            "Integrated kitchen and label printing workflows, including receipt formatting (ESC/POS).",
            "Developed responsive sales reporting dashboards for store operators.",
            "Integrated third-party services including Tyro, Linkly, and Deliverect.",
          ],
        },
        {
          title: "Leap In! — Software Developer Intern",
          period: "Jun 2020 → Jun 2021",
          bullets: [
            "Implemented a feedback workflow for NDIS providers.",
            "Designed REST APIs for storing and retrieving feedback data.",
            "Maintained structured database schemas and data integrity.",
          ],
        },
      ],
    },
    {
      heading: "Projects",
      items: [
        {
          title: "Visa Portal (Visa to China)",
          bullets: ["Client website for a Brisbane visa service business."],
        },
        {
          title: "Amherst Platform (Sushi)",
          bullets: [
            "School ordering portal with authentication, checkout, admin tools, and POS integration.",
          ],
        },
        {
          title: "Plan-Craft & PrintCraft Studio",
          bullets: [
            "R&D projects for scheduling workflows and label-printing systems (ZPL/ESC/POS).",
          ],
        },
        {
          title: "Portfolio v2.0 → v5.0",
          bullets: [
            "Personal portfolio with bilingual support, resume preview, and responsive UI.",
          ],
        },
        {
          title: "Good-forum",
          bullets: [
            "Forum prototype built with Next.js and MongoDB.",
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
            "Next.js, React, Tailwind, shadcn/ui, Zustand, Node.js/Express, REST APIs, SQL, Firebase",
          ],
        },
        {
          title: "Also",
          bullets: [
            "React Native, WebUSB, ESC/POS and ZPL printing, MongoDB, email integrations, charting, POS integrations",
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
