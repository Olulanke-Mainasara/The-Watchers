import Image from "next/image";

import React from "react";

import Section4aImg from "../../../public/Home/Section4a.jpeg";
import Section4bImg from "../../../public/Home/Section4b.jpeg";
import SectionButton from "@/components/UI/Buttons/SectionButton";
import Text from "../../UI/Section/TextBlock";
import TextHeader from "../../UI/Section/TextHeader";
import P from "../../UI/Section/TextParagraph";

function SectionFour() {
  return (
    <section className="w-full max-w-[1920px] mx-auto xl:h-screen xl:max-h-[900px] flex md:flex-row flex-col md:gap-0 gap-14 h-auto xl:pt-0 pt-56">
      <Text position={"xl:justify-end"} height={"md:h-[705px]"}>
        <TextHeader>We inspire, no matter the reader</TextHeader>

        <P>
          Here, we believe that knowledge and inspiration should be accessible
          to all. Regardless of your age, background, or interests, we strive to
          create content that is comprehensive and engaging. Our aim is to
          provide a platform where everyone can come to explore and learn about
          the world around us, and to be inspired by the endless possibilities
          of what we can achieve.
        </P>

        <P>
          Whether you&apos;re a curious child, a student looking for a reliable
          source of information, or simply someone seeking to expand your
          horizons, our content is designed to cater to your needs. We believe
          that everyone has the potential to be inspired, and it is our mission
          to bring that inspiration to you, no matter who you are or where you
          come from.
        </P>

        <SectionButton />
      </Text>

      <section className="md:w-1/2 md:h-full flex items-center justify-center xl:justify-center md:justify-start w-screen h-[450px]">
        <div className="relative xl:w-3/5 max-w-[515px] xl:h-3/4 h-full md:w-[90%] md:h-[705px] w-[310px] xs:w-[252px]">
          <Image
            src={Section4aImg}
            width={257}
            height={403}
            placeholder="blur"
            className="absolute w-3/5 lg:w-3/5 md:w-4/5 h-3/5 border rounded-2xl top-0 left-0 min-h-[250px] shadow-black dark:shadow-slate-800 shadow-2xl"
            alt="Section 4a"
          />
          <Image
            src={Section4bImg}
            width={257}
            height={403}
            placeholder="blur"
            className="absolute w-3/5 lg:w-3/5 md:w-4/5 h-3/5 border rounded-2xl bottom-0 right-0 min-h-[250px] shadow-black dark:shadow-slate-800 shadow-2xl"
            alt="Section 4b"
          />
        </div>
      </section>
    </section>
  );
}

export default SectionFour;
