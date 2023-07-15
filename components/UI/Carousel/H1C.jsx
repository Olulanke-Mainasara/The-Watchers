import React from "react";

function H1C({ children, id }) {
  return (
    <h3
      className="dark:text-white xl:text-8xl md:text-7xl text-5xl xs:text-3xl scroll-mt-[10vh]"
      id={id}
    >
      {children}
    </h3>
  );
}

export default H1C;
