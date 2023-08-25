import React from "react";

const titleParallax = (props: any) => {
  const { titleParallax, color } = props;
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
