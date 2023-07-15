import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";

import { categories } from "../../../../static-data/Arrays";
import CardButton from "../../../UI/Carousel/CardButton";

function Categories({ controls }) {
  return (
    <section className="h-full flex md:gap-[60px] md:pl-[60px] pl-0 gap-0">
      {categories.map((categoriesItem) => {
        return (
          <motion.div
            className={`md:w-[400px] w-screen h-full`}
            animate={controls}
            key={categoriesItem.id}
          >
            <div className="md:w-full w-[90%] max-w-[420px] mx-auto h-full rounded-2xl bg-black dark:bg-slate-800 flex flex-col overflow-hidden">
              <div className="relative basis-[40%] w-full h-full">
                <Image
                  src={categoriesItem.imgsrc}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  alt={categoriesItem.title}
                />
              </div>

              <div className="text-white flex flex-col justify-evenly basis-[60%] px-[5%]">
                <h5 className="text-3xl text-center xs:text-2xl">
                  {categoriesItem.title}
                </h5>
                <p className="opacity-70 xs:text-xs">{categoriesItem.text}</p>
                <CardButton text={"View"} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

export default Categories;
