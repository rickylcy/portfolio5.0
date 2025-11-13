"use client";
import { LangProvider } from "@/lib/lang";
import A11yButton from "@/components/site/A11yButton";

export function Providers({ children }) {
  return (
    <LangProvider>
      {children}
      <A11yButton />
    </LangProvider>
  );
}
