import React, { useMemo } from "react";

import { categories } from "../../../../data/Arrays";
import ContainerC from "../../UI/Carousel/ContainerC";
import H1C from "../../UI/Carousel/H1C";
import LeftArrow from "../../UI/Carousel/LeftArrow";
import RightArrow from "../../UI/Carousel/RightArrow";
import useCustomWidthCarousel from "../../hooks/useCustomWidthCarousel";
import Categories from "./Categories";

function CategoriesCarousel() {
  const { controls, nextItem, prevItem } = useCustomWidthCarousel(categories);

  const categoriesWithControls = useMemo(
    () => <Categories controls={controls} />,
    [controls]
  );

  return (
    <ContainerC>
      <H1C>Our Categories</H1C>

      <div className="relative w-full max-w-[1920px] h-[550px] allT:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevItem} />
        {categoriesWithControls}
        <RightArrow onclick={nextItem} />
      </div>
    </ContainerC>
  );
}

export default CategoriesCarousel;
