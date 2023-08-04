import Image from "next/image";
import React from "react";
import CardButton from "./CardButton";

const FeatureCard = ({ feature }) => {
  return (
    <div className={`w-screen h-full`} key={feature.id}>
      <div className="w-[90%] md:max-w-[1920px] max-w-[420px] h-full overflow-hidden rounded-2xl mx-auto bg-black dark:bg-slate-800 flex items-center justify-center lg:flex-row flex-col">
        <div className="relative w-full h-full lg:basis-3/4 md:basis-1/2 basis-2/5">
          <Image
            src={feature.imgsrc}
            fill
            sizes="(max-width: 1200px) 50vw, 33vw"
            quality={50}
            placeholder="blur"
            alt={feature.text}
          />
        </div>

        <div className="flex flex-col px-6 text-white lg:justify-center lg:gap-6 dark:text-white lg:basis-2/5 md:basis-1/2 basis-3/5 justify-evenly md:gap-0">
          <p className="text-xl text-center xs:text-lg">{feature.sn}</p>
          <h3 className="md:text-5xl text-center md:leading-[60px] xl:text-5xl xl:leading-[60px] lg:text-3xl text-3xl leading-[45px] xs:text-2xl">
            {feature.text}
          </h3>
          <CardButton text={"Read more"} />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
