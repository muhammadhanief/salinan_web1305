"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Cobaajadulu from "@/public/assets/img/Logo Mockup Coba dulu Aja.png";

// import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    // bg-opacity-70 bg-gray-800
    <nav className="bg-gradient-to-b from-black  p-4 z-10 fixed top-0  w-full">
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
