import { motion } from "framer-motion";
import React from "react";

import { news } from "../../../../static-data/Arrays";
import FeatureCard from "@/components/UI/Cards/FeatureCard";

function Features({ controls }) {
  return (
    <motion.div animate={controls} className="flex h-full">
      {news.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </motion.div>
  );
}

export default Features;
