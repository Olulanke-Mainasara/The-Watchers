import React from "react";

function ContainerC({ children }) {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-10 py-56 overflow-hidden xl:py-28">
      {children}
    </section>
  );
}

export default ContainerC;
