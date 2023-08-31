import React from "react";

import Section5Img from "../../../public/Home/Section5.jpeg";
import SectionButton from "@/components/UI/Buttons/SectionButton";
import SImage from "../../UI/Section/SectionImage";
import Text from "../../UI/Section/TextBlock";
import TextHeader from "../../UI/Section/TextHeader";
import P from "../../UI/Section/TextParagraph";

function SectionFive() {
  return (
    <section className="w-full max-w-[1920px] mx-auto xl:h-screen xl:max-h-[900px] flex md:flex-row flex-col md:gap-0 gap-14 h-auto">
      <SImage image={Section5Img} alt={"Section 5"} />

      <Text position={"xl:justify-start"}>
        <TextHeader>Feed your mind, no matter where you are</TextHeader>

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

        <SectionButton />
      </Text>
    </section>
  );
}

export default SectionFive;
