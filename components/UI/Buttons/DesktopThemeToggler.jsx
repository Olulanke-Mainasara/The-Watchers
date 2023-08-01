import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DesktopThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <button title="Toggle theme" className="w-10 h-10 border rounded-full">
        <FaSun />
      </button>
    );

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

export default DesktopThemeToggler;
