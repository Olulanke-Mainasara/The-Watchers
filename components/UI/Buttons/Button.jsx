import Link from "next/link";

import React from "react";

function Button({
  href,
  title,
  children,
  customStyles,
  type,
  isLink,
  linkStyles,
}) {
  return (
    <button
      className={`${
        type === "Section"
          ? "text-white duration-300 bg-black border border-black dark:border-white hover:bg-transparent hover:text-black dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white w-fit px-6 py-3 mx-auto text-lg md:mx-0 rounded-3xl"
          : type === "Main"
          ? "text-white duration-300 bg-black border border-black dark:border-white hover:bg-transparent hover:text-black dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white w-fit px-10 py-3 md:py-4 rounded-full text-xl 2xl:text-2xl"
          : type === "Card"
          ? "xl:px-4 w-full mx-auto py-3 md:text-xl xl:text-white xl:bg-transparent bg-white text-black rounded-2xl px-5 text-lg xs:text-base max-w-[390px] hover:text-black hover:bg-white transition-colors duration-500"
          : customStyles
      }`}
      title={title}
    >
      {isLink ? (
        <Link
          href={href}
          className={`w-full h-full ${
            type === "Card"
              ? "flex items-center justify-center gap-1"
              : linkStyles
          }`}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
