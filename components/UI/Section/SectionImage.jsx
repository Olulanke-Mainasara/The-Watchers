import React from "react";

function SImage({ children }) {
  return (
    <section className="md:w-1/2 md:h-full flex items-center justify-center w-screen h-[440px]">
      <div className="relative xl:w-3/5 lg:max-w-[430px] xl:h-3/4 md:h-[555px] h-full w-3/4 max-w-[310px]">
        {children}
      </div>
    </section>
  );
}

export default SImage;
