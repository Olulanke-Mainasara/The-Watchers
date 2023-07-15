import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function LeftArrow({ onclick }) {
  return (
    <button
      title="Previous item"
      className="absolute left-0 z-10 flex items-center justify-center w-6 text-xl bg-white rounded-full rounded-tl-none rounded-bl-none transition-colors duration-300 -translate-y-1/2 xl:rounded-l-full md:w-12 xl:h-12 h-14 top-1/2 xl:left-2 xs:w-4 dark:text-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black "
      onClick={onclick}
    >
      <FaChevronLeft />
    </button>
  );
}
