import React from "react";
import logo from "../app/assets/HERO-SECTION/LOGO.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className=" w-full flex justify-between">
      <Link href={"/"}>
        <div className=" flex items-center gap-5">
          <Image src={logo} alt="logo" width={120} />
        </div>
      </Link>
      <div className=" flex items-center gap-5">
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
      </div>
    </div>
  );
}

export default Navbar;
