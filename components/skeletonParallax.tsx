import React from "react";
import TitleParallax from "./titleParallax";
import Content from "./content";
import { get } from "http";
import Tabel5_1 from "@/public/assets/img/content/tabel 5.1.png";
import Image from "next/image";

type Props = {
  text?: Array<string>;
  titleParallax?: string;
  color?: string;
  bg?: string;
  bgHero?: string;
};

const skeletonParallax = (props: any) => {
  return (
    <div
      className={`${props.bg} `}
      // style={{
      //   height: "100vh",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   scrollSnapAlign: "start",
      // }}
    >
      <div
        className={`xl:bg-cover text-black bg-fixed bg-center bg-no-repeat ${props.bgHero} bg-contain justify-center items-center `}
      >
        <TitleParallax
          titleParallax={props.titleParallax}
          color={props.color}
        ></TitleParallax>
        <Content text={props.text} alt={props.alt} img={props.img} />
      </div>
    </div>
  );
};

export default skeletonParallax;
