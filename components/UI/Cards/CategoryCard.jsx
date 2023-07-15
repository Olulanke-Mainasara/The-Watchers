import Image from "next/image";

import React from "react";

import CardButton from "../Carousel/CardButton";

const CategoryCard = ({ category }) => {
  return (
    <article
      key={category.id}
      className="w-full max-w-[420px] h-[550px] xs:h-[420px] mx-auto rounded-2xl bg-black dark:bg-slate-800 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative basis-[40%] lg:basis-[45%] w-full h-full">
        <Image
          src={category.imgsrc}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          alt={category.title}
        />
      </div>

      <div className="dark:text-white text-white flex flex-col justify-evenly basis-[60%] lg:basis-[55%] px-[5%]">
        <h5 className="text-3xl text-center xs:text-2xl">{category.title}</h5>
        <p className="opacity-70 xs:text-xs">{category.text}</p>
        <CardButton text={"View"} />
      </div>
    </article>
  );
};

export default CategoryCard;
