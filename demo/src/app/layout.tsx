import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Menu } from "@/components/header/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kurlar",
  description:
    "Türkiye Cumhuriyet Merkez Bankası (TCMB) tarafından yayınlanan döviz kurlarını kolayca çekmenizi sağlayan bir TypeScript kütüphanesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen bg-background font-sans text-foreground transition-colors dark:bg-background/95 dark:text-foreground/95 bg-no-repeat bg-cover bg-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Menu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
