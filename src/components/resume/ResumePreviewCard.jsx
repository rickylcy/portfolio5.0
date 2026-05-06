// src/components/resume/ResumePreviewCard.jsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getResumeData } from "@/data/resume";

function ResumeSheetPreview({ data, previewLabel }) {
  const experience = data.sections.find((section) =>
    /experience|工作經歷/i.test(section.heading)
  );
  const projects = data.sections.find((section) =>
    /project|專案/i.test(section.heading)
  );
  const skills = data.sections.find((section) =>
    /skill|技能/i.test(section.heading)
  );

  return (
    <div className="relative mx-auto w-full max-w-[10.5rem] min-[390px]:max-w-[11.5rem] sm:max-w-[17rem] md:max-w-xs">
      <div className="absolute -right-3 top-6 h-[82%] w-[78%] rounded-2xl bg-violet-950 dark:bg-violet-500/60" />
      <div className="portfolio-card-motion portfolio-float-gentle relative aspect-[210/297] overflow-hidden rounded-2xl border border-violet-100 bg-white p-2.5 text-slate-950 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:p-4">
        <div className="flex items-start justify-between gap-3 border-b border-violet-100 pb-2 dark:border-slate-700 sm:pb-3">
          <div>
            <p className="text-[7px] font-bold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-300 sm:text-[10px]">
              {previewLabel}
            </p>
            <h3 className="mt-1 text-sm font-extrabold leading-none text-violet-950 dark:text-violet-200 sm:text-xl">
              {data.header.name}
            </h3>
            <p className="mt-1 text-[8px] font-semibold text-slate-700 dark:text-slate-300 sm:text-[11px]">
              {data.header.title}
            </p>
          </div>
          <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-violet-100 to-slate-200 dark:from-violet-500/30 dark:to-slate-700 sm:h-10 sm:w-10" />
        </div>

        <div className="mt-2 rounded-xl border border-violet-100 bg-violet-50/70 p-1.5 dark:border-slate-700 dark:bg-slate-800/80 sm:mt-3 sm:p-2">
          <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-violet-800 dark:text-violet-300 sm:text-[8px]">
            {data.summaryLabel}
          </p>
          <p className="mt-1 line-clamp-2 text-[6px] leading-3 text-slate-700 dark:text-slate-300 sm:line-clamp-3 sm:text-[9px] sm:leading-4">
            {data.summary}
          </p>
        </div>

        <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2.5">
          {experience?.items.slice(0, 2).map((item) => (
            <div key={item.title}>
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate text-[7px] font-bold text-slate-950 dark:text-slate-100 sm:text-[10px]">
                  {item.title}
                </p>
                <p className="shrink-0 text-[5px] text-slate-500 dark:text-slate-400 sm:text-[7px]">
                  {item.period}
                </p>
              </div>
              <p className="mt-0.5 line-clamp-1 text-[6px] leading-3 text-slate-600 dark:text-slate-300 sm:mt-1 sm:text-[8px]">
                {item.bullets?.[0]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-3 sm:gap-2">
          {projects?.items.slice(0, 4).map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-slate-100 px-1.5 py-1 dark:bg-slate-800 sm:px-2 sm:py-1.5"
            >
              <p className="truncate text-[5px] font-semibold text-slate-800 dark:text-slate-200 sm:text-[8px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-2.5 bottom-2.5 border-t border-violet-100 pt-1.5 dark:border-slate-700 sm:inset-x-4 sm:bottom-4 sm:pt-2">
          <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-violet-800 dark:text-violet-300 sm:text-[8px]">
            {skills?.heading}
          </p>
          <div className="mt-1 flex flex-wrap gap-0.5 sm:gap-1">
            {["Next.js", "React", "Tailwind", "MongoDB", "POS"].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-violet-100 px-1 py-0.5 text-[5px] text-violet-900 dark:bg-violet-500/20 dark:text-violet-200 sm:px-1.5 sm:text-[7px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResumePreviewCard({ lang }) {
  const isZh = lang === "zh";
  const data = getResumeData(lang);

  const labels = isZh
    ? {
        title: "履歷摘要",
        blurb: "預覽 PDF 風格履歷，快速查看我的經歷、專案與技能。",
        preview: "PDF 預覽",
        view: "查看完整履歷",
        download: "下載 PDF",
      }
    : {
        title: "Resume snapshot",
        blurb:
          "Preview the PDF-style resume, then open the full page or download a clean copy.",
        preview: "PDF preview",
        view: "View full resume",
        download: "Download PDF",
      };

  const pdfHref = `/api/resume?lang=${lang}`;

  return (
    <section className="w-full max-w-5xl mx-auto">
      <div className="grid items-center gap-3 rounded-3xl border border-violet-100 bg-white/90 p-3 shadow-[0_22px_60px_-40px_rgba(31,38,135,0.45)] dark:border-slate-700 dark:bg-slate-900/80 sm:gap-5 sm:p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
        <ResumeSheetPreview data={data} previewLabel={labels.preview} />

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-300">
            {labels.preview}
          </p>
          <h2 className="mt-1.5 text-xl font-extrabold tracking-tight text-slate-950 dark:text-slate-100 sm:mt-2 sm:text-3xl">
            {labels.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:mt-3 sm:text-base sm:leading-7">
            {labels.blurb}
          </p>

          <div className="mt-4 hidden gap-2 text-sm text-slate-700 dark:text-slate-300 sm:grid sm:grid-cols-3">
            {data.highlights?.slice(0, 3).map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-violet-100 bg-violet-50/60 p-3 dark:border-slate-700 dark:bg-slate-800/80"
              >
                {highlight}
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
            <Button asChild className="w-full bg-violet-950 hover:bg-violet-900 dark:bg-violet-500 dark:hover:bg-violet-400 sm:w-auto">
              <Link href="/resume">{labels.view}</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href={pdfHref} download>
                {labels.download}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
