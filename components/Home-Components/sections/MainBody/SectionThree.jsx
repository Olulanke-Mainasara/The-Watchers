import React from "react";
import Image from "next/image";
import Button from "../../UI/Section/Button";
import P from "../../UI/Section/P";
import H1 from "../../UI/Section/H1";
import Text from "../../UI/Section/Text";
import SImage from "../../UI/Section/SImage";

function SectionThree() {
  return (
    <section className="w-full max-w-[1920px] mx-auto h-screen laptop:max-h-[900px] flex allEMT:flex-col allEMT:gap-14 allIL:h-auto">
      <SImage>
        <Image
          src="/Section1.JPG"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
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

export default SectionThree;
