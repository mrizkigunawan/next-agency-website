import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/lib/gsap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TransitionProvider from "@/components/transition/TransitionProvider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollToTop from "@/components/layout/ScrollToTop";
import InitialLoader from "@/components/layout/InitialLoader";
import Cursor from "@/components/layout/Cursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Source_Sans_3({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency - Digital Experience Studio",
  description: "Creating digital experiences that inspire and engage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#fafaf9] text-[#1c1917]">
        <InitialLoader />
        <TransitionProvider>
          <SmoothScroll>
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <ScrollToTop />
            <Cursor />
          </SmoothScroll>
        </TransitionProvider>
      </body>
    </html>
  );
}