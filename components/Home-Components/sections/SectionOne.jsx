import Image from "next/image";

import React from "react";

import Section1Img from "../../../public/Home/Section1.jpeg";
import Button from "../../UI/Section/Button";
import SImage from "../../UI/Section/SectionImage";
import Text from "../../UI/Section/TextBlock";
import TextHeader from "../../UI/Section/TextHeader";
import P from "../../UI/Section/TextParagraph";

function SectionOne() {
  return (
    <section className="w-full max-w-[1920px] mx-auto xl:h-screen xl:max-h-[900px] flex flex-col md:flex-row gap-14 md:gap-0 h-auto md:pt-0 pt-56">
      <SImage>
        <Image
          src={Section1Img}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          priority
          className="absolute top-0 left-0 border border-black dark:border-white rounded-2xl"
          alt="Section 1"
        />
      </SImage>

      <Text position={"xl:justify-start"}>
        <TextHeader>Welcome to the chronicles of the universe</TextHeader>

        <P>
          Here, you will be transported to a world of endless discovery as we
          delve into a wide range of topics that span across all areas and
          sectors of the world. From science and technology, to culture and
          history, our goal is to provide a comprehensive and informative look
          into the marvels of our world and beyond. Whether you&apos;re
          interested in exploring the mysteries of the universe, learning about
          the latest advancements in medicine, or discovering the rich tapestry
          of human history, we&apos;ve got you covered.
        </P>

        <Button />
      </Text>
    </section>
  );
}

export default SectionOne;
