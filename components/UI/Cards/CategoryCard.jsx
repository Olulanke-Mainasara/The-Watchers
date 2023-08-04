import Image from "next/image";

import React from "react";

import CardButton from "./CardButton";
import { useRouter } from "next/router";

const CategoryCard = ({ category }) => {
  const router = useRouter();
  return (
    <article
      key={category.id}
      className={`w-screen max-w-[400px] ${
        router.pathname === "/categories" ? "md:max-w-full" : ""
      } h-[550px] xs:h-[420px] lg:min-w-[400px]`}
    >
      <div className="flex flex-col items-center justify-center h-full w-[90%] md:w-full mx-auto bg-black dark:bg-slate-800 overflow-hidden rounded-2xl">
        <div className="relative basis-[40%] lg:basis-[45%] w-full h-full">
          <Image
            src={category.imgsrc}
            fill
            sizes="(max-width: 1200px) 50vw, 33vw"
            quality={50}
            placeholder="blur"
            alt={category.title}
          />
        </div>

        <div className="dark:text-white text-white flex flex-col justify-evenly basis-[60%] lg:basis-[55%] px-[5%]">
          <p className="text-3xl text-center xs:text-2xl">{category.title}</p>
          <p className="opacity-70 xs:text-xs">{category.text}</p>
          <CardButton text={"View"} />
        </div>
      </div>
    </article>
  );
};

export default CategoryCard;
