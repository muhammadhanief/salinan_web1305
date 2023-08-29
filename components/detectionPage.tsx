"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const detectionPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="!left-0 !items-start h-0.5 lg:h-1 mb-3 bg-white  relative "
      style={{ scaleX }}
    />
  );
};

export default detectionPage;
