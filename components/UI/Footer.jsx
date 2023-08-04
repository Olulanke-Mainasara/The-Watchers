import Image from "next/image";
import Link from "next/link";

import TheUniverseImg from "@/public/Hero/The Universe 2.jpg";
import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="flex flex-col w-full px-5 text-white bg-black md:px-5 lg:px-10 dark:bg-slate-800 dark:text-white">
      <section className="flex flex-col justify-between py-8 border-b gap-8 md:flex-row md:h-72 h-fit">
        <div className="flex flex-col justify-center h-full gap-6 basis-1/2">
          <a
            href="#hero"
            className="flex items-center mx-auto text-2xl duration-300 md:mx-0 w-fit dark:text-white hover:text-gray-600 dark:hover:text-gray-600 xs:text-lg"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full">
              <Image
                src={TheUniverseImg}
                width={40}
                height={40}
                alt="The Watchers Logo"
              />
            </div>
            <span>The Watchers.</span>
          </a>
          <p className="opacity-70 2xl:text-xl xs:text-sm">
            Exploring the wonders of the universe, one story at a time. Join our
            community and stay up-to-date with the latest discoveries,
            breakthroughs, and insights across a variety of topics, from space
            exploration to world history, science, art, and more.
          </p>
        </div>

        <div className="md:w-[2px] md:h-full bg-white md:rotate-0 rotate-180 w-full h-[1px]"></div>

        <div className="flex flex-col justify-center h-full gap-5 basis-1/2">
          <p className="text-2xl text-center md:text-left xs:text-lg">
            Subscribe to our newsletter
          </p>
          <p className="xs:text-sm opacity-70">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 md:flex-row"
          >
            <input
              type="text"
              placeholder="Your e-mail..."
              className="w-full px-3 py-2 bg-gray-600 border rounded-lg outline-none border-slate-100"
            />
            <button
              type="submit"
              className="px-6 py-2 mx-auto text-black bg-white border duration-300 rounded-xl hover:bg-black hover:text-white w-fit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="flex flex-col-reverse items-center justify-between py-8 text-sm text-center border-t gap-6 md:flex-row border-slate-100 md:gap-0">
        <p>© 2023 The Watchers Inc. All rights reserved.</p>

        <div className="flex text-2xl gap-7 dark:text-white xs:text-xl">
          <Link href={"#"} aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link
            href={"https://twitter.com/Grim_redd"}
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
          <Link
            href={
              "https://github.com/Olulanke-Mainasara/The-Watchers-using-Next.js"
            }
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
          </Link>
          <Link href={"#"} aria-label="Instagram">
            <FaYoutube />
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
