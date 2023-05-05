import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerlinks } from "../../../data/Arrays";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full h-[70vh] flex flex-col px-10 bg-black dark:bg-slate-800 text-white dark:text-white allIL:h-fit allEM:px-8 allT:px-6">
      <section className="flex gap-10 allIL:gap-0 basis-4/5 allIL:flex-col">
        <section className="flex flex-col justify-center h-full basis-1/2 allLM:flex-row allLM:items-center allLM:border-white allIL:border-b allLM:py-8 allLM:gap-8">
          <div className="flex flex-col justify-center h-full gap-6 border-b allIL:basis-1/2 border-slate-100 allLM:border-b-0 allEMT:py-8">
            <a
              href="#hero"
              className="flex items-center mx-auto text-2xl transition-colors duration-300 w-fit dark:text-white hover:text-gray-600 dark:hover:text-gray-600 allT:text-lg"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src="/The Universe 2.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  alt="The Watchers Logo"
                />
              </div>
              <span>The Watchers.</span>
            </a>
            <p className="text-base opacity-70 2xl:text-xl allT:text-sm">
              Exploring the wonders of the universe, one story at a time. Join
              our community and stay up-to-date with the latest discoveries,
              breakthroughs, and insights across a variety of topics, from space
              exploration to world history, science, art, and more.
            </p>
          </div>

          <div className="flex flex-col justify-center h-full gap-5 allEMT:py-8">
            <p className="text-xl 2xl:text-2xl allT:text-lg">
              Subscribe to our newsletter
            </p>
            <p className="allT:text-sm opacity-70">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex gap-5 allEMT:flex-col"
            >
              <input
                type="text"
                placeholder="Your e-mail..."
                className="w-full px-3 py-2 bg-gray-600 border rounded-lg outline-none border-slate-100"
              />
              <button
                type="submit"
                className="px-3 py-2 text-black duration-300 bg-white border rounded-lg hover:bg-black hover:text-white allEMT:w-fit allEMT:mx-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <section className="flex flex-wrap h-full border-l border-white allEMT:border-l-0 justify-evenly basis-1/2 allEMT:justify-between xtraSmall:gap-8 allIL:py-8">
          {footerlinks.map((footerlink) => {
            return (
              <div
                key={footerlink.id}
                className="flex flex-col justify-center gap-4"
              >
                <p className="text-xl allT:text-lg">{footerlink.title}</p>

                <div className="flex flex-col gap-3 dark:text-white">
                  <Link
                    href={"#"}
                    className="duration-500 opacity-70 hover:opacity-100"
                  >
                    <p>{footerlink.linkOne}</p>
                  </Link>
                  <Link
                    href={"#"}
                    className="duration-500 opacity-70 hover:opacity-100"
                  >
                    <p>{footerlink.linkTwo}</p>
                  </Link>
                  <Link
                    href={"#"}
                    className="duration-500 opacity-70 hover:opacity-100"
                  >
                    <p>{footerlink.linkThree}</p>
                  </Link>
                  <Link
                    href={"#"}
                    className="duration-500 opacity-70 hover:opacity-100"
                  >
                    <p>{footerlink.linkFour}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </section>

      <section className="flex items-center justify-between text-sm text-center border-t basis-1/5 border-slate-100 allEMT:flex-col-reverse allIL:py-8 allEMT:gap-6">
        <p>© 2023 The Watchers Inc. All rights reserved.</p>

        <div className="flex text-2xl gap-7 dark:text-white allT:text-xl">
          <Link href={"#"}>
            <FaFacebook />
          </Link>
          <Link href={"#"}>
            <FaInstagram />
          </Link>
          <Link href={"#"}>
            <FaTwitter />
          </Link>
          <Link href={"#"}>
            <FaGithub />
          </Link>
          <Link href={"#"}>
            <FaYoutube />
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
