import React from "react";

import TextHeader from "../UI/Section/TextHeader";

const team = [
  {
    id: 1,
    name: "1M+",
    position: "Users",
  },
  {
    id: 2,
    name: "50K+",
    position: "Articles / Blogs",
  },
  {
    id: 3,
    name: "1.2K+",
    position: "Daily reads",
  },
  {
    id: 4,
    name: "5+",
    position: "Global awards",
  },
];

function ALastSection() {
  return (
    <section className="w-full dark:text-white max-w-[1920px] mx-auto h-auto flex flex-col gap-10 items-center justify-center pt-56">
      <div className="flex flex-col px-2 text-center gap-6">
        <TextHeader>We aspire to inspire, one mind at a time</TextHeader>
        <p className="mx-auto dark:opacity-70 xl:text-2xl 2xl:text-3xl md:text-xl 2xl:max-w-[900px] lg:max-w-[700px] md:max-w-[600px] w-[75%] md:w-full max-w-[500px]">
          The Watchers offers a seamless experience for exploring the world
          around us. Discover new knowledge and share your own ideas.
        </p>
      </div>

      <div className="w-full px-10 grid grid-cols-1 gap-10 xl:grid-cols-4 md:grid-cols-2">
        {team.map((member) => {
          return (
            <div
              key={member.id}
              className="w-full max-w-[420px] flex flex-col items-center justify-center duration-500"
            >
              <div className="flex flex-col items-center w-full pt-4 pb-10 gap-1 duration-500 dark:text-white">
                <h5 className="text-8xl xl:text-8xl md:text-6xl">
                  {member.name}
                </h5>
                <p className="text-lg dark:opacity-70">{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ALastSection;
