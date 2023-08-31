import React from "react";

import CategoriesCarousel from "../features/Categories-Carousel/CategoriesCarousel";
import FeaturedCarousel from "../features/Featured-Carousel/FeaturedCarousel";
import ReviewsCarousel from "../features/Reviews-Carousel/ReviewsCarousel";
import LastSection from "./LastSection";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import SectionSeven from "./SectionSeven";

function MainBody() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <FeaturedCarousel />
      <SectionThree />
      <SectionFour />
      <CategoriesCarousel />
      <SectionFive />
      <SectionSix />
      <ReviewsCarousel />
      <LastSection />
      <SectionSeven />
    </main>
  );
}

export default MainBody;
