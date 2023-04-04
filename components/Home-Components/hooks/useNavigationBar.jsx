/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useStore from "@/providers/navStore";

function useNavigationBar() {
  const [navMenu, setMenu] = useState("allIL:-right-full");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [prevScrollCounter, setPrevScrollCounter] = useState(0);
  const [visible, setVisible] = useState(true);

  const { dark } = useStore();

  function handleScroll() {
    // Get the current scroll position
    const currentScrollPos = window.scrollY;

    // Check if the user has reached the top of the page
    const atTopOfPage = currentScrollPos === 0;

    // Check if the user is scrolling up or down
    if ((currentScrollPos < prevScrollPos || atTopOfPage) && !visible) {
      // The user is scrolling up or at the top of the page
      setVisible(true);
    } else if (currentScrollPos > prevScrollPos && visible) {
      // The user is scrolling down
      setVisible(false);
    }

    // Update the previous scroll position
    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    if (prevScrollCounter === 0) {
      setPrevScrollPos(window.scrollY);
      setPrevScrollCounter((prevValue) => prevValue + 1);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function openMenu() {
    setMenu("allIL:right-0");
  }

  function closeMenu() {
    setMenu("allIL:-right-full");
  }

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [dark]);

  return [navMenu, visible, openMenu, closeMenu];
}

export default useNavigationBar;
