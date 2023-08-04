import Image from "next/image";
import Link from "next/link";

import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <article
      key={article.id}
      className="w-full max-w-[420px] flex flex-col items-center justify-center mx-auto"
    >
      <div className="relative w-full overflow-hidden aspect-video rounded-xl">
        <Image
          src={article.imgsrc}
          fill
          sizes="(max-width: 1200px) 50vw, 33vw"
          quality={50}
          placeholder="blur"
          alt={article.title}
        />
      </div>

      <div className="flex items-center w-full gap-4 py-10 dark:text-white">
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image
            src={article.imgsrc}
            width={40}
            height={40}
            className="h-full"
            alt={article.title}
          />
        </div>
        <Link href="#" className="transition-opacity hover:opacity-50">
          <h5 className="text-3xl xs:text-2xl">{article.title}</h5>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
