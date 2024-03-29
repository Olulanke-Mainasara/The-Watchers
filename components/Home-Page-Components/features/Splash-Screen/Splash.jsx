import { motion } from "framer-motion";
import React from "react";

import SplashText from "./SplashText";

function Splash() {
  return (
    <motion.div
      animate={{
        height: 0,
        transition: { duration: 0.6, delay: 1.5 },
      }}
      className="absolute w-screen h-screen bg-white dark:bg-black dark:text-white xl:text-9xl 2xl:text-[160px] lg:text-8xl md:text-7xl text-4xl xs:text-3xl overflow-hidden flex items-center justify-center z-50"
    >
      <SplashText />
    </motion.div>
  );
}

export default Splash;
