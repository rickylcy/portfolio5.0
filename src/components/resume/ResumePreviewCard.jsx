// src/components/resume/ResumePreviewCard.jsx
"use client";

import Link from "next/link";

export default function ResumePreviewCard({ lang }) {
  const isZh = lang === "zh";

  const labels = isZh
    ? {
        title: "履歷摘要",
        blurb: "快速瀏覽我的經歷與技能，或下載成 PDF 方便保存與分享。",
        view: "查看完整履歷",
        download: "下載 PDF",
      }
    : {
        title: "Resume snapshot",
        blurb:
          "Skim my experience and skills, or download a PDF version to keep or share.",
        view: "View full resume",
        download: "Download PDF",
      };

  const pdfHref = `/api/resume?lang=${lang}`;

  return (
    <section className="mt-16">
      <div className="flex items-center gap-6 rounded-2xl border bg-card text-card-foreground p-6 shadow-sm">
        <img
          src="/resume-thumb.png"
          alt="Resume preview"
          className="hidden h-52 w-40 shrink-0 rounded-lg object-cover shadow sm:block"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{labels.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{labels.blurb}</p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/resume"
              className="inline-flex h-10 items-center rounded-lg border px-4 hover:bg-muted"
            >
              {labels.view}
            </Link>
            <a
              href={pdfHref}
              className="inline-flex h-10 items-center rounded-lg border px-4 hover:bg-muted"
            >
              {labels.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
