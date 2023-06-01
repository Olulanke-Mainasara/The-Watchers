import Image from "next/image";

import React from "react";

import Button from "../UI/Section/Button";
import H1 from "../UI/Section/H1";
import P from "../UI/Section/P";
import SImage from "../UI/Section/SImage";
import Text from "../UI/Section/Text";

function SectionOne() {
  return (
    <section className="w-full max-w-[1920px] mx-auto h-screen laptop:max-h-[900px] flex allEMT:flex-col allEMT:gap-14 allIL:h-auto allEMT:pt-56">
      <SImage>
        <Image
          src="/Home/Section1.JPG"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
          className="absolute top-0 left-0 border border-black dark:border-white rounded-2xl"
          alt=""
        />
      </SImage>

      <Text position={"start"}>
        <H1>Welcome to the chronicles of the universe</H1>

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
