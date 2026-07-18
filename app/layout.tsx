import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bonsaadugna.dev"),
  title: {
    default: "Bonsa Adugna — UI/UX Designer & AI Engineer",
    template: "%s — Bonsa Adugna",
  },
  description:
    "Bonsa Adugna is a UI/UX designer, web designer, AI engineer, and full-stack developer crafting premium SaaS, healthcare, and banking products.",
  keywords: [
    "Full-Stack Developer",
    "Product Designer",
    "AI Engineer",
    "UI/UX ",
    "Bonsa Adugna",
    "Portfolio",
  ],
  openGraph: {
    title: "Bonsa Adugna — Full-Stack Developer, UI/UX DesignerAI Engineer",
    description:
      "Premium product design and full-stack engineering for SaaS, AI, healthcare, and banking platforms.",
    url: "https://bonsaadugna.dev",
    siteName: "Bonsa Adugna",
    type: "website",
    images: ["/images/og-cover.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonsa Adugna — UI/UX Designer & AI Engineer",
    description:
      "Premium product design and full-stack engineering for SaaS, AI, healthcare, and banking platforms.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} grain bg-base font-sans antialiased selection:bg-accent selection:text-white`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
