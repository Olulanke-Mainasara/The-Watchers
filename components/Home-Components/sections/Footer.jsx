import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { footerlinks } from "../../../data/Arrays";
import Image from "next/image";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full h-[70vh] flex flex-col px-10 bg-black dark:bg-slate-800 text-white dark:text-white allIL:h-fit allEM:px-8 allT:px-6">
      <section className="flex gap-10 allIL:gap-0 basis-4/5 allIL:flex-col">
        <section className="flex flex-col h-full justify-center basis-1/2 allLM:flex-row allLM:items-center allLM:border-white allIL:border-b allLM:py-8 allLM:gap-8">
          <div className="flex h-full flex-col justify-center gap-6 allIL:basis-1/2 border-slate-100 border-b allLM:border-b-0 allEMT:py-8">
            <a
              href="#hero"
              className="w-fit flex items-center text-2xl mx-auto dark:text-white hover:text-gray-600 dark:hover:text-gray-600 transition-colors duration-300 allT:text-lg"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
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

          <div className="h-full flex flex-col gap-5 justify-center allEMT:py-8">
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
                className="py-2 px-3 bg-gray-600 border border-slate-100 rounded-lg w-full outline-none"
              />
              <button
                type="submit"
                className="py-2 px-3 bg-white text-black hover:bg-black hover:text-white border duration-300 rounded-lg allEMT:w-fit allEMT:mx-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <section className="border-white border-l allEMT:border-l-0 flex flex-wrap justify-evenly h-full basis-1/2 allEMT:justify-between xtraSmall:gap-8 allIL:py-8">
          {footerlinks.map((footerlink) => {
            return (
              <div
                key={footerlink.id}
                className="flex flex-col gap-4 justify-center"
              >
                <p className="text-xl allT:text-lg">{footerlink.title}</p>

                <div className="flex flex-col gap-3 dark:text-white">
                  <Link
                    href={"#"}
                    className="opacity-70 hover:opacity-100 duration-500"
                  >
                    <p>{footerlink.linkOne}</p>
                  </Link>
                  <Link
                    href={"#"}
                    className="opacity-70 hover:opacity-100 duration-500"
                  >
                    <p>{footerlink.linkTwo}</p>
                  </Link>
                  <Link
                    href={"#"}
                    className="opacity-70 hover:opacity-100 duration-500"
                  >
                    <p>{footerlink.linkThree}</p>
                  </Link>
                  <Link
                    href={"#"}
                    className="opacity-70 hover:opacity-100 duration-500"
                  >
                    <p>{footerlink.linkFour}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </section>

      <section className="basis-1/5 flex justify-between items-center border-slate-100 border-t allEMT:flex-col-reverse text-sm text-center allIL:py-8 allEMT:gap-6">
        <p>© 2023 The Watchers Inc. All rights reserved.</p>

        <div className="flex gap-7 text-2xl dark:text-white allT:text-xl">
          <Link href={"#"}>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link href={"#"}>
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
