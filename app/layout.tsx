import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

        <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
          <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
            © 2023 Copyright :
            <a
              className="px-2 text-neutral-800 dark:text-neutral-400"
              href="https://tailwind-elements.com/"
            >
              BPS Kabupaten Tanah Datar
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
