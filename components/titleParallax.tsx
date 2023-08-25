import React from "react";
import localFont from "next/font/local";

const SoccerLeague = localFont({
  src: "../app/font/soccer_league/SoccerLeague.ttf",
  display: "swap",
});

const humnst777 = localFont({
  src: "../app/font/humnst777_blk_bt/HUM777K.ttf",
  display: "swap",
});

const titleParallax = (props: any) => {
  const { titleParallax, color } = props;
  return (
    <div>
      <div
        data-aos="slide-left"
        className={`${humnst777.className} text-${color} text-center pb-4 pt-8  text-4xl md:text-5xl lg:text-6xl `}
      >
        {titleParallax}
      </div>
    </div>
  );
};

export default titleParallax;
