import Head from "next/head";
import Image from "next/image";

import CardButton from "@/components/Home-Components/UI/Carousel/CardButton";
import Footer from "@/components/Home-Components/sections/Footer";
import Nav from "@/components/Nav";
import Search from "@/components/Search/Search";
import { categories } from "@/data/Arrays";
import React from "react";

function Categories() {
  return (
    <>
      <Head>
        <title>Categories - The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-screen">
        <Search />
        <Nav />
        <header className="flex items-center justify-center w-full pt-32 pb-16 dark:text-white">
          <h1 className="text-9xl allLM:text-8xl allEM:text-6xl allT:text-5xl">
            Categories
          </h1>
        </header>

        <section className="h-full pt-10 pb-14 px-14 allM:px-5">
          <div className="grid h-full grid-cols-3 allLM:grid-cols-2 allEMT:grid-cols-1 md:gap-8 gap-14">
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="w-full allEMT:max-w-[420px] h-[550px] allT:h-[420px] mx-auto rounded-2xl bg-black dark:bg-slate-800 flex flex-col items-center justify-center overflow-hidden duration-500"
                >
                  <div className="relative basis-[40%] lg:basis-[45%] w-full h-full">
                    <Image
                      src={category.imgsrc}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                      alt="Category Image"
                    />
                  </div>

                  <div className="dark:text-white text-white flex flex-col justify-evenly basis-[60%] lg:basis-[55%] px-[5%] duration-500">
                    <h5 className="text-3xl text-center allT:text-2xl">
                      {category.title}
                    </h5>
                    <p className="text-base opacity-70 allT:text-xs">
                      {category.text}
                    </p>
                    <CardButton text={"View"} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Categories;
