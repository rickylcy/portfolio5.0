import "./globals.css";
import NavBar from "@/components/site/NavBar";
import SiteFooter from "@/components/site/SiteFooter";
import { Providers } from "@/components/site/Providers";

export const metadata = {
  title: "Ricky Lau Portfolio 5.0",
  description: "Frontend-leaning full-stack developer in Brisbane",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <NavBar />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
