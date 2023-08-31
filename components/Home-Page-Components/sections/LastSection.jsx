import Button from "@/components/UI/Buttons/Button";
import React from "react";

function LastSection() {
  return (
    <section className="flex xl:h-screen max-w-[1920px] mx-auto justify-center items-center xl:py-28 pt-0 h-auto">
      <div className="border border-black dark:border-white shadow-black dark:shadow-slate-800 shadow-2xl rounded-2xl xl:w-4/5 w-[90%] h-full xl:py-28 md:py-18 py-10 justify-center flex flex-col gap-9 items-center text-center">
        <p className="dark:text-white xl:text-8xl 2xl:text-[140px] xl:leading-[1.1] md:text-[80px] text-7xl xs:text-5xl">
          Develop your mind
        </p>

        <p className="dark:text-white dark:opacity-70 mx-auto xl:text-2xl 2xl:text-3xl md:text-lg xs:text-sm 2xl:max-w-[900px] xl:max-w-[700px] lg:max-w-[700px] md:max-w-[550px] max-w-[300px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>

        <Button
          isLink={true}
          href={"/articles"}
          title={"View articles"}
          type={"Main"}
        >
          Start reading
        </Button>
      </div>
    </section>
  );
}

export default LastSection;
