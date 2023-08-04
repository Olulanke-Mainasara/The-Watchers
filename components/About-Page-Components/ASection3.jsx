import React from "react";
import { FaClock } from "react-icons/fa";

import TextHeader from "../UI/Section/TextHeader";

const offers = [
  {
    id: 1,
    title: "Relevant Information",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
  {
    id: 2,
    title: "No Stale Treasures",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
  {
    id: 3,
    title: "24 / 7 Curiosity Scratching",
    desc: "Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond.",
  },
];

function ASection3() {
  return (
    <section className="w-full dark:text-white max-w-[1920px] mx-auto xl:pt-32 flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-6 text-center">
        <TextHeader>Our &quot;Watcher&quot; Way</TextHeader>
        <p className="mx-auto dark:opacity-70 xl:text-2xl 2xl:text-3xl md:text-xl 2xl:max-w-[900px] xl:max-w-[700px] lg:max-w-[700px] md:max-w-[600px] w-[75%] md:w-full max-w-[500px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 px-10 xl:gap-20 xl:grid-cols-3 md:grid-cols-2 gap-14">
        {offers.map((offer) => {
          return (
            <div key={offer.id} className="w-full mx-auto space-y-6">
              <FaClock className="text-2xl" />
              <h1 className="text-2xl">{offer.title}</h1>
              <p className="dark:opacity-70 2xl:text-2xl">{offer.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ASection3;
