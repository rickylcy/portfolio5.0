// src/data/projects.js
export const projects = [
  {
    id: "noodles-broadbeach",
    title: "Noodle Broadbeach – Reporting & Rostering",
    blurb:
      "Internal web app for a multi-store restaurant group: daily sales reports, analytics, and a rostering system with staff availability, holidays, and bonus days.",
    tags: ["Web", "Next.js", "MongoDB", "Reporting", "Rostering", "Internal"],
    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "NextAuth",
      "MongoDB Atlas",
      "REST API",
    ],
    status: "Internal",
    demoUrl: null, // no public demo – keeps Demo button hidden
    caseUrl: "/projects/noodles-broadbeach", // you can create this later
    // Put screenshots in public/projects/noodles-broadbeach/
    // Then list as many as you want here. 1, 2, 3, or 4+ all work.
    images: [
      "/projects/noodles-broadbeach/01-dashboard.png",
      "/projects/noodles-broadbeach/02-report-list.png",
      "/projects/noodles-broadbeach/03-roster.png",
    ],
    image: "/projects/noodles-broadbeach/01-dashboard.png",
  },
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
    images: [
      "/projects/mobile-ordering/01-menu.png",
      "/projects/mobile-ordering/02-cart.png",
      "/projects/mobile-ordering/03-admin.png",
    ],
    image: "/projects/mobile-ordering/01-menu.png",
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
    images: [
      "/projects/sales-report/01-summary.png",
      "/projects/sales-report/02-chart.png",
    ],
    image: "/projects/sales-report/01-summary.png",
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
    images: [
      "/projects/chat-app/01-desktop.png",
      "/projects/chat-app/02-mobile.png",
    ],
    image: "/projects/chat-app/01-desktop.png",
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
    images: [
      "/projects/amherst/01-home.png",
      "/projects/amherst/02-order.png",
    ],
    image: "/projects/amherst/01-home.png",
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
    images: [
      "/projects/plan-craft/01-board.png",
      "/projects/plan-craft/02-detail.png",
    ],
    image: "/projects/plan-craft/01-board.png",
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
    images: [
      "/projects/good-forum/01-home.png",
      "/projects/good-forum/02-thread.png",
    ],
    image: "/projects/good-forum/01-home.png",
  },
];
