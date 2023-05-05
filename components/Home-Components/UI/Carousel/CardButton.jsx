import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

function CardButton({ text }) {
  return (
    <Link
      className="flex items-center justify-center gap-1 px-4 w-full mx-auto py-3 text-xl text-center text-white allIL:dark:bg-white allIL:dark:text-black rounded-2xl allIL:px-5 allEM:text-lg allT:text-base max-w-[325px] hover:text-black hover:bg-white transition-colors duration-500"
      href="#"
    >
      {text} <FaChevronRight />
    </Link>
  );
}

export default CardButton;
