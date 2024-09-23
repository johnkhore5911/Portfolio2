import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/main/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} bg-[#030014] w-full h-full overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        <Navbar/>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
