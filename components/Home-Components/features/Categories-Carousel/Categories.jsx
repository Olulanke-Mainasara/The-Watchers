import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "../../../../data/Arrays";
import CardButton from "../../UI/CardButton";

function Categories({ controls }) {
  return (
    <div className="h-full flex gap-[60px] pl-[60px] allEMT:pl-0 allEMT:gap-0">
      {categories.map((categoriesItem) => {
        return (
          <motion.div
            className={`w-[400px] allEMT:w-screen h-full`}
            animate={controls}
            key={categoriesItem.id}
          >
            <div className="w-full allEMT:w-[90%] allEMT:max-w-[420px] allEMT:mx-auto h-full rounded-2xl bg-black dark:bg-slate-800 flex flex-col overflow-hidden">
              <div className="relative basis-[40%] w-full h-full">
                <Image
                  src={categoriesItem.imgsrc}
                  fill
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  alt="Category Image"
                />
              </div>

              <div className="dark:text-white text-white flex flex-col justify-evenly basis-[60%] px-[5%]">
                <h5 className="text-3xl text-center allT:text-2xl">
                  {categoriesItem.title}
                </h5>
                <p className="text-base opacity-70 allT:text-xs">
                  {categoriesItem.text}
                </p>
                <CardButton text={"View"} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Categories;
