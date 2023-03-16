import React from "react";

function ContainerC({ children }) {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col gap-10 items-center justify-center text-center allIL:h-auto allLM:my-64 allEMT:py-56">
      {children}
    </section>
  );
}

export default ContainerC;
