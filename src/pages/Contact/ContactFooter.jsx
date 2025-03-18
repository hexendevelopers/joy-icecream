import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import ellipseImg from "../../app/assets/MOBILE/HOME/Ellipse.png";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const signatie = localFont({
  src: "../../app/fonts/Signatie.otf",
  weight: "100 900",
});

function ContactFooter() {
  return (
    <div className=" w-full h-auto bg-gradient-to-b from-red-900 to-red-800 py-10 flex items-center justify-center text-white">
      <div className=" flex flex-col gap-5 items-center px-7 lg:px-0 text-white">
        <h1
          className={` text-6xl ${thunder.className} font-semibold text-center uppercase text-[3rem] lg:w-[30rem]`}
        >
          bringing joy to every moment with love
        </h1>
        <h1 className=" w-[23em] text-center uppercase text-sm font-semibold">
          Discover happiness in every purchase. Shop now and make every moment
          joyful!
        </h1>
        <div className=" uppercase text-xs flex items-center gap-5 lg:gap-10 mt-5">
          <h1>instagram</h1>
          <h1>facebook</h1>
          <h1>twitter</h1>
          <h1>pintrest</h1>
        </div>
        <h1
          className={`${signatie.className} text-2xl lg:text-4xl mt-16 font-semibold`}
        >
          Shri LC Java
        </h1>
      </div>

    </div>
  );
}

export default ContactFooter;
