import React from "react";

function ContainerC({ children }) {
  return (
    <section className="flex flex-col items-center justify-center w-full overflow-hidden gap-10 py-28 allIL:py-56">
      {children}
    </section>
  );
}

export default ContainerC;
