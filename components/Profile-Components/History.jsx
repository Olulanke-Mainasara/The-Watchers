import Image from "next/image";
import Link from "next/link";

import { categories } from "@/data/Arrays";
import React from "react";

const History = () => {
  return (
    <>
      <section className="h-full pt-24 pr-8 allEMT:p-5">
        <div className="grid h-full grid-cols-3 allLM:grid-cols-2 allEMT:grid-cols-1 allLM:gap-8 gap-14">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="w-full allEMT:max-w-[420px] flex flex-col items-center justify-center mx-auto"
              >
                <div className="relative w-full overflow-hidden aspect-video rounded-xl">
                  <Image
                    src={category.imgsrc}
                    fill
                    placeholder="blur"
                    alt={category.title}
                  />
                </div>

                <div className="flex items-center w-full gap-4 py-10 dark:text-white">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full">
                    <Image
                      src={category.imgsrc}
                      fill
                      placeholder="blur"
                      alt="Category Image"
                    />
                  </div>
                  <Link href="#" className="duration-300 hover:opacity-50">
                    <h5 className="text-3xl allT:text-2xl">{category.title}</h5>
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

export default History;
