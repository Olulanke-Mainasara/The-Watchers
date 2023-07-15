/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useNavigationBar() {
  const [navMenu, setMenu] = useState("-right-full");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [prevScrollCounter, setPrevScrollCounter] = useState(0);
  const [visible, setVisible] = useState(true);

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
    setMenu("right-0");
  }

  function closeMenu() {
    setMenu("-right-full");
  }

  return [navMenu, visible, openMenu, closeMenu];
}

export default useNavigationBar;
