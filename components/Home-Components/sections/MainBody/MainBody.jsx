import React from "react";
import SectionOne from "./SectionOne"; 
import NewsCarousel from "../../features/News-Carousel/NewsCarousel";
import SectionThree from "./SectionThree";
import CategoriesCarousel from "../../features/Categories-Carousel/CategoriesCarousel";
import SectionFive from "./SectionFive";
import ReviewsCarousel from "../../features/Reviews-Carousel/ReviewsCarousel";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionSix from "./SectionSix";
import LastSection from "./LastSection";

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
