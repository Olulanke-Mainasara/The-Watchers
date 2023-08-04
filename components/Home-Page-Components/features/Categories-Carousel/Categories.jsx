import { motion } from "framer-motion";
import React from "react";

import { categories } from "../../../../static-data/Arrays";
import CategoryCard from "@/components/UI/Cards/CategoryCard";

function Categories({ controls }) {
  return (
    <motion.section
      animate={controls}
      className="w-fit h-full flex md:gap-[60px] md:pl-[60px] pl-0 gap-0"
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </motion.section>
  );
}

export default Categories;
