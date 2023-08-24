import React from "react";

type Props = {
  titleParallax?: string;
  color?: string;
};

const titleParallax = ({ titleParallax, color }: Props) => {
  return (
    <div>
      <div
        className={`text-${color} text-center py-4 text-4xl md:text-5xl lg:text-6xl `}
      >
        {titleParallax}
      </div>
    </div>
  );
};

export default titleParallax;
