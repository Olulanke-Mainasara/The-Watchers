import Image from "next/image";
import Link from "next/link";

import React from "react";

const NewsCard = ({ category }) => {
  return (
    <article
      key={category.id}
      className="w-full max-w-[420px] flex flex-col items-center justify-center mx-auto"
    >
      <div className="relative w-full overflow-hidden aspect-video rounded-xl">
        <Image
          src={category.imgsrc}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          alt={category.title}
        />
      </div>

      <div className="flex items-center w-full py-10 dark:text-white">
        <Link href="#" className="transition-opacity hover:opacity-50">
          <h5 className="text-3xl xs:text-2xl">{category.title}</h5>
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
