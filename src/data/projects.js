// src/data/projects.js
export const projects = [
  {
    id: "mobile-ordering",
    title: "POS / Mobile Ordering",
    blurb:
      "QR table ordering + takeaway with printer mapping, payments, and kitchen/label receipts.",
    tags: ["Web", "Next.js", "Tailwind", "Shadcn", "Payments", "Printing"],
    tech: [
      "Next.js",
      "Zustand",
      "MySQL/MSSQL",
      "ESC/POS",
      "ZPL",
      "Stripe/Linkly/Tyro",
    ],
    status: "In Production",
    demoUrl: "/portal/login",
    caseUrl: "/projects/mobile-ordering",
    image: "/projects/mobile-ordering.png",
  },
  {
    id: "sales-report",
    title: "Sales Report Dashboard",
    blurb:
      "Responsive KPI dashboard with trends, hourly/daily breakdowns, and payment insights.",
    tags: ["Web", "Next.js", "Charts", "Responsive"],
    tech: ["Next.js", "Recharts", "Zustand", "Company API"],
    status: "Live",
    demoUrl: "/reports",
    caseUrl: "/projects/sales-report",
    image: "/projects/sales-report.png",
  },
  {
    id: "chat-app",
    title: "Realtime Chat App",
    blurb:
      "Self-learning project: Firebase auth, realtime messages, and responsive UI.",
    tags: ["Web", "Firebase", "Self-Learning", "Responsive"],
    tech: ["React", "Vite", "Firebase Auth/DB", "Tailwind"],
    status: "Completed",
    demoUrl: "https://ricky-chat-app.vercel.app/",
    caseUrl: "/projects/chat-app",
    image: "/projects/chat-app.png",
  },
  {
    id: "amherst",
    title: "Amherst Platform",
    blurb:
      "School-oriented sushi ordering portal with Google sign-in and multi-user (parent/child) model.",
    tags: ["Web", "Next.js", "Auth", "Multi-User"],
    tech: ["Next.js", "Firebase", "MongoDB"],
    status: "In Progress",
    demoUrl: "/",
    caseUrl: "/projects/amherst",
    image: "/projects/amherst.png",
  },
  {
    id: "plan-craft",
    title: "Plan-Craft Scheduling",
    blurb:
      "Drag-and-drop schedule with recurrence rules, realtime updates, and role-based access.",
    tags: ["Web", "Next.js", "Scheduling", "Realtime"],
    tech: ["Next.js", "MongoDB", "Redis", "Prisma"],
    status: "Building",
    demoUrl: "/",
    caseUrl: "/projects/plan-craft",
    image: "/projects/plan-craft.png",
  },
  {
    id: "good-forum",
    title: "Good-Forum (吹水台)",
    blurb:
      "LIHKG-style forum: Next.js + MongoDB, mobile-first, bilingual content.",
    tags: ["Web", "Next.js", "MongoDB", "Bilingual"],
    tech: ["Next.js", "MongoDB", "Tailwind", "Shadcn"],
    status: "WIP",
    demoUrl: "/",
    caseUrl: "/projects/good-forum",
    image: "/projects/good-forum.png",
  },
];
