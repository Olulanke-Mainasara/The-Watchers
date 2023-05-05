import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function RightArrow({ onclick }) {
  return (
    <button
      title="Next item"
      className="absolute z-10 flex items-center justify-center w-12 h-12 text-xl transition-colors duration-300 -translate-y-1/2 bg-white rounded-full allIL:h-14 top-1/2 right-2 allIL:right-0 allEM:w-6 allT:w-4 allIL:rounded-tr-none allIL:rounded-br-none dark:text-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black allEMT:shadow-none"
      onClick={onclick}
      href="#"
    >
      <FaChevronRight />
    </button>
  );
}
