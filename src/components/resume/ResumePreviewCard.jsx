// src/components/resume/ResumePreviewCard.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    <section className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 rounded-2xl border bg-card text-card-foreground p-4 sm:p-6 shadow-sm">
        <Image
          src="/resume-thumb.png"
          alt="Resume preview"
          width={320}
          height={416}
          className="hidden h-44 md:h-52 w-32 md:w-40 shrink-0 rounded-lg object-cover shadow sm:block"
        />
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold">{labels.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{labels.blurb}</p>
          <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/resume">{labels.view}</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href={pdfHref}>{labels.download}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
