import React, { useEffect, useMemo } from "react";

import { reviews } from "../../../../static-data/Arrays";
import ContainerC from "../../../UI/Carousel/ContainerC";
import H1C from "../../../UI/Carousel/H1C";
import LeftArrow from "../../../UI/Carousel/LeftArrow";
import RightArrow from "../../../UI/Carousel/RightArrow";
import useCustomWidthCarousel from "../../hooks/useCustomWidthCarousel";
import Reviews from "./Reviews";

function ReviewsCarousel() {
  const { controls, recoil, nextItem, prevItem } =
    useCustomWidthCarousel(reviews);

  useEffect(() => {
    const interval = setInterval(nextItem, 6000);
    return () => clearInterval(interval);
  }, [controls, nextItem, recoil]);

  const reviewsWithControls = useMemo(
    () => <Reviews controls={controls} />,
    [controls],
  );

  return (
    <ContainerC>
      <H1C>Reviews</H1C>

      <div className="relative w-full max-w-[1920px] h-[360px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevItem} />
        {reviewsWithControls}
        <RightArrow onclick={nextItem} />
      </div>
    </ContainerC>
  );
}

export default ReviewsCarousel;
