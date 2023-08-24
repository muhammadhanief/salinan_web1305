import { constants } from "fs/promises";
import React from "react";

type Props = {
  text?: string;
};

const Content = ({ text }: Props) => {
  return (
    <div className="lg:mx-48 mx-4 my-8 border-2 border-black bg-white rounded-xl bg-opacity-80">
      <div className="py-2 lg:py-4 px-4 lg:px-16 text-justify ">{text}</div>
    </div>
  );
};

export default Content;
