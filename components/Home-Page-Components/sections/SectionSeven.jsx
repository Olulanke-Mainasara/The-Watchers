import React from "react";

import Section5Img from "../../../public/Home/Section5.jpeg";
import SectionButton from "@/components/UI/Buttons/SectionButton";
import SImage from "../../UI/Section/SectionImage";
import Text from "../../UI/Section/TextBlock";
import TextHeader from "../../UI/Section/TextHeader";
import P from "../../UI/Section/TextParagraph";

function SectionSeven() {
  return (
    <section className="w-full max-w-[1920px] mx-auto xl:h-screen xl:max-h-[900px] flex md:flex-row flex-col md:gap-0 gap-14 h-auto pt-56 pb-28 xl:py-0">
      <SImage image={Section5Img} alt={"Section 5"} />

      <Text position={"xl:justify-start"}>
        <TextHeader>Upload your own article, share your own ideas</TextHeader>

        <P>
          Our website is a platform for people from all walks of life to share
          their insights, experiences, and passions with the world. Whether
          you&apos;re a student, an expert, or simply someone with a unique
          perspective, our community is here to support and amplify your voice.
        </P>

        <SectionButton />
      </Text>
    </section>
  );
}

export default SectionSeven;
