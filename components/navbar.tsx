"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Cobaajadulu from "@/public/assets/img/Logo Mockup Coba dulu Aja.png";
import DetectionPage from "./detectionPage";

// import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    // bg-opacity-70 bg-gray-800

    <nav
      data-aos="fade-down"
      className="bg-gradient-to-b from-black fixed top-0 z-50  w-full pb-8"
    >
      <DetectionPage />
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-lg ">
          <Logo width={37} height={45} />
        </Link>
        <Link href="/" className="text-white font-bold text-lg">
          <Image src={Cobaajadulu} alt="Logo BPS" width={37} height={45} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
