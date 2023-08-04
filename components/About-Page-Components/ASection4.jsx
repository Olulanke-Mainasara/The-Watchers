import Image from "next/image";

import React from "react";

import ExplorationImg from "../../public/Categories/Exploration.webp";
import TextHeader from "../UI/Section/TextHeader";

const team = [
  {
    id: 1,
    imgsrc: ExplorationImg,
    name: "Mainasara Olulanke",
    position: "Founder / C.E.O",
  },
  {
    id: 2,
    imgsrc: ExplorationImg,
    name: "Bruce Wayne",
    position: "Co-Founder / C.T.O",
  },
  {
    id: 3,
    imgsrc: ExplorationImg,
    name: "Clark Kent",
    position: "Co-Founder / C.I.O",
  },
  {
    id: 4,
    imgsrc: ExplorationImg,
    name: "Tony Stark",
    position: "Co-Founder / C.F.O",
  },
];

function ASection4() {
  return (
    <section className="w-full dark:text-white max-w-[1920px] mx-auto pt-40 flex flex-col gap-14 items-center justify-center h-auto pb-28">
      <div className="flex flex-col text-center gap-6">
        <TextHeader>Meet the Pilots</TextHeader>
        <p className="mx-auto dark:opacity-70 xl:text-2xl 2xl:text-3xl md:text-xl 2xl:max-w-[900px] xl:max-w-[700px] lg:max-w-[700px] md:max-w-[600px] w-[75%] md:w-full max-w-[500px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>
      </div>

      <div className="w-full px-10 grid grid-cols-1 md:gap-10 xl:grid-cols-4 md:grid-cols-2 gap-14">
        {team.map((member) => {
          return (
            <div
              key={member.id}
              className="w-full max-w-[420px] flex flex-col items-center justify-center"
            >
              <div className="relative w-full overflow-hidden aspect-square rounded-xl">
                <Image
                  src={member.imgsrc}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  placeholder="blur"
                  alt="Our Executives"
                />
              </div>

              <div className="flex flex-col w-full pt-4 gap-1 dark:text-white">
                <h5 className="text-xl">{member.name}</h5>
                <p className="text-lg opacity-80 dark:opacity-70">
                  {member.position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ASection4;
