import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { reviews } from "../../../../data/Arrays";
import MyLogo from "../../../../public/Hero/My Logo 1.jpg";

function Reviews({ controls }) {
  return (
    <div className="h-full flex gap-[60px] pl-[60px] allEMT:pl-0 allEMT:gap-0">
      {reviews.map((reviewsItem) => {
        return (
          <motion.div
            className={`w-[400px] allEMT:w-screen h-full`}
            animate={controls}
            key={reviewsItem.id}
          >
            <div className="w-full allEMT:w-[90%] allEMT:mx-auto h-full rounded-2xl bg-black text-white dark:bg-slate-800 dark:text-white flex flex-col justify-evenly px-[5%] items-center">
              <FaQuoteLeft className="text-3xl opacity-70" />

              <p className="text-lg text-center allT:text-sm">
                {reviewsItem.text}
              </p>

              <FaQuoteRight className="text-3xl opacity-70" />

              <div className="flex items-center justify-center w-full gap-2">
                <div className="relative overflow-hidden border rounded-full w-14 h-14">
                  <Image
                    src={MyLogo}
                    fill
                    placeholder="blur"
                    alt={reviewsItem.text}
                  />
                </div>
                <div className="flex flex-col gap-1 duration-500 dark:text-white">
                  <h5 className="text-2xl allT:text-xl">{reviewsItem.name}</h5>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Reviews;
