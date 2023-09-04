"use client";
import React, { useEffect } from "react";
import FirstParallax from "@/components/parallax/firstParallax";
import SecondParallax from "@/components/parallax/secondParallax";
import ThirdParallax from "@/components/parallax/thirdParallax";
import FourthParallax from "@/components/parallax/fourthParallax";
import FifthParallax from "@/components/parallax/fifthParallax";
import SixthParallax from "@/components/parallax/sixthParallax";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";

import Logo from "@/components/logo";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main
      // style={{
      //   scrollSnapType: "cover",
      //   overflowY: "scroll",
      //   height: "100vh",
      // }}
      className="flex min-h-screen flex-col items-center justify-between snap-y snap-mandatory "
    >
      <Hero></Hero>
      <FirstParallax></FirstParallax>
      {/* <ParallaxProvider>
        <Hero2></Hero2>
      </ParallaxProvider> */}
      <SecondParallax></SecondParallax>
      <ThirdParallax></ThirdParallax>
      <FourthParallax></FourthParallax>
      <FifthParallax></FifthParallax>
      {/* <SixthParallax></SixthParallax> */}
    </main>
  );
}
