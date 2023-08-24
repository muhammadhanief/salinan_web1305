import React from "react";
import Image from "next/image";

type Props = {
  width?: number;
  height?: number;
};

const Logo = ({ width, height }: Props) => {
  return (
    <div>
      <Image
        src={"/assets/img/logo.png"}
        alt="Logo BPS"
        width={width}
        height={height}
      />
      <h1></h1>
    </div>
  );
};

export default Logo;
