/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import useStore from "../providers/navStore";
import Head from "next/head";
import Splash from "../components/Home-Components/features/Splash-Screen/Splash";
import Search from "../components/Search/Search";
import Nav from "../components/Nav";
import Hero from "../components/Home-Components/sections/Hero";
import MainBody from "../components/Home-Components/sections/MainBody/MainBody";
import Footer from "../components/Home-Components/sections/Footer";

config.autoAddCss = false;

export default function Home() {
  const { splash, toggleSplash, visited, increaseVisited } = useStore();

  useEffect(() => {
    if (visited == 1) {
      toggleSplash();
    } else {
      const timeOut = setTimeout(() => {
        toggleSplash();
        increaseVisited();
      }, 2500);
      return () => clearTimeout(timeOut);
    }
  }, []);

  return (
    <>
      <Head>
        <title>The Watchers.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <div
        className={`${
          splash ? "h-screen overflow-hidden" : "h-auto overflow-scroll"
        }`}
      >
        {visited == 0 ? <Splash /> : ""}
        <Search />
        <Nav />
        <Hero />
        <MainBody />
        <Footer />
      </div>
    </>
  );
}
