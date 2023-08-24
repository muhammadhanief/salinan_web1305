import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";

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
  title: "Kemiskinan",
  description: "Data Storytelling BPS Tanah Datar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${poppins.className} bg-white  text-black mt-[71px] min-h-screen flex flex-col`}
      >
        <header>
          <Navbar />
        </header>

        {children}
      </body>
    </html>
  );
}
