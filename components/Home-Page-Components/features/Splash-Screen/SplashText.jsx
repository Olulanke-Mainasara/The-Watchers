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
      <div className="relative w-24 overflow-hidden border border-black rounded-full dark:border-white md:w-44 xl:w-60 2xl:w-64 aspect-square">
        <Image
          src={TheUniverse}
          width={240}
          height={240}
          quality={50}
          className="w-full h-full"
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
