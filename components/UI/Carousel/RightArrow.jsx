import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function RightArrow({ onclick }) {
  return (
    <button
      title="Next item"
      className="absolute right-0 z-10 flex items-center justify-center w-6 text-xl bg-white rounded-full rounded-tr-none rounded-br-none shadow-none transition-colors duration-300 -translate-y-1/2 xl:rounded-r-full xl:h-12 md:w-12 h-14 top-1/2 xl:right-2 xs:w-4 dark:text-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
      onClick={onclick}
    >
      <FaChevronRight />
    </button>
  );
}
