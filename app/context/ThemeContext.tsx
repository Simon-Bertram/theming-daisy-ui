"use client";
import React, { createContext, useState, useEffect } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  changeTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
  changeTheme: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  if (!isMounted) {
    return <>Loading....</>;
  }

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
