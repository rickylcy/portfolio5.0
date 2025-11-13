// app/api/resume/route.js
import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import ResumePDF from "@/components/resume/ResumePDF";
import { getResumeData } from "@/content/resume";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const langParam = searchParams.get("lang");
  const lang = langParam === "zh" ? "zh" : "en";

  const data = getResumeData(lang);
  const stream = await renderToStream(<ResumePDF data={data} />);

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="Ricky_Lau_Resume_${lang}.pdf"`,
    },
  });
}
