import Head from "next/head";
import Image from "next/image";

import Nav from "@/components/Nav/Nav";
import Bookmarks from "@/components/Profile-Components/Bookmarks";
import EditProfile from "@/components/Profile-Components/EditProfile";
import History from "@/components/Profile-Components/History";
import { useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

import MyLogoImg from "../public/Hero/My Logo 1.jpg";

const lists = [
  {
    id: 1,
    title: "Bookmarks",
    link: "bookmarks",
  },
  {
    id: 2,
    title: "History",
    link: "history",
  },
  {
    id: 3,
    title: "Edit profile",
    link: "editprofile",
  },
];

function About() {
  const [shownList, setShownList] = useState("bookmarks");

  const handleShownList = (list) => {
    setShownList(list);
  };

  return (
    <>
      <Head>
        <title>Profile - The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-screen h-[100dvh] allEMT:flex-col relative">
        <Nav />
        <section className="relative flex flex-col items-start justify-center h-full gap-4 px-8 border-r basis-1/4 allEMT:pt-20 allEMT:px-5">
          <div className="relative w-56 mx-auto overflow-hidden border rounded-full aspect-square allEMT:w-36">
            <Image
              src={MyLogoImg}
              fill
              priority
              placeholder="blur"
              alt="Profile picture"
            />
          </div>

          <div className="w-full space-y-2 text-center">
            <h1 className="text-2xl">Mainasara Olulanke</h1>

            <p className="text-base allEMT:px-2 dark:opacity-70">
              Front-end Engineer by day, Space Enthusiast by night
            </p>
          </div>
        </section>

        <section className="overflow-scroll grow allEMT:overflow-visible">
          <div className="sticky z-10 flex w-full gap-4 py-4 bg-white border-b justify-evenly allEMT:justify-between allEMT:px-5 dark:bg-[#0e1217] top-16">
            {lists.map((list) => (
              <button
                key={list.id}
                onClick={() => handleShownList(list.link)}
                className={`relative duration-300 hover:opacity-50 ${
                  shownList === list.link
                    ? "after:content-[''] after:absolute after:left-0 after:-bottom-4 after:h-[3px] after:rounded-full after:w-full after:bg-black dark:after:bg-white"
                    : ""
                } `}
              >
                {list.title}
              </button>
            ))}
          </div>

          <div id="top" className="scroll-mt-[120px]"></div>

          {shownList === "bookmarks" ? (
            <Bookmarks />
          ) : shownList === "history" ? (
            <History />
          ) : (
            <EditProfile />
          )}
        </section>

        <a
          href="#top"
          className="fixed z-10 px-4 py-4 text-xl text-white duration-300 bg-black border border-black rounded-full right-8 allEMT:right-5 bottom-8 allEMT:bottom-5 h-fit w-fit dark:bg-white 2xl:text-2xl dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
        >
          <FaChevronCircleUp />
        </a>
      </div>
    </>
  );
}

export default About;
