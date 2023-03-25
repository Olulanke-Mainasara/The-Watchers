import React from "react";
import Image from "next/image";
import Button from "../../UI/Button";
import P from "../../UI/Section/P";
import H1 from "../../UI/Section/H1";
import Text from "../../UI/Section/Text";
import SImage from "../../UI/Section/SImage";

function SectionFive() {
  return (
    <section className="w-full max-w-[1920px] mx-auto h-screen laptop:max-h-[900px] flex allEMT:flex-col allEMT:gap-14 allIL:h-auto">
      <SImage>
        <Image
          src="/Section3.JPG"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="absolute border border-black dark:border-white rounded-2xl top-0 left-0"
          alt=""
        />
      </SImage>

      <Text position={"start"}>
        <H1>Feed your mind, no matter where you are</H1>

        <P>
          At The Watchers, we understand the importance of accessibility and
          convenience. That&apos;s why our content is designed to be easily
          accessible from anywhere in the world and on any device. Whether
          you&apos;re at home, on the go, or traveling, you can access our
          articles, videos, and podcasts with just a few clicks. With our
          responsive design and mobile-friendly platform, you can enjoy our
          content on your laptop, tablet, or smartphone, ensuring that you never
          miss a beat.
        </P>

        <Button />
      </Text>
    </section>
  );
}

export default SectionFive;
