import Image from "next/image";
import Link from "next/link";

import React from "react";
import { FaChevronRight } from "react-icons/fa";

import desktopD from "../../../public/Hero/desktopD.png";
import desktopL from "../../../public/Hero/desktopL.png";
import mobileD from "../../../public/Hero/mobileD.png";
import mobileL from "../../../public/Hero/mobileL.png";
import { useTheme } from "next-themes";

function Hero() {
  const { theme } = useTheme();
  
  return (
    <section
      id="hero"
      className="flex flex-col h-auto items-center xl:pt-8 md:pb-36 md:pt-[4vh] py-0"
    >
      <section className="w-full max-w-[1920px] mx-auto h-full pt-28 xl:pb-28 md:pb-16 pb-10 justify-center flex flex-col gap-6 text-center">
        <h1 className="dark:text-white xl:text-[115px] 2xl:text-[140px] xl:leading-[1.1] lg:leading-[1.1] md:text-[90px] text-7xl xs:text-6xl">
          All Things Curious
        </h1>

        <p className="dark:text-white dark:opacity-70 mx-auto xl:text-2xl 2xl:text-3xl md:w-full md:text-xl 2xl:max-w-[900px] xl:max-w-[700px] lg:max-w-[700px] md:max-w-[600px] w-[75%] max-w-[500px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>

        <div className="flex flex-col items-center justify-center gap-5 mt-0 md:mt-4 xl:mt-0 md:flex-row md:gap-0">
          <Link
            href="/categories"
            title="Categories"
            className="px-10 py-3 text-xl text-white transition-colors duration-300 bg-black border border-black rounded-full md:py-4 w-fit dark:bg-white 2xl:text-2xl dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
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
      </section>

      <div className="relative w-[85%] mx-auto overflow-hidden md:hidden">
        <Image
          src={theme === "dark" ? mobileD : mobileL}
          sizes="(min-width: 0px) 50vw"
          priority
          placeholder="blur"
          alt={"Hero Image"}
        />
      </div>

      <div className="relative w-[85%] md:block max-w-[1200px] xl:h-[90vh] min-h-[458px] md:max-h-[755px] md:h-[45vh] max-h-[720px] mx-auto overflow-hidden hidden border border-gray-500 rounded-xl">
        <Image
          src={theme === "dark" ? desktopD : desktopL}
          fill
          priority
          sizes="(min-width: 768px) 90vw"
          placeholder="blur"
          alt={"Hero Image"}
        />
      </div>
    </section>
  );
}

export default Hero;
