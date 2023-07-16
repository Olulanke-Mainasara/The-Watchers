import React from "react";

function H1({ children }) {
  return (
    <h2 className="xl:text-5xl 2xl:text-6xl md:text-3xl text-[2.5rem] xs:text-3xl">
      {children}
    </h2>
  );
}

export default H1;
