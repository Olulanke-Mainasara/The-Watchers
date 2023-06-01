import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaChevronRight } from "react-icons/fa";

function Hero() {
  return (
    <header
      id="hero"
      className="flex flex-col h-auto items-center pt-32 pb-56  allLM:pt-[4vh] allEMT:py-0"
    >
      <div className="w-full max-w-[1920px] mx-auto h-full py-28 allLM:pb-16 allEMT:pb-10 justify-center flex flex-col gap-9 text-center">
        <h1 className="dark:text-white text-[115px] 2xl:text-[140px] laptop:leading-[1.1] lg:leading-[1.1] md:text-8xl allEM:text-7xl allT:text-6xl">
          All Things Curious
        </h1>
        <p className="dark:text-white dark:opacity-70 mx-auto text-2xl 2xl:text-3xl md:text-xl allEMT:text-base 2xl:max-w-[900px] laptop:max-w-[700px] lg:max-w-[700px] md:max-w-[600px] allEMT:w-[75%] allEMT:max-w-[500px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>

        <div className="flex justify-center mt-4 allEMT:mt-0 allEMT:flex-col allEMT:items-center allEMT:gap-5">
          <Link
            href="/categories"
            title="Categories"
            className="px-10 py-4 text-xl text-white transition-colors duration-300 bg-black border border-black rounded-full w-fit dark:bg-white 2xl:text-2xl allEMT:py-3 dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
          >
            Start reading
          </Link>
          <a
            href="#news"
            className="flex items-center justify-center gap-2 py-3 text-xl w-fit px-7 dark:text-white"
            title="Today's Articles"
          >
            Today&apos;s articles <FaChevronRight />
          </a>
        </div>
      </div>

      <div className="relative w-[85%] h-[90vh] max-w-[350px] min-h-[660px] max-h-[700px] allT:max-h-[500px] mx-auto border border-gray-500 rounded-xl overflow-hidden allLM:hidden laptop:hidden">
        <Image
          src={"/Hero/headerM.jpg"}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
          alt={"Hero Image"}
        />
      </div>

      <div className="relative w-[85%] max-w-[1200px] h-[90vh] min-h-[458px] max-h-[755px] allLM:h-[45vh] allEMT:max-h-[720px] mx-auto border border-gray-500 rounded-xl overflow-hidden allEMT:hidden">
        <Image src={"/Hero/Header.jpeg"} fill priority alt={"Hero Image"} />
      </div>
    </header>
  );
}

export default Hero;
