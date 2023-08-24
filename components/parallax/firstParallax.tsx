import React from "react";
import Image from "next/image";
import { LoremIpsum } from "lorem-ipsum";
import Content from "../content";
import TitleParallax from "../titleParallax";

const firstParallax = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  let text = lorem.generateParagraphs(1);
  let titleParallax = "Memahami Kemiskinan";
  let color = "black";

  return (
    <div>
      <div className="bg-bg1">
        <div className=" text-black bg-fixed bg-center bg-no-repeat bg-hero1 justify-center items-center bg-contain">
          <TitleParallax
            titleParallax={titleParallax}
            color="white"
          ></TitleParallax>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
          <Content text={text}></Content>
        </div>
      </div>
    </div>
  );
};

export default firstParallax;

{
  /* <Image
        src={"/assets/img/parallaxPhoto/Apa itu garis kemiskinan (animasi).png"}
        alt="Parallax 1"
        width={width}
        height={height}
      /> */
}
{
  /* <div className="bg-bg2">
        <div className=" bg-fixed bg-center bg-no-repeat bg-hero justify-center items-center bg-contain">
          <div className="mx-4 bg-white bg-opacity-50">
            <div className="px-4 text-justify ">{text}</div>
          </div>
        </div>
      </div> */
}
