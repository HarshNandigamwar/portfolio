"use client";
import { useState } from "react";
import Clock from "./Clock";

const Header = () => {
  const logo = "<Shriharsh/>";

  return (
    <nav className="w-full p-3 font-mono flex flex-col md:flex-row fixed backdrop-blur-sm">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl flex cursor-pointer ">
          {logo}
        </a>
        {/* Time */}
        <Clock />
      </div>
    </nav>
  );
};

export default Header;
