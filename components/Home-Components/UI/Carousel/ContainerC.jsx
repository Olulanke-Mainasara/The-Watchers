import React from "react";

function ContainerC({ children }) {
  return (
    <section className="w-full overflow-hidden flex flex-col gap-10 items-center justify-center text-center py-28 allIL:py-56">
      {children}
    </section>
  );
}

export default ContainerC;
