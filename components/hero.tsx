import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Layout1 from "../public/assets/img/parallaxHero/layout1.png";
import Layout2 from "../public/assets/img/parallaxHero/Layout2.png";
import Layout3 from "../public/assets/img/parallaxHero/layout3.png";
import Layout4 from "../public/assets/img/parallaxHero/layout4.png";
import Layout5 from "../public/assets/img/parallaxHero/layout5.png";
import Layout6 from "../public/assets/img/parallaxHero/layout6.png";
import Layout7 from "../public/assets/img/parallaxHero/layout7.png";
import localFont from "next/font/local";
const humnst777 = localFont({
  src: "../app/font/humnst777_blk_bt/HUM777KI.ttf",
  display: "swap",
});

const hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-content-center"
      //   style={{
      //     height: "100vh",
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     scrollSnapAlign: "start",
      //   }}
    >
      <motion.div
        className="absolute inset-0 bottom-0 z-0 bg-parallax1"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      {/* <motion.div
        className="absolute inset-0 z-0 bg-parallax2"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      /> */}
      <motion.h1
        className={`${humnst777.className} z-50 text-white text-5xl text-center lg:text-[90px]`}
      >
        Salah Kaprah
      </motion.h1>
      <motion.div
        className="absolute inset-0 bottom-0 z-10 bg-parallax3"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 bottom-0 z-20 bg-parallax45"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 bottom-0 z-20 bg-parallax67"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.h1
        className={`${humnst777.className} z-50 text-white text-5xl lg:text-[90px] text-center pt-[30vh]`}
      >
        Kemiskinan
      </motion.h1>
    </div>
  );
};

export default hero;
