// src/components/resume/ResumeActions.jsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResumeActions({
  pdfHref,
  downloadText,
  printText,
  backHref,
  backText,
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 print:hidden">
      <Button asChild variant="outline">
        <a href={pdfHref}>{downloadText}</a>
      </Button>
      <Button variant="outline" onClick={() => window.print()}>
        {printText}
      </Button>
      <Button asChild variant="ghost" className="ml-0 sm:ml-auto">
        <Link href={backHref}>{backText}</Link>
      </Button>
    </div>
  );
}
