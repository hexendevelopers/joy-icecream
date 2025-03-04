import React from "react";
import bar from "../../app/assets/HERO-SECTION/barImage.png";
import Image from "next/image";
import localFont from "next/font/local";

const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

function SectionFour() {
  return (
    <div className=" w-full h-screen flex items-center justify-center bg-gradient-to-b from-red-500 to-red-900">
      <div className=" flex flex-col items-center">
        <div className=" flex flex-col gap- items-center">
          <h1 className={`${thunderLight.className} text-[14rem] font-bold`}>
            Ice Cream Bars
          </h1>
          <h1 className=" text-center w-[29rem] -mt-16">
            It’s about turning simple moments into delightful experiences. Ice
            cream isn’t just a dessert; it’s a way to bring happiness, share
            smiles, and create lasting memories.{" "}
          </h1>
        </div>
        <Image src={bar} alt="" width={1400} className=" -mt-80" />
      </div>
    </div>
  );
}

export default SectionFour;
