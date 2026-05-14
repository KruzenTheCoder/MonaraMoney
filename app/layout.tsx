import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MonaraMoney — Reward consistency, not intensity.",
    template: "%s | MonaraMoney",
  },
  description:
    "MonaraMoney is the playful, gamified personal-finance app that rewards you for showing up. Track spending, set budgets, build streaks, earn badges — and finally enjoy managing your money.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://monaramoney.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "MonaraMoney — Reward consistency, not intensity.",
    description:
      "The gamified personal-finance app. Build streaks, level up, and master your money one day at a time.",
    siteName: "MonaraMoney",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonaraMoney",
    description:
      "Reward consistency, not intensity. The gamified personal-finance app that makes budgeting feel like a win.",
  },
};

export const viewport: Viewport = {
  themeColor: "#2E8FD9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
