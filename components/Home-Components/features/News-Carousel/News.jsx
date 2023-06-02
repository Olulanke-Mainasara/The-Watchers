import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";

import { news } from "../../../../data/Arrays";
import CardButton from "../../UI/Carousel/CardButton";

function News({ controls }) {
  return (
    <div className="flex h-full">
      {news.map((newsItem) => {
        return (
          <motion.div
            className={`w-screen h-full`}
            animate={controls}
            key={newsItem.id}
          >
            <div className="w-[90%] max-w-[1920px] allEMT:max-w-[420px] h-full overflow-hidden rounded-2xl mx-auto bg-black dark:bg-slate-800 flex items-center justify-center allM:flex-col">
              <div className="relative w-full h-full basis-3/4 md:basis-1/2 allEMT:basis-2/5">
                <Image
                  src={newsItem.imgsrc}
                  fill
                  placeholder="blur"
                  alt={newsItem.text}
                />
              </div>

              <div className="flex flex-col justify-center gap-6 px-6 text-white dark:text-white basis-2/5 md:basis-1/2 allEMT:basis-3/5 allM:justify-evenly allM:gap-0">
                <h5 className="text-xl text-center allT:text-lg">
                  {newsItem.sn}
                </h5>
                <p className="text-5xl text-center leading-[60px] lg:text-3xl allEM:text-3xl allEM:leading-[45px] allT:text-2xl">
                  {newsItem.text}
                </p>
                <CardButton text={"Read more"} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default News;
