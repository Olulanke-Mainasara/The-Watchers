import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";

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
      <div className="relative w-60 2xl:w-64 allEMT:w-28 aspect-square">
        <Image
          src={"/Hero/The Universe 2.jpg"}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
          alt="Brand logo"
        />
      </div>
      <h1>The Watchers.</h1>
    </motion.div>
  );
}

export default SplashText;
