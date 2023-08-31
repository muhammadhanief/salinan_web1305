import { constants } from "fs/promises";
import React from "react";
import Image from "next/image";

type Props = {
  text?: string;
};

const Content = (props: any) => {
  const panjang = props.text!.length;
  const rows = [];
  for (let i = 0; i < panjang; i++) {
    rows.push(
      <div>
        <p className="indent-8">{props.text![i]}</p>
        <br />
      </div>
    );
  }
  return (
    <div className="lg:mx-36 xl:mx-80 pt-2 lg:pt-4 mx-4 my-8 border lg:border-2 border-black bg-white rounded-xl bg-opacity-70">
      <div
        data-aos="zoom-in"
        // data-aos-once="true"
        className=" py-2 lg:py-4 px-4 lg:px-10 text-justify "
      >
        {/* {props.text} */}
        {rows}
        {/* bikin if else jika img ada atau tidak ada */}

        {props.img ? (
          <div className="flex justify-center pb-4">
            <Image src={props.img} alt={props.alt} width={600} height={90} />
          </div>
        ) : null}

        {/* <Image src={props.img} alt={props.alt} width={700} height={90} /> */}
      </div>
    </div>
  );
};

export default Content;
