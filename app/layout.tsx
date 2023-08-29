import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DetectionPage from "@/components/detectionPage";

import { motion, useScroll, useSpring } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

const SoccerLeague = localFont({
  src: "../app/font/soccer_league/SoccerLeague.ttf",
  display: "swap",
});

const humnst777 = localFont({
  src: "../app/font/humnst777_blk_bt/HUM777KI.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salah Kaprah Kemiskinan",
  description: "Data Storytelling BPS Tanah Datar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="id">
      <body
        className={`${poppins.className} bg-white  text-black  min-h-screen flex flex-col relative`}
      >
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
