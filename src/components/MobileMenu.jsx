"use client";
import localFont from "next/font/local";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import menuStage from "../app/assets/MOBILE/menu-stage.png";
import dub from "../app/assets/HERO-SECTION/132.png";
import Image from "next/image";

const thunderMedium = localFont({
  src: "../app/fonts/Thunder-LC.ttf",
  weight: "400",
});
const thunderSemibold = localFont({
  src: "../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});

const MobileMenu = ({ showMenu, setShowMenu }) => {
  //---CONTROLLING SCROLL IN MENU ----
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div
      className={`${
        showMenu ? "block" : "hidden"
      } overflow-y-hidden z-50 fixed top-0 left-0 w-screen h-screen p-3 bg-gradient-to-b from-red-900 to-red-500`}
    >
      <div className="px-4 py-8">
        <div className="w-full flex items-center justify-between ">
          <h1 className={`text-3xl ${thunderMedium.className}`}>MENU</h1>
          <IoClose className="text-3xl" onClick={() => setShowMenu(false)} />
        </div>
        <div className="w-full h-full flex flex-col gap-[18rem] justify-between">
          <div className={` w-full flex flex-col text-white py-16`}>
            <Link onClick={() => setShowMenu(false)} href={"/"}>
              <button
                className={`${thunderSemibold.className} text-6xl py-1.5`}
              >
                HOME
              </button>
            </Link>
            <Link onClick={() => setShowMenu(false)} href={"/about"}>
              <button
                className={`${thunderSemibold.className} text-6xl py-1.5`}
              >
                ABOUT
              </button>
            </Link>
            <Link onClick={() => setShowMenu(false)} href={"/catalog"}>
              <button
                className={`${thunderSemibold.className} text-6xl py-1.5`}
              >
                CATALOG
              </button>
            </Link>
            <Link onClick={() => setShowMenu(false)} href={"/contact"}>
              <button
                className={`${thunderSemibold.className} text-6xl py-1.5`}
              >
                CONTACT
              </button>
            </Link>
          </div>
          <div className="w-full flex flex-col gap-1 items-center">
            <div className="relative w-full flex md:hidden flex-col items-center ">
              <Image
                src={dub}
                alt="dub"
                width={200}
                className=" absolute bottom-20 left-[48.5%] transform -translate-x-1/2 z-10"
              />
              <Image
                src={menuStage}
                alt="stage"
                width={350}
                className="absolute -bottom-2"
              />
            </div>
            <div className=' uppercase text-[0.7rem] lg:text-xs flex  items-center gap-3.5 lg:gap-10 mt-5'>
            <h1>instagram</h1>
            <h1>facebook</h1>
            <h1>twitter</h1>
            <h1>pintrest</h1>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
