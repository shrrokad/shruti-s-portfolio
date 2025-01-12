"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../assets/images/icon.svg";

const navOption = [
  {
    name: "Home",
    link: "#Home",
  },
  {
    name: "Work",
    link: "#Work",
  },
  {
    name: "Portfolio",
    link: "#Portfolio",
  },
  {
    name: "Contact",
    link: "#Contact",
  },
];

const Navbar = () => {
  return (
    <div className="h-[10rem] flex items-center justify-between  w-full px-[10rem] z-20">
      <div>
        <Image
          src={logo}
          alt="logo"
          className="w-[6.5rem] h-[6.5rem] cursor-pointer"
          width={0}
          height={0}
        />
      </div>
      <div>
        <ul className="flex gap-[4.9rem] font-[saira] text-[2rem]">
          {navOption.map((nav, i) => (
            <li key={i}>
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
