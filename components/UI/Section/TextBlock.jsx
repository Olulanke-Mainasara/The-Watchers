import React from "react";

function Text({ children, position, height }) {
  return (
    <section
      className={`md:w-1/2 xl:h-full flex items-center ${position} ${height} justify-center w-screen h-2/5`}
    >
      <div className="w-4/5 md:h-[555px] xl:h-auto flex flex-col justify-center gap-7 dark:text-white">
        {children}
      </div>
    </section>
  );
}

export default Text;
