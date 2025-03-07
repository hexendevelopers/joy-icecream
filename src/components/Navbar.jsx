"use client";
import React, { useState } from "react";
import logo from "../app/assets/HERO-SECTION/LOGO.png";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import MobileMenu from "../components/MobileMenu";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" w-full flex justify-between items-center z-20 overflow-hidden">
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Link className="flex items-center justify-start" href={"/"}>
      <div className=" flex items-center gap-5 justify-start ">
          <Image className="w-[6rem] lg:w-[7.5rem]" src={logo} alt="logo" />
        </div>
      </Link>
      <div className=" items-center gap-5 hidden lg:flex">
        <Link href={"/"}>
          <button className="  text-white px-5 py-2 rounded-full">Home</button>
        </Link>
        <Link href={"/about"}>
          <button className="  text-white px-5 py-2 rounded-full">About</button>
        </Link>
        <Link href={"/contact"}>
          <button className="  text-white px-5 py-2 rounded-full">
            Contact
          </button>
        </Link>
        <Link href={"/catalog"}>
          <button className="  text-white px-5 py-2 rounded-full">
            Catalog
          </button>
        </Link>
      </div>
      <div className="px-2 lg:hidden">
        <HiMenu onClick={() => setShowMenu(true)} className="text-3xl " />
      </div>
    </div>
  );
}

export default Navbar;
