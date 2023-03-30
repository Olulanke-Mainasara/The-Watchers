import React from "react";
import Image from "next/image";
import Button from "../../UI/Section/Button";
import P from "../../UI/Section/P";
import H1 from "../../UI/Section/H1";
import Text from "../../UI/Section/Text";
import SImage from "../../UI/Section/SImage";

function SectionSix() {
  return (
    <section className="w-full max-w-[1920px] mx-auto h-screen laptop:max-h-[900px] flex allEMT:flex-col allEMT:gap-14 allIL:h-auto allIL:pt-56">
      <Text position={"justify-end"}>
        <H1>We inspire, no matter the reader</H1>

        <P>
          Here, we believe that knowledge and inspiration should be accessible
          to all. Regardless of your age, background, or interests, we strive to
          create content that is comprehensive and engaging. Our aim is to
          provide a platform where everyone can come to explore and learn about
          the world around us, and to be inspired by the endless possibilities
          of what we can achieve.
        </P>

        <Button />
      </Text>

      <SImage>
        <Image
          src="/Section1.JPG"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="absolute border border-black dark:border-white rounded-2xl top-0 left-0"
          alt=""
        />
      </SImage>
    </section>
  );
}

export default SectionSix;
