"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <nav>
      <ul className="flex justify-between container mx-auto py-6 items-center text-2xl">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex gap-5">
          <button
            className="btn btn-primary"
            onClick={() => changeTheme("light")}
          >
            Light
          </button>
        </div>
        <div className="flex gap-5">
          <button
            className="btn bg-black text-gray-200 hover:text-black"
            onClick={() => changeTheme("dark")}
          >
            Dark
          </button>
        </div>
        <div className="flex gap-5">
          <button
            className="btn bg-slate-700 text-white hover:text-black"
            onClick={() => changeTheme("coffee")}
          >
            Coffee
          </button>
        </div>
        <div className="flex gap-5">
          <button
            className="btn btn-secondary"
            onClick={() => changeTheme("corporate")}
          >
            Corporate
          </button>
        </div>
        <div className="flex gap-5">
          <button className="btn" onClick={() => changeTheme("business")}>
            Business
          </button>
        </div>
        <div className="flex gap-5">
          <button className="btn" onClick={() => changeTheme("cyberpunk")}>
            Cyberpunk
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
