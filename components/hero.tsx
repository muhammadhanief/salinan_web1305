import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Layout1 from "../public/assets/img/parallaxHero/layout1.png";
import Layout2 from "../public/assets/img/parallaxHero/Layout2.png";
import Layout3 from "../public/assets/img/parallaxHero/layout3.png";
import Layout45 from "../public/assets/img/parallaxHero/layout45.png";
import Layout67 from "../public/assets/img/parallaxHero/layout67.png";

import localFont from "next/font/local";
const humnst777 = localFont({
  src: "../app/font/humnst777_blk_bt/HUM777KI.ttf",
  display: "swap",
});

const Hero = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1 / 6], [1, 2.5]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // const translateXkanan = useTransform(scrollYProgress, [0, 1 / 6], [0, 10000]);
  // const translateXkiri = useTransform(scrollYProgress, [0, 1 / 6], [0, 10000]);
  // const translateX = useTransform(scrollYProgress, [0, 1 / 6], [0, -10000]);
  const translatekiri = useTransform(scrollYProgress, [0, 1 / 10], [0, -750]);
  const translatekanan = useTransform(scrollYProgress, [0, 1 / 10], [0, 750]);

  return (
    <div
      // ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-content-center"
    >
      <motion.div
        className="absolute inset-0 bottom-0 z-0 bg-parallax1"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // y: backgroundY,
        }}
      />
      <motion.h1
        data-aos="fade-down-right"
        className={`${humnst777.className} z-50 text-white text-5xl text-center lg:text-[90px]`}
      >
        Salah Kaprah
      </motion.h1>
      <motion.div
        className="absolute inset-0 bottom-0 z-10 bg-parallax3"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 bottom-0 z-20 bg-parallax45kanan"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // y: backgroundY,
          // x: translatekanan,
          scale,
        }}
      />
      <motion.div
        className="absolute inset-0 bottom-0 z-20 bg-parallax45kiri"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // y: backgroundY,
          // x: translatekiri,
          scale,
        }}
      />
      <motion.h1
        data-aos="fade-up-left"
        className={`${humnst777.className} z-20 text-white text-5xl lg:text-[90px] text-center pt-[30vh]`}
      >
        Kemiskinan
      </motion.h1>
      <motion.div
        className="absolute inset-0 bottom-0 z-20 bg-parallax67kiri"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // y: backgroundY,
          x: translatekiri,
          // scale,
        }}
      />
      <motion.div
        className="absolute inset-0 bottom-0 z-20 bg-parallax67kanan"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          // y: backgroundY,
          x: translatekanan,
          // scale,
        }}
      />
    </div>
  );
};

export default Hero;
