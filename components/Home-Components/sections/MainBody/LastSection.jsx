import React from "react";
import Link from "next/link";

function LastSection() {
  return (
    <header className="flex h-screen max-w-[1920px] mx-auto justify-center items-center py-28 allIL:pt-0 allIL:h-auto">
      <div className="border border-black dark:border-white rounded-2xl w-4/5 allIL:w-[90%] h-full py-28 allLM:py-18 allEMT:py-10 justify-center flex flex-col gap-9 text-center">
        <h1 className="dark:text-white text-8xl 2xl:text-[140px] laptop:leading-[1.1] md:text-[85px] allEM:text-7xl allT:text-5xl">
          All Things Curious
        </h1>

        <p className="dark:text-white mx-auto text-2xl dark:opacity-70 2xl:text-3xl md:text-xl allEM:text-base allT:text-sm 2xl:max-w-[900px] laptop:max-w-[700px] lg:max-w-[700px] md:max-w-[600px] allEMT:max-w-[300px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>

        <div className="mt-4 allEMT:mt-0 allEMT:flex allEMT:flex-col allEMT:items-center allEMT:gap-5">
          <Link
            href="/categories"
            title="Categories"
            className="rounded-full w-fit border border-black bg-black dark:bg-white px-10 py-4 2xl:text-2xl allEMT:py-3 text-white dark:text-black text-xl transition-colors duration-300 dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
          >
            Start reading
          </Link>
        </div>
      </div>
    </header>
  );
}

export default LastSection;
