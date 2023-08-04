import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/client.config";
import { useCookie } from "react-use";

export const authContext = createContext();

const Providers = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, deleteCookie] = useCookie("isLoggedIn");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCookie("true");
        setUser(user);
      } else {
        setCookie("false");
        setUser(null);
      }
    });
  }, [setCookie]);

  return (
    <authContext.Provider value={user}>
      <ThemeProvider enableSystem attribute="class">
        {children}
      </ThemeProvider>
    </authContext.Provider>
  );
};

export default Providers;
