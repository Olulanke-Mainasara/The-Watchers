import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";

import TheUniverse from "../../../../public/Hero/The Universe 2.jpg";

function SplashText() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { duration: 0.4, delay: 1 },
      }}
      className="flex items-center justify-center"
    >
      <div className="relative overflow-hidden rounded-full w-60 2xl:w-64 allEMT:w-28 aspect-square">
        <Image
          src={TheUniverse}
          fill
          priority
          placeholder="blur"
          alt="The Watchers logo"
        />
      </div>
      <h1>The Watchers.</h1>
    </motion.div>
  );
}

export default SplashText;
