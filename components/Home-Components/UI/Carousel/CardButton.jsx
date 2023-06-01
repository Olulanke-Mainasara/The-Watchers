import Link from "next/link";

import React from "react";
import { FaChevronRight } from "react-icons/fa";

function CardButton({ text }) {
  return (
    <Link
      className="flex items-center justify-center gap-1 px-4 w-full mx-auto py-3 text-xl text-center text-white allIL:bg-white allIL:text-black rounded-2xl allIL:px-5 allEM:text-lg allT:text-base max-w-[390px] hover:text-black hover:bg-white transition-colors duration-500"
      href="#"
    >
      {text} <FaChevronRight />
    </Link>
  );
}

export default CardButton;
