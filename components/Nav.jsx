import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useNavigationBar from "./Home-Components/hooks/useNavigationBar";
import Search from "./Search/Search";
import { useLocalStorage, useSessionStorage } from "react-use";
import {
  FaBars,
  FaChevronRight,
  FaMoon,
  FaSearch,
  FaSun,
} from "react-icons/fa";

function Nav() {
  const [navMenu, visible, openMenu, closeMenu] = useNavigationBar();
  const [theme, setTheme] = useLocalStorage("theme");
  const [search, setSearch] = useSessionStorage("search", false);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleSearch = () => {
    if (search === false) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-30 ${
          visible ? "" : "allIL:opacity-0 allIL:pointer-events-none"
        } duration-300 h-16 w-screen bg-white dark:bg-black`}
      >
        <div className="flex items-center justify-between h-full px-10 mx-auto sm:px-5 xs:px-3 iphone5:px-3 xtraSmall:px-2">
          <Link
            href="/"
            className={`flex items-center text-2xl text-black dark:text-white transition-colors duration-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-black dark:after:bg-white after:transition-transform after:duration-700 after:content-[''] hover:after:scale-x-100 allT:text-lg allIL:hover:after:w-0 ${
              visible ? "" : "allIL:pointer-events-none"
            }`}
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
                  className="relative duration-300 allLM:text-2xl hover:opacity-50"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="relative duration-300 allLM:text-2xl hover:opacity-50"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="relative duration-300 allLM:text-2xl hover:opacity-50"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="relative duration-300 allLM:text-2xl hover:opacity-50"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="relative duration-300 allLM:text-2xl hover:opacity-50"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="relative duration-300 allLM:text-2xl hover:opacity-50"
                >
                  Contact us
                </Link>
              </li>

              <button
                title="Close navigation menu"
                onClick={closeMenu}
                className="absolute text-5xl text-black rotate-45 dark:text-white top-5 iphone5:top-5 right-5 laptop:hidden"
              >
                +
              </button>

              <button
                title="Theme"
                onClick={handleTheme}
                className="absolute flex items-center justify-center w-10 h-10 text-xl text-white bg-black rounded-full top-7 left-8 dark:text-black dark:bg-white laptop:hidden allLM:hidden"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>

              <div className="flex items-center gap-2 allT:flex-col allT:w-full allT:gap-5 laptop:hidden allLM:hidden">
                <Link
                  href={"/categories"}
                  className="px-5 py-3 text-3xl text-white transition-colors duration-300 bg-black rounded-3xl dark:bg-white dark:text-black allEMT:text-lg allT:w-full"
                >
                  Start reading
                </Link>

                <Link
                  href={"/sign-in"}
                  className="flex items-center justify-center gap-1 py-2 pl-3 text-black allLM:text-2xl dark:text-white allEMT:text-lg"
                >
                  Log in <FaChevronRight />
                </Link>
              </div>
            </div>
          </ul>

          <button
            title="Search"
            className="flex items-center justify-center w-10 h-10 text-xl text-black laptop:hidden allLM:hidden dark:text-white allT:text-lg"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>

          <div className="flex items-center gap-6 allEMT:hidden">
            <button
              title="Theme"
              onClick={handleTheme}
              className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full dark:text-white"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

            <button
              title="Search"
              className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full dark:text-white"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>

            <Link
              href={"/sign-in"}
              className="flex items-center justify-center gap-1 px-6 py-2 text-white duration-500 bg-black border border-black rounded-full dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-black dark:hover:border-white"
            >
              Log in <FaChevronRight />
            </Link>
          </div>

          <button
            title="Open navigation menu"
            onClick={openMenu}
            className="text-2xl text-black laptop:hidden dark:text-white allT:text-lg"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      <Search search={search} handleSearch={handleSearch} />
    </>
  );
}

export default Nav;
