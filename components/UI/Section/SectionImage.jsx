import Image from "next/image";
import React from "react";

function SImage({ image, alt }) {
  return (
    <section className="md:w-1/2 md:h-full flex items-center justify-center w-screen h-[440px]">
      <div className="relative xl:w-3/5 lg:max-w-[430px] xl:h-3/4 md:h-[555px] h-full w-3/4 max-w-[310px] shadow-black dark:shadow-slate-800 shadow-2xl rounded-2xl border overflow-hidden">
        <Image
          src={image}
          fill
          sizes="(min-width: 0px) 33vw"
          quality={50}
          placeholder="blur"
          className="absolute top-0 left-0"
          alt={alt}
        />
      </div>
    </section>
  );
}

export default SImage;
