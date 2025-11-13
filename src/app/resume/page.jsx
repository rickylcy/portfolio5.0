// app/resume/page.jsx
"use client";

import { useLang } from "@/lib/lang";
import { getResumeData } from "@/data/resume";
import Resume from "@/components/resume/Resume";
import ResumeActions from "@/components/resume/ResumeActions";

const pageCopy = {
  en: {
    download: "Download PDF",
    print: "Print",
    backHome: "Back to home",
  },
  zh: {
    download: "下載 PDF",
    print: "列印",
    backHome: "回到首頁",
  },
};

export default function ResumePage() {
  const { lang } = useLang();
  const data = getResumeData(lang);
  const t = pageCopy[lang] || pageCopy.en;

  const pdfHref = `/api/resume?lang=${lang}`;

  return (
    <main className="container mx-auto p-6 print:p-0">
      <div className="mx-auto max-w-3xl bg-card text-card-foreground shadow rounded-2xl p-6 print:shadow-none print:rounded-none">
        <Resume data={data} />
      </div>

      <ResumeActions
        pdfHref={pdfHref}
        downloadText={t.download}
        printText={t.print}
        backHref="/"
        backText={t.backHome}
      />
    </main>
  );
}
