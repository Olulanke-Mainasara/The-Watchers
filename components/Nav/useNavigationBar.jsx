/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function useNavigationBar() {
  const [navMenu, setMenu] = useState("allIL:-right-full");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [prevScrollCounter, setPrevScrollCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
      setMounted(true);
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

  const renderThemeToggler = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("light")}
          className="flex items-center justify-center w-10 h-10 text-xl text-white rounded-full"
        >
          <FaSun />
        </button>
      );
    } else {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("dark")}
          className="flex items-center justify-center w-10 h-10 text-xl text-black rounded-full"
        >
          <FaMoon />
        </button>
      );
    }
  };

  const renderMobileThemeToggler = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("light")}
          className="absolute flex items-center justify-center w-10 h-10 text-xl text-black bg-white rounded-full top-7 left-6 laptop:hidden allLM:hidden"
        >
          <FaSun />
        </button>
      );
    } else {
      return (
        <button
          title="Toggle theme"
          onClick={() => setTheme("dark")}
          className="absolute flex items-center justify-center w-10 h-10 text-xl text-white bg-black rounded-full top-7 left-6 laptop:hidden allLM:hidden"
        >
          <FaMoon />
        </button>
      );
    }
  };

  return [
    navMenu,
    visible,
    openMenu,
    closeMenu,
    renderThemeToggler,
    renderMobileThemeToggler,
  ];
}

export default useNavigationBar;
