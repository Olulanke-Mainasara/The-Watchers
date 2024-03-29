import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

import desktopD from "../../../public/Hero/desktopD.png";
import desktopL from "../../../public/Hero/desktopL.png";
import mobileD from "../../../public/Hero/mobileD.png";
import mobileL from "../../../public/Hero/mobileL.png";
import { useTheme } from "next-themes";
import Button from "@/components/UI/Buttons/Button";

function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          <Button
            isLink={true}
            href={"/articles"}
            title={"View articles"}
            type={"Main"}
          >
            Start reading
          </Button>
          <Button
            isLink={true}
            href={"#featuredCarousel"}
            title={"View featured articles"}
            customStyles={"text-xl w-fit px-7 dark:text-white"}
            linkStyles={"flex items-center justify-center gap-2 "}
          >
            Today&apos;s articles <FaChevronRight />
          </Button>
        </div>
      </section>

      <div className="relative w-[85%] mx-auto overflow-hidden rounded-[55px] shadow-black dark:shadow-slate-800 shadow-2xl md:hidden">
        {mounted && (
          <Image
            src={theme === "dark" ? mobileD : mobileL}
            sizes="(min-width: 0px) 50vw"
            priority
            placeholder="blur"
            alt={"Hero Image"}
          />
        )}
      </div>

      <div className="relative w-[85%] md:block max-w-[1200px] 2xl:max-w-[1678px] xl:h-[90vh] xl:max-h-[700px] 2xl:max-h-[930px] aspect-video mx-auto overflow-hidden hidden border border-black dark:border-white rounded-xl shadow-black dark:shadow-slate-800 shadow-2xl">
        {mounted && (
          <Image
            src={theme === "dark" ? desktopD : desktopL}
            fill
            priority
            sizes="(min-width: 768px) 50vw"
            placeholder="blur"
            alt={"Hero Image"}
          />
        )}
      </div>
    </section>
  );
}

export default Hero;
