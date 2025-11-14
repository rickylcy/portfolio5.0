🙋‍♂️ About Me

Ricky Lau
Frontend-leaning Full-stack Developer — Brisbane, Australia

POS Republic (Software Developer)

Specialised in modern web apps, POS systems, printing logic, and UI-heavy workflows

GitHub: https://github.com/rickylcy

LinkedIn: https://www.linkedin.com/in/ching-yin-lau-457825206/





Ricky Lau — Portfolio 5.0

A bilingual (EN/中文) personal portfolio built with Next.js 15, Tailwind CSS, and shadcn/ui, showcasing my full-stack capabilities, commercial projects, and resume.
Designed with a clean aesthetic, scroll-snap interactions, responsive layouts, and a strong focus on accessibility and performance.

This version (5.0) is a complete rebuild and upgrade from previous versions (v3.0 → v4.0 → v5.0), now featuring a centralised project system, enhanced visuals, and modern client UX.

🚀 Tech Stack

Next.js 15 (App Router)

React 18

Tailwind CSS

shadcn/ui

Lucide Icons

Zustand (global language store)

EmailJS (contact form)

React-PDF (resume export)

i18n (EN / 中文) — custom lightweight language system

🌐 Live Site

👉 Link here (Vercel URL)
(Add your Vercel deployment later.)

✨ Features
🔹 Fully bilingual (English / Chinese)

Client-side language switcher using Zustand

All pages translate instantly (Nav, Home, Projects, Resume, Footer)

🔹 Scroll-snap, full-screen section design

Hero, Highlights, How I Work, Technologies, Resume Preview, Contact

Each fills 100vh and scrolls smoothly on desktop & mobile

🔹 Modern UI

Tailwind for utility styling

shadcn/ui for button, card, input, form components

Beautiful animations & gradients

🔹 Projects Page

Tag filters (e.g., Web, Mobile, POS, Personal)

Each project can show:

External Demo URL (if public)

Or a modal popup with intro + gallery (if private/company product)

🔹 Resume Page

Live on-page resume preview

Download as PDF (React-PDF)

Print-friendly version

🔹 Contact Section

EmailJS form with:

Validation

Loading & success/error UI

EN/中文 language support

🔹 Responsive Everything

Desktop, tablet, and mobile layouts carefully designed

Fluid typography & spacing

Scroll snapping works on mobile too

📁 Project Structure
src/
  app/
    layout.js
    page.js
    resume/
    projects/
  components/
    site/
    client/
    resume/
  lib/
    lang.js   ← i18n logic
  styles/
public/
  logo.png
  favicon.ico

🔧 Environment Variables

Create .env.local:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxx


These are required for the contact form.

🛠️ Running Locally
npm install
npm run dev


App runs on:

http://localhost:3000
