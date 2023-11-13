"use client";
import React from "react";
import { MoonIcon } from "@heroicons/react/20/solid";
import { MoonIcon as MoonIconOutline } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex flex-row gap-3 items-center cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MoonIcon className="text-white w-4 h-4" />
      ) : (
        <MoonIconOutline className="text-darkBlue-dark w-4 h-4" />
      )}
      <p className="dark:text-white text-darkBlue-dark text-sm font-semibold">
        {`${theme === "dark" ? "Dark" : "Light"} Mode`}
      </p>
    </div>
  );
};

export default ThemeSwitcher;
