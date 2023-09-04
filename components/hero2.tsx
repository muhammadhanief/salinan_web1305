import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import layout1 from "@/public/assets/img/parallaxHero/layout1.png";

const hero2 = () => {
  return (
    <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
      <ParallaxBannerLayer
        image="../public/assets/img/parallaxHero/layout1.png"
        speed={-20}
      />
      <ParallaxBannerLayer
        image="../public/assets/img/parallaxHero/layout3.png"
        speed={-10}
      />
    </ParallaxBanner>
  );
};

export default hero2;
