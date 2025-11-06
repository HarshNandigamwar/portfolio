"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { FaX } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logo = "<Shriharsh/>";
  const menu = [
    {
      name: "Home",
      nav: "home",
    },
    {
      name: "About",
      nav: "about",
    },
    {
      name: "Skills",
      nav: "skills",
    },
    {
      name: "Projects",
      nav: "project",
    },
    {
      name: "Contact",
      nav: "contact",
    },
  ];

  return (
    <nav className="w-full p-3 font-mono flex flex-col md:flex-row fixed backdrop-blur-sm">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <p className="text-2xl md:text-3xl flex ">{logo}</p>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-5 ">
          {menu.map((data) => {
            return (
              <a
                className="text-2xl p-1 hover:text-purple-400 hover:underline hover:underline-offset-8 cursor-pointer "
                key={data.name}
                href={`#${data.nav}`}
              >
                {data.name}
              </a>
            );
          })}
        </div>
        {/* hamburger */}
        <div
          className="flex md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <FaX className="text-2xl hover:text-purple-400 cursor-pointer" />
          ) : (
            <MdMenu className="text-3xl hover:text-purple-400 cursor-pointer" />
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex md:hidden flex-col items-center p-3 text-2xl mt-2 transition ease-in-out duration-initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {menu.map((data) => {
              return (
                <a
                  key={data.name}
                  href={`#${data.nav}`}
                  className="hover:text-purple-400 py-1"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {data.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
