import Image from "next/image";
import Link from "next/link";

import { categories } from "@/static-data/Arrays";
import React from "react";

const Bookmarks = () => {
  return (
    <>
      <section className="h-full p-5 md:pt-24 md:px-8">
        <div className="h-full grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 md:gap-8 gap-14">
          {categories.map((category) => {
            return (
              <div
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

                <div className="flex items-center w-full py-10 gap-4 dark:text-white">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full">
                    <Image
                      src={category.imgsrc}
                      width={40}
                      height={40}
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Category Image"
                      className="h-full"
                    />
                  </div>
                  <Link href="#" className="duration-300 hover:opacity-50">
                    <h5 className="text-3xl xs:text-2xl">{category.title}</h5>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Bookmarks;
