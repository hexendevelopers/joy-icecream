"use client";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({showMenu,setShowMenu}) => {

      //---CONTROLLING SCROLL IN MENU ----
  useEffect(() => {
    if(showMenu) {
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    }
  },[showMenu])

  return (
    <div className={`${showMenu ? "block" : "hidden" } overflow-y-hidden z-50 fixed top-0 left-0 w-screen h-screen p-3 bg-gradient-to-b from-red-500 to-red-900`}>
      <div>
        <div className="w-full flex items-center justify-between">
            <h1>MENU</h1>
            <IoClose className="text-xl" onClick={() => setShowMenu(false)}/>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
