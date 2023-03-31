import React from "react";
import Link from "next/link";
import Image from "next/image";
import useNavigationBar from "./Home-Components/hooks/useNavigationBar";
import useStore from "@/providers/navStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faChevronRight,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [navMenu, visible, openMenu, closeMenu] = useNavigationBar();
  const { toggleSearch, dark, toggleDark } = useStore();

  return (
    <nav
      className={`fixed top-0 left-0 z-30 ${
        visible ? "" : "allIL:opacity-0"
      } duration-300 h-16 w-screen bg-white dark:bg-black`}
    >
      <div className="flex items-center justify-between h-full px-10 mx-auto sm:px-5 xs:px-3 iphone5:px-3 xtraSmall:px-2">
        <Link
          href="/"
          className="flex items-center text-2xl text-black dark:text-white transition-colors duration-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-black dark:after:bg-white after:transition-transform after:duration-700 after:content-[''] hover:after:scale-x-100 allT:text-lg allIL:hover:after:w-0"
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
        </Link>

        <ul
          className={`flex allEMT:text-base allIL:text-black allIL:absolute allIL:top-0 allIL:h-screen allIL:w-full allIL:justify-end allIL:bg-gray-800/0 backdrop-blur-lg duration-500 ${navMenu}`}
        >
          <div className="relative text-black dark:text-white bg-white dark:bg-black allIL:px-8 allIL:w-4/5 allIL:min-w-[240px] allIL:max-w-[320px] flex justify-center items-center allIL:items-start gap-14 allIL:flex-col allEM:gap-10 allT:gap-8 duration-300">
            <li>
              <Link
                href="/"
                className="relative allLM:text-2xl hover:opacity-50 duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="relative allLM:text-2xl hover:opacity-50 duration-300"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="relative allLM:text-2xl hover:opacity-50 duration-300"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className="relative allLM:text-2xl hover:opacity-50 duration-300"
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="relative allLM:text-2xl hover:opacity-50 duration-300"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="relative allLM:text-2xl hover:opacity-50 duration-300"
              >
                Contact us
              </Link>
            </li>

            <button
              title="Close navigation menu"
              onClick={closeMenu}
              className="absolute text-3xl text-black dark:text-white top-7 iphone5:top-7 right-5 laptop:hidden"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>

            <button
              title="Theme"
              onClick={() => {
                toggleDark();
              }}
              className="absolute flex items-center justify-center w-10 h-10 text-xl text-white bg-black rounded-full top-7 left-8 dark:text-black dark:bg-white laptop:hidden allLM:hidden"
            >
              <FontAwesomeIcon icon={dark ? faSun : faMoon} />
            </button>

            <div className="flex items-center allT:flex-col allT:w-full gap-2 allT:gap-5 laptop:hidden allLM:hidden">
              <Link
                href={"/categories"}
                className="px-5 py-3 text-3xl text-white bg-black rounded-3xl dark:bg-white dark:text-black transition-colors duration-300 allEMT:text-lg allT:w-full"
              >
                Start reading
              </Link>

              <Link
                href={"/sign-in"}
                className="py-2 pl-3 text-black allLM:text-2xl dark:text-white allEMT:text-lg"
              >
                Log in <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        </ul>

        <button
          title="Search"
          className="flex items-center justify-center w-10 h-10 text-xl text-black laptop:hidden allLM:hidden dark:text-white allT:text-lg"
          onClick={() => {
            toggleSearch();
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <div className="flex items-center gap-6 allEMT:hidden">
          <button
            title="Theme"
            onClick={() => {
              toggleDark();
            }}
            className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full dark:text-white"
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </button>

          <button
            title="Search"
            className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full dark:text-white"
            onClick={() => {
              toggleSearch();
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <Link
            href={"/sign-in"}
            className="px-6 py-2 text-white bg-black border border-black rounded-full dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-black dark:hover:border-white duration-500"
          >
            Log in <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>

        <button
          title="Open navigation menu"
          onClick={openMenu}
          className="text-2xl text-black laptop:hidden dark:text-white allT:text-lg"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
