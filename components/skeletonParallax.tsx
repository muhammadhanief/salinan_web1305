import React from "react";
import TitleParallax from "./titleParallax";
import Content from "./content";
import { get } from "http";

type Props = {
  text?: Array<string>;
  titleParallax?: string;
  color?: string;
  bg?: string;
  bgHero?: string;
};

const skeletonParallax = ({
  text,
  titleParallax,
  color,
  bg,
  bgHero,
}: Props) => {
  const panjang = text!.length;
  const rows = [];
  for (let i = 0; i < panjang; i++) {
    rows.push(<Content key={i} text={text![i]} />);
  }

  return (
    <div className={`${bg}`}>
      <div
        className={`xl:bg-cover text-black bg-fixed bg-center bg-no-repeat ${bgHero} bg-contain justify-center items-center `}
      >
        <TitleParallax
          titleParallax={titleParallax}
          color={color}
        ></TitleParallax>
        {rows}
      </div>
    </div>
  );
};

export default skeletonParallax;
