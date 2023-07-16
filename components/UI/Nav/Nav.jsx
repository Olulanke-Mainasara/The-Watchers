import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import TheUniverseImg from "@/public/Hero/The Universe 2.jpg";
import React from "react";
import { FaBars, FaChevronRight, FaSearch, FaTimes } from "react-icons/fa";
import { useSessionStorage } from "react-use";

import DesktopThemeToggler from "../Buttons/DesktopThemeToggler";
import MobileThemeToggler from "../Buttons/MobileThemeToggler";
import Search from "../Search/Search";
import useNavigationBar from "./useNavigationBar";

const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Categories",
    href: "/categories",
  },
  {
    id: 3,
    title: "News",
    href: "/news",
  },
  {
    id: 4,
    title: "Articles",
    href: "/articles",
  },
  {
    id: 5,
    title: "About us",
    href: "/aboutus",
  },
  {
    id: 6,
    title: "Contact us",
    href: "/contactus",
  },
];

function Nav() {
  const [navMenu, visible, openMenu, closeMenu] = useNavigationBar();
  const [search, setSearch] = useSessionStorage("search", false);
  const router = useRouter();

  const handleSearch = () => {
    if (search === false) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-30 ${
          visible
            ? ""
            : !visible & (router.pathname == "/profile")
            ? ""
            : "opacity-0 pointer-events-none"
        } transition-opacity h-20 w-screen bg-white dark:bg-[#010409]`}
      >
        <div className="flex items-center justify-between h-full px-5 mx-auto md:px-10 xs:px-2">
          <Link
            href="/"
            className={`flex items-center text-2xl text-black dark:text-white transition-colors duration-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-black dark:after:bg-white after:transition-transform after:duration-700 after:content-[''] hover:after:scale-x-100 xs:text-lg ${
              visible ? "" : "pointer-events-none"
            }`}
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full">
              <Image
                src={TheUniverseImg}
                width={40}
                height={40}
                className="h-full"
                placeholder="blur"
                alt="The Watchers Logo"
              />
            </div>
            <span>The Watchers.</span>
          </Link>

          <div
            className={`flex xl:static xl:h-full xl:bg-transparent xl:w-fit xl:justify-between text-black dark:text-white absolute top-0 h-screen w-full justify-end bg-gray-800/0 backdrop-blur-lg duration-500 xl:duration-300 ${navMenu}`}
          >
            <div className="relative bg-white dark:bg-[#010409] xl:bg-transparent px-6 xl:px-0 xl:w-full xl:min-w-full xl:max-w-full w-4/5 min-w-[240px] max-w-[320px] flex justify-center xl:items-center items-start md:gap-14 xl:flex-row flex-col gap-10 xs:gap-8">
              <ul className="flex flex-col gap-10 md:gap-14 xl:flex-row xs:gap-8">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      aria-label={link.title}
                      className="transition-opacity xl:text-base md:text-2xl hover:opacity-50"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                title="Close navigation menu"
                onClick={closeMenu}
                className="absolute text-4xl text-black dark:text-white top-7 right-5 xl:hidden"
              >
                <FaTimes />
              </button>

              <MobileThemeToggler />

              <div className="flex items-center gap-4 xs:items-start xs:flex-col md:hidden">
                <Link
                  href={"/signup"}
                  aria-label="signup"
                  className="flex items-center justify-center gap-1 px-6 py-3 text-white duration-500 bg-black rounded-full dark:text-black dark:bg-white hover:bg-purple-500 hover:text-white"
                >
                  Start reading
                </Link>
                <span className="xs:hidden">|</span>
                <Link
                  href={"/login"}
                  aria-label="login"
                  className="flex items-center justify-center gap-1 duration-500 rounded-full hover:text-purple-500"
                >
                  Log in <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>

          <button
            title="Search"
            className="flex items-center justify-center w-10 h-10 text-xl text-black md:hidden dark:text-white xs:text-lg"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>

          <div className="items-center hidden gap-6 md:flex">
            <DesktopThemeToggler />

            <button
              title="Search"
              className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full dark:text-white"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>

            <Link
              href={"/login"}
              className="flex items-center justify-center gap-1 px-6 py-2 text-white duration-500 bg-black border border-black rounded-full dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-black dark:hover:border-white"
            >
              Log in <FaChevronRight />
            </Link>
          </div>

          <button
            title="Open navigation menu"
            onClick={openMenu}
            className="text-2xl text-black xl:hidden dark:text-white xs:text-lg"
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
