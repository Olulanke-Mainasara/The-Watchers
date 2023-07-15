import React from "react";

function ContainerC({ children }) {
  return (
    <section className="flex flex-col items-center justify-center w-full py-56 overflow-hidden gap-10 xl:py-28">
      {children}
    </section>
  );
}

export default ContainerC;
