import React from "react";

import CategoriesCarousel from "../features/Categories-Carousel/CategoriesCarousel";
import NewsCarousel from "../features/News-Carousel/NewsCarousel";
import ReviewsCarousel from "../features/Reviews-Carousel/ReviewsCarousel";
import LastSection from "./LastSection";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

function MainBody() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <NewsCarousel />
      <SectionThree />
      <SectionFour />
      <CategoriesCarousel />
      <SectionFive />
      <SectionSix />
      <ReviewsCarousel />
      <LastSection />
    </main>
  );
}

export default MainBody;
