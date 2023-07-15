import Link from "next/link";

import React from "react";
import { FaChevronRight } from "react-icons/fa";

function CardButton({ text }) {
  return (
    <Link
      className="flex items-center justify-center gap-1 xl:px-4 w-full mx-auto py-3 md:text-xl text-center xl:text-white xl:bg-transparent bg-white text-black rounded-2xl px-5 text-lg xs:text-base max-w-[390px] hover:text-black hover:bg-white transition-colors duration-500"
      href="#"
    >
      {text} <FaChevronRight />
    </Link>
  );
}

export default CardButton;
