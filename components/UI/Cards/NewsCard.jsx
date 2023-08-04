import Image from "next/image";
import Link from "next/link";

import React from "react";

const NewsCard = ({ news }) => {
  return (
    <article
      key={news.id}
      className="w-full max-w-[420px] flex flex-col items-center justify-center mx-auto"
    >
      <div className="relative w-full overflow-hidden aspect-video rounded-xl">
        <Image
          src={news.imgsrc}
          fill
          sizes="(max-width: 1200px) 50vw, 33vw"
          quality={50}
          placeholder="blur"
          alt={news.title}
        />
      </div>

      <div className="flex items-center w-full py-10 dark:text-white">
        <Link href="#" className="transition-opacity hover:opacity-50">
          <h5 className="text-3xl xs:text-2xl">{news.title}</h5>
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
