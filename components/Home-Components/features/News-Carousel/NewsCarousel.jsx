import React, { useMemo } from "react";
import News from "./News";
import useFullWidthCarousel from "../../hooks/useFullWidthCarousel";
import LeftArrow from "../../UI/Carousel/LeftArrow";
import RightArrow from "../../UI/Carousel/RightArrow";
import H1C from "../../UI/Carousel/H1C";
import ContainerC from "../../UI/Carousel/ContainerC";
import { news } from "../../../../data/Arrays";

function NewsCarousel() {
  const { controls, prevNews, nextNews } = useFullWidthCarousel(news);

  const newsWithControls = useMemo(
    () => <News controls={controls} />,
    [controls]
  );

  return (
    <ContainerC>
      <H1C id={"news"}>Today&apos;s Articles</H1C>

      <div className="relative w-full h-[500px] 2xl:h-[650px] lg:h-[350px] md:h-[800px] allT:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevNews} />
        {newsWithControls}
        <RightArrow onclick={nextNews} />
      </div>
    </ContainerC>
  );
}

export default NewsCarousel;
