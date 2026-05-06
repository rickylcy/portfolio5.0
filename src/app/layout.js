// src/app/layout.js
import "./globals.css";
import NavBar from "@/components/site/NavBar";
import { Providers } from "@/components/site/Providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <body className={`${poppins.className} bg-background text-foreground`}>
        <Providers>
          <NavBar />
          {children}
          {/* 👇 Footer moved into each page instead of here */}
        </Providers>
      </body>
    </html>
  );
}
