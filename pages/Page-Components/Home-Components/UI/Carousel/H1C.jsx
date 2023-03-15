import React from "react";

function H1C({ children, id }) {
  return (
    <h1
      className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl scroll-mt-11"
      id={id}
    >
      {children}
    </h1>
  );
}

export default H1C;
