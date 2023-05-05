import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function LeftArrow({ onclick }) {
  return (
    <button
      title="Previous item"
      className="absolute z-10 flex items-center justify-center w-12 h-12 text-xl transition-colors duration-300 -translate-y-1/2 bg-white rounded-full allIL:h-14 top-1/2 left-2 allIL:left-0 allEM:w-6 allT:w-4 allIL:rounded-tl-none allIL:rounded-bl-none dark:text-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black allIL:hover:text-black allIL:dark:hover:text-white allIL:hover:bg-white allIL:dark:hover:bg-black allEMT:shadow-none"
      onClick={onclick}
      href="#"
    >
      <FaChevronLeft />
    </button>
  );
}
