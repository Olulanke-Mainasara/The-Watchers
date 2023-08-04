import { motion } from "framer-motion";
import React from "react";

import { reviews } from "../../../../static-data/Arrays";
import ReviewCard from "@/components/UI/Cards/ReviewCard";

function Reviews({ controls }) {
  return (
    <motion.div
      animate={controls}
      className="h-full flex md:gap-[60px] md:pl-[60px] pl-0 gap-0"
    >
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </motion.div>
  );
}

export default Reviews;
