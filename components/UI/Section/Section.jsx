import Image from "next/image";

import React from "react";

function Section({ children }) {
  return (
    <section className="w-full max-w-[1920px] mx-auto xl:h-screen xl:max-h-[900px] flex md:flex-row md:gap-0 flex-col gap-14 h-auto xl:pb-0 pb-56">
      {children}
    </section>
  );
}

export default Section;
