import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import MyLogo from "../../../public/Hero/My Logo 1.jpg";

const ReviewCard = ({ review }) => {
  return (
    <div className={`md:w-[400px] w-screen h-full`} key={review.id}>
      <div className="md:w-full w-[90%] mx-auto h-full rounded-2xl bg-black text-white dark:bg-slate-800 dark:text-white flex flex-col justify-evenly px-[5%] items-center">
        <FaQuoteLeft className="text-3xl opacity-70" />

        <p className="text-lg text-center xs:text-sm">{review.text}</p>

        <FaQuoteRight className="text-3xl opacity-70" />

        <div className="flex items-center justify-center w-full gap-2">
          <div className="relative overflow-hidden border rounded-full w-14 h-14">
            <Image
              src={MyLogo}
              width={54}
              height={54}
              placeholder="blur"
              alt={review.text}
            />
          </div>
          <div className="flex flex-col gap-1 dark:text-white">
            <p className="text-2xl xs:text-xl">{review.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
