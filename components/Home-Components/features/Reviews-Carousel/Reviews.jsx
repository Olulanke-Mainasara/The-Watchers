import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { reviews } from "../../../../data/Arrays";

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
            <div className="w-full allEMT:w-[90%] allEMT:mx-auto h-full rounded-2xl bg-black text-white dark:bg-slate-800 dark:text-white flex flex-col justify-evenly px-[5%]">
              <FontAwesomeIcon
                className="text-4xl opacity-70"
                icon={faQuoteLeft}
              />

              <p className="text-lg text-center allT:text-sm">{reviewsItem.text}</p>

              <FontAwesomeIcon
                className="text-4xl text-right opacity-70"
                icon={faQuoteRight}
              />

              <div className="w-full flex gap-2 items-center justify-center">
                <div className="w-14 h-14 rounded-full relative border overflow-hidden">
                  <Image
                    src="/My Logo 1.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    alt="User Image"
                  />
                </div>
                <div className="dark:text-white flex flex-col gap-1 duration-500">
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
