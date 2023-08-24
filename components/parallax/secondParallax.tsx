import React from "react";
import Image from "next/image";
import { LoremIpsum } from "lorem-ipsum";
import Content from "../content";
import TitleParallax from "../titleParallax";

const secondParallax = () => {
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
  let titleParallax = "Mengukur Kemiskinan";
  let color = "white";

  return (
    <div>
      <div className="bg-bg2">
        <div className=" text-black bg-fixed bg-center bg-no-repeat bg-hero2 justify-center items-center bg-contain">
          <TitleParallax
            titleParallax={titleParallax}
            color={color}
          ></TitleParallax>
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

export default secondParallax;

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
