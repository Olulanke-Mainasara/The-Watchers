import React from "react";
import H1 from "../Home-Components/UI/Section/H1";
import Image from "next/image";

const team = [
  {
    id: 1,
    imgsrc: "/Exploration.webp",
    name: "Mainasara Olulanke",
    position: "Founder/CEO",
  },
  {
    id: 2,
    imgsrc: "/Exploration.webp",
    name: "Mainasara Olulanke",
    position: "Founder/CEO",
  },
  {
    id: 3,
    imgsrc: "/Exploration.webp",
    name: "Mainasara Olulanke",
    position: "Founder/CEO",
  },
  {
    id: 4,
    imgsrc: "/Exploration.webp",
    name: "Mainasara Olulanke",
    position: "Founder/CEO",
  },
];

function ASection4() {
  return (
    <section className="w-full dark:text-white max-w-[1920px] mx-auto h-screen laptop:max-h-[900px] flex flex-col gap-14 items-center justify-center allIL:h-auto allIL:pb-28">
      <div className="flex flex-col text-center gap-6">
        <H1>Meet the Team</H1>
        <p className="mx-auto opacity-70 text-2xl 2xl:text-3xl md:text-xl allEMT:text-base 2xl:max-w-[900px] laptop:max-w-[700px] lg:max-w-[700px] md:max-w-[600px] allEMT:w-[75%] allEMT:max-w-[500px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>
      </div>

      <div className="w-full grid grid-cols-4 md:grid-cols-2 allEMT:grid-cols-1 px-10 gap-10 allEMT:gap-14">
        {team.map((member) => {
          return (
            <div
              key={member.id}
              className="w-full allEMT:max-w-[420px] flex flex-col items-center justify-center duration-500"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
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

              <div className="w-full dark:text-white flex flex-col gap-1 pt-4 duration-500">
                <h5 className="text-xl">{member.name}</h5>
                <p className="text-lg opacity-70">{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ASection4;
