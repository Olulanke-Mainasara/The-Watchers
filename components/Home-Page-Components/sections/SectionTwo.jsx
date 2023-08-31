import React from "react";

import Section2Img from "../../../public/Home/Section2.jpeg";
import SectionButton from "@/components/UI/Buttons/SectionButton";
import SImage from "../../UI/Section/SectionImage";
import Text from "../../UI/Section/TextBlock";
import TextHeader from "../../UI/Section/TextHeader";
import P from "../../UI/Section/TextParagraph";

function SectionTwo() {
  return (
    <section className="w-full max-w-[1920px] mx-auto xl:h-screen xl:max-h-[900px] md:flex-row flex flex-col md:gap-0 gap-14 h-auto xl:pt-0 pt-56">
      <Text position={"xl:justify-end"}>
        <TextHeader>We inspire, no matter the reader</TextHeader>

        <P>
          Here, we believe that knowledge and inspiration should be accessible
          to all. Regardless of your age, background, or interests, we strive to
          create content that is comprehensive and engaging. Our aim is to
          provide a platform where everyone can come to explore and learn about
          the world around us, and to be inspired by the endless possibilities
          of what we can achieve.
        </P>

        <SectionButton />
      </Text>

      <SImage image={Section2Img} alt={"Section 2"} />
    </section>
  );
}

export default SectionTwo;
