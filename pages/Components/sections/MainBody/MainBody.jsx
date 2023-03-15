import React from "react";
import SectionOne from "./SectionOne"; 
import NewsCarousel from "../../features/News-Carousel/NewsCarousel";
import SectionThree from "./SectionThree";
import CategoriesCarousel from "../../features/Categories-Carousel/CategoriesCarousel";
import SectionFive from "./SectionFive";
import ReviewsCarousel from "../../features/Reviews-Carousel/ReviewsCarousel";

function MainBody() {
  return (
    <main>
      <SectionOne />
      <NewsCarousel />
      <SectionThree />
      <CategoriesCarousel />
      <SectionFive />
      <ReviewsCarousel />
    </main>
  );
}

export default MainBody;
