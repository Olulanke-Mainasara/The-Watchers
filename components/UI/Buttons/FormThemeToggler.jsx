import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const FormThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button
        title="Toggle theme"
        onClick={(e) => {
          e.preventDefault();
          setTheme("light");
        }}
        className="items-center justify-center hidden w-10 h-10 text-2xl text-black rounded-full xl:flex"
      >
        <FaSun />
      </button>
    );
  } else {
    return (
      <button
        title="Toggle theme"
        onClick={(e) => {
          e.preventDefault();
          setTheme("dark");
        }}
        className="items-center justify-center hidden w-10 h-10 text-2xl text-black rounded-full xl:flex"
      >
        <FaMoon />
      </button>
    );
  }
};

export default FormThemeToggler;
