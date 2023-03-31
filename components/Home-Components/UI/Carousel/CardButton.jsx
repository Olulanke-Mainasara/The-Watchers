import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function CardButton({ text }) {
  return (
    <Link
      className="px-4 py-3 text-xl text-center text-white allIL:dark:bg-white allIL:dark:text-black rounded-2xl allIL:px-5 allEM:text-lg allT:text-base hover:text-black hover:bg-white transition-colors duration-500"
      href="#"
    >
      {text} <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
}

export default CardButton;
