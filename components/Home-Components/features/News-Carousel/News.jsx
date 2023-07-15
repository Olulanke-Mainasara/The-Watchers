import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";

import { news } from "../../../../static-data/Arrays";
import CardButton from "../../../UI/Carousel/CardButton";

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
            <div className="w-[90%] md:max-w-[1920px] max-w-[420px] h-full overflow-hidden rounded-2xl mx-auto bg-black dark:bg-slate-800 flex items-center justify-center xl:flex-row flex-col">
              <div className="relative w-full h-full xl:basis-3/4 md:basis-1/2 basis-2/5">
                <Image
                  src={newsItem.imgsrc}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  alt={newsItem.text}
                />
              </div>

              <div className="flex flex-col px-6 text-white lg:justify-center xl:gap-6 dark:text-white xl:basis-2/5 md:basis-1/2 basis-3/5 justify-evenly md:gap-0">
                <h5 className="text-xl text-center xs:text-lg">
                  {newsItem.sn}
                </h5>
                <p className="md:text-5xl text-center md:leading-[60px] xl:text-5xl xl:leading-[60px] lg:text-3xl text-3xl leading-[45px] xs:text-2xl">
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
