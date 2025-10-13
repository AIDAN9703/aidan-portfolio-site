import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import SideBarNav from "@/components/SideBarNav";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aidan's Portfolio | Journey & Projects",
  description:
    "A timeline of my journey in tech, showcasing projects and milestones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} flex flex-col lg:flex-row`}
      >
        {/* Mobile Navigation */}
        <MobileNav />

        {/* Sidebar - Hidden on mobile, fixed on desktop */}
        <div className="hidden lg:block lg:w-1/4 xxl:w-1/5 h-screen sticky top-0 p-4 xxl:p-8">
          <SideBarNav />
        </div>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 xl:w-4/5 p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
