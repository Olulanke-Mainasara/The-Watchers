import Image from "next/image";

import React from "react";

import H1 from "../Home-Components/UI/Section/H1";

const team = [
  {
    id: 1,
    imgsrc: "/Categories/Exploration.webp",
    name: "Mainasara Olulanke",
    position: "Founder / C.E.O",
  },
  {
    id: 2,
    imgsrc: "/Categories/Exploration.webp",
    name: "Bruce Wayne",
    position: "Co-Founder / C.T.O",
  },
  {
    id: 3,
    imgsrc: "/Categories/Exploration.webp",
    name: "Clark Kent",
    position: "Co-Founder / C.I.O",
  },
  {
    id: 4,
    imgsrc: "/Categories/Exploration.webp",
    name: "Tony Stark",
    position: "Co-Founder / C.F.O",
  },
];

function ASection4() {
  return (
    <section className="w-full dark:text-white max-w-[1920px] mx-auto pt-40 flex flex-col gap-14 items-center justify-center allIL:h-auto pb-28">
      <div className="flex flex-col gap-6 text-center">
        <H1>Meet the Pilots</H1>
        <p className="mx-auto dark:opacity-70 text-2xl 2xl:text-3xl md:text-xl allEMT:text-base 2xl:max-w-[900px] laptop:max-w-[700px] lg:max-w-[700px] md:max-w-[600px] allEMT:w-[75%] allEMT:max-w-[500px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>
      </div>

      <div className="grid w-full grid-cols-4 gap-10 px-10 md:grid-cols-2 allEMT:grid-cols-1 allEMT:gap-14">
        {team.map((member) => {
          return (
            <div
              key={member.id}
              className="w-full allEMT:max-w-[420px] flex flex-col items-center justify-center duration-500"
            >
              <div className="relative w-full overflow-hidden aspect-square rounded-xl">
                <Image
                  src={member.imgsrc}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                  alt="Category Image"
                />
              </div>

              <div className="flex flex-col w-full gap-1 pt-4 duration-500 dark:text-white">
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
