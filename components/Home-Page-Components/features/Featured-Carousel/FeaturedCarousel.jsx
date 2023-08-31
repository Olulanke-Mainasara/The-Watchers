import React, { useMemo } from "react";

import { news } from "../../../../static-data/Arrays";
import ContainerC from "../../../UI/Carousel/ContainerC";
import H1C from "../../../UI/Carousel/H1C";
import LeftArrow from "../../../UI/Carousel/LeftArrow";
import RightArrow from "../../../UI/Carousel/RightArrow";
import useFullWidthCarousel from "../../hooks/useFullWidthCarousel";
import News from "./Features";

function FeaturedCarousel() {
  const { controls, prevNews, nextNews } = useFullWidthCarousel(news);
  const newsWithControls = useMemo(
    () => <News controls={controls} />,
    [controls],
  );

  return (
    <ContainerC>
      <H1C id={"featuredCarousel"}>Today&apos;s Articles</H1C>

      <div className="relative w-full h-[500px] xl:h-[500px] 2xl:h-[650px] lg:h-[350px] md:h-[800px] xs:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevNews} />
        {newsWithControls}
        <RightArrow onclick={nextNews} />
      </div>
    </ContainerC>
  );
}

export default FeaturedCarousel;
