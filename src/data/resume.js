// src/content/resume.js

const en = {
  header: {
    name: "Ricky Lau",
    title: "Full-Stack Developer",
    location: "Brisbane, Australia",
    email: "rickylcy8183@gmail.com",
    github: "github.com/rickylcy",
    linkedin: "linkedin.com/in/ricky-lau-457825206/",
  },
  summaryLabel: "Summary",
  summary:
    "Full-stack developer focused on practical web products, POS-adjacent systems, and business workflows. I build responsive interfaces, reliable data flows, reporting tools, ordering systems, and integrations that support real store operations.",
  highlightsLabel: "Highlights",
  highlights: [
    "Production experience across POS, mobile ordering, reporting, printing, and customer display workflows.",
    "Strong frontend foundation with Next.js, React, Tailwind CSS, and maintainable component patterns.",
    "Comfortable connecting UI, APIs, databases, payment providers, printers, and third-party services.",
  ],
  sections: [
    {
      heading: "Experience",
      items: [
        {
          title: "POS Republic — Software Developer",
          period: "Oct 2022 – Present",
          bullets: [
            "Built and improved production features for mobile ordering, POS customer display, reporting, and store administration workflows.",
            "Integrated ESC/POS and label-printing flows, including receipt formatting, kitchen routing, and operational print reliability.",
            "Developed responsive sales reporting dashboards covering daily, hourly, item-level, and payment insights for store operators.",
            "Worked with payment and delivery integrations including Tyro, Linkly, and Deliverect across real business environments.",
          ],
        },
        {
          title: "Leap In! — Software Developer Intern",
          period: "Jun 2020 – Jun 2021",
          bullets: [
            "Implemented feedback workflow features for NDIS provider operations.",
            "Designed REST API endpoints for storing, retrieving, and maintaining structured feedback data.",
            "Worked with database schemas, data integrity, and collaborative delivery practices in a production-oriented team.",
          ],
        },
      ],
    },
    {
      heading: "Selected Projects",
      items: [
        {
          title: "Noodle Broadbeach System",
          bullets: [
            "Built an internal multi-store platform for sales reporting, accounting support, rostering, staff availability, holidays, and bonus-day tracking.",
          ],
        },
        {
          title: "Visa Portal",
          bullets: [
            "Delivered a clean public-facing website for a Brisbane visa service business, focused on clear information architecture and enquiry conversion.",
          ],
        },
        {
          title: "Mobile Ordering Platform",
          bullets: [
            "Built QR dine-in and takeaway ordering workflows with POS integration, printer routing, store administration, and payment-provider considerations.",
          ],
        },
        {
          title: "Sales Report Dashboard",
          bullets: [
            "Created responsive KPI dashboards for owners and managers to review trends, time windows, stores, items, and payment performance.",
          ],
        },
        {
          title: "POS Customer Display",
          bullets: [
            "Developed customer-facing display workflows that mirror basket updates, totals, and promotional content during checkout.",
          ],
        },
      ],
    },
    {
      heading: "Skills",
      items: [
        {
          title: "Frontend",
          bullets: [
            "Next.js, React, Tailwind CSS, shadcn/ui, responsive design, accessibility-minded UI, component systems",
          ],
        },
        {
          title: "Backend & Data",
          bullets: [
            "Node.js, REST APIs, NextAuth, MongoDB, MongoDB Atlas, SQL, MSSQL, Firebase, API integrations",
          ],
        },
        {
          title: "POS & Integrations",
          bullets: [
            "ESC/POS, ZPL, WebUSB, kitchen printing, label printing, Linkly, Tyro, Deliverect, payment and ordering workflows",
          ],
        },
        {
          title: "Tools & Practices",
          bullets: [
            "Git, deployment, debugging, data visualization, Recharts, EmailJS, bilingual English/Chinese product interfaces",
          ],
        },
      ],
    },
  ],
};

const zh = {
  header: {
    name: "Ricky Lau",
    title: "全端工程師",
    location: "澳洲布里斯本",
    email: "rickylcy8183@gmail.com",
    github: "github.com/rickylcy",
    linkedin: "linkedin.com/in/ricky-lau-457825206/",
  },
  summaryLabel: "摘要",
  summary:
    "全端工程師，專注打造實用的網頁產品、POS 周邊系統與商業流程工具。熟悉響應式介面、穩定資料流程、報表、點餐系統，以及列印、付款與第三方服務整合。",
  highlightsLabel: "重點能力",
  highlights: [
    "具備 POS、行動點餐、銷售報表、列印與客顯流程的正式產品經驗。",
    "熟悉 Next.js、React、Tailwind CSS 與可維護的元件化開發方式。",
    "能串接 UI、API、資料庫、付款服務、印表機與第三方系統，支援實際門市營運。",
  ],
  sections: [
    {
      heading: "工作經歷",
      items: [
        {
          title: "POS Republic — 軟體開發者",
          period: "2022/10 – 至今",
          bullets: [
            "開發與優化行動點餐、POS 客顯、銷售報表與門市管理等正式上線功能。",
            "整合 ESC/POS 與標籤列印流程，包含收據格式、廚房出單路由與營運列印穩定性。",
            "建立響應式銷售報表儀表板，呈現日銷售、時段、商品與付款方式等營運資訊。",
            "在實際商業環境中串接 Tyro、Linkly、Deliverect 等付款與外送相關服務。",
          ],
        },
        {
          title: "Leap In! — 軟體開發實習生",
          period: "2020/06 – 2021/06",
          bullets: [
            "為 NDIS 服務供應商流程實作回饋功能。",
            "設計用於儲存、讀取與維護回饋資料的 REST API。",
            "參與資料庫結構、資料完整性與團隊協作交付。",
          ],
        },
      ],
    },
    {
      heading: "精選專案",
      items: [
        {
          title: "Noodle Broadbeach System",
          bullets: [
            "建立多店內部管理平台，支援銷售報表、會計輔助、排班、員工可上班時間、假期與 bonus day 管理。",
          ],
        },
        {
          title: "Visa Portal",
          bullets: [
            "為布里斯本簽證服務公司交付對外網站，重視清晰資訊架構、信任感與詢問轉換。",
          ],
        },
        {
          title: "Mobile Ordering Platform",
          bullets: [
            "開發 QR 內用與外帶點餐流程，整合 POS、印表機路由、門市後台與付款相關流程。",
          ],
        },
        {
          title: "Sales Report Dashboard",
          bullets: [
            "建立響應式 KPI 儀表板，協助老闆與主管檢視銷售趨勢、時段、分店、商品與付款表現。",
          ],
        },
        {
          title: "POS Customer Display",
          bullets: [
            "開發客戶面向的副螢幕流程，即時顯示購物籃、金額與促銷內容，提升結帳透明度。",
          ],
        },
      ],
    },
    {
      heading: "技能",
      items: [
        {
          title: "前端",
          bullets: [
            "Next.js、React、Tailwind CSS、shadcn/ui、響應式設計、注重可用性的 UI、元件系統",
          ],
        },
        {
          title: "後端與資料",
          bullets: [
            "Node.js、REST API、NextAuth、MongoDB、MongoDB Atlas、SQL、MSSQL、Firebase、API 串接",
          ],
        },
        {
          title: "POS 與整合",
          bullets: [
            "ESC/POS、ZPL、WebUSB、廚房出單、標籤列印、Linkly、Tyro、Deliverect、付款與點餐流程",
          ],
        },
        {
          title: "工具與實務",
          bullets: [
            "Git、部署、除錯、資料視覺化、Recharts、EmailJS、中英雙語產品介面",
          ],
        },
      ],
    },
  ],
};

export function getResumeData(lang = "en") {
  return lang === "zh" ? zh : en;
}
