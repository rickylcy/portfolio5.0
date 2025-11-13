// src/app/layout.js
import "./globals.css";
import NavBar from "@/components/site/NavBar";
import { Providers } from "@/components/site/Providers";

export const metadata = {
  title: "Ricky Lau Portfolio 5.0",
  description: "Frontend-leaning full-stack developer in Brisbane",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <NavBar />
          {children}
          {/* 👇 Footer moved into each page instead of here */}
        </Providers>
      </body>
    </html>
  );
}
