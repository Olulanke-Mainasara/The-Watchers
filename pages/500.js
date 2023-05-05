import Head from "next/head";
import Link from "next/link";

import Nav from "@/components/Nav";
import Search from "@/components/Search/Search";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Custom404() {
  return (
    <>
      <Head>
        <title>500 - The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white bg-[url('/error.webp')] allIL:bg-[url('/errorM.jpg')] bg-cover h-screen">
        <Search />
        <Nav />
        <div className="h-full flex gap-10 flex-col items-center justify-center backdrop-brightness-[.1]">
          <h1 className="text-9xl allEMT:text-8xl">500</h1>
          <p className="text-4xl allEM:text-2xl allT:text-xl">
            Internal Server Error
          </p>
          <p className="text-xl allEM:text-base allT:text-sm text-center max-w-[650px] allEM:max-w-[350px] allT:max-w-[310px]">
            Sorry, it&apos;s not you, it&apos;s us. Please try reloading the
            page and if the issue persists, feel free to contact us or try again
            later.
          </p>
          <div className="flex items-center gap-10 allEMT:gap-6 allT:gap-4">
            <Link
              href="/"
              className="px-12 py-3 text-xl text-black duration-500 bg-white border border-black rounded-full allT:px-10 allEMT:text-base hover:text-white hover:bg-black hover:border-white"
            >
              Home
            </Link>
            <Link
              href="/contactus"
              className="flex items-center justify-center gap-2 text-xl allEMT:text-base"
            >
              Contact us <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Custom404;
