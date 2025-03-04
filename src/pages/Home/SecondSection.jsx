import React from "react";
import localFont from "next/font/local";
import stage from "../../app/assets/HERO-SECTION/icestage.png";
import dub from "../../app/assets/HERO-SECTION/132.png";
import Image from "next/image";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

function SecondSection() {
  return (
    <div className=" w-full h-screen bg-gradient-to-b from-red-500 to-red-900 px-20 flex items-center justify-center">
      <div
        className={` flex flex-col gap-5 items-center relative h-full justify-center w-full`}
      >
        <h1 className={`${thunder.className} text-7xl uppercase font-bold`}>
          IT's about biringing joy in every scoop
        </h1>
        <h1 className=" w-96 text-center">
          It’s about turning simple moments into delightful experiences. Ice
          cream isn’t just a dessert; it’s a way to bring happiness, share
          smiles, and create lasting memories.{" "}
        </h1>
        <div className=" flex items-center gap-5 overflow-hidden">
          <h1
            className={`${thunderLight.className} text-[14rem] flex flex-shrink-0  uppercase`}
          >
            scoop up!
          </h1>
          <h1
            className={`${thunderLight.className} text-[14rem] flex flex-shrink-0  uppercase`}
          >
            scoop up!
          </h1>
          <h1
            className={`${thunderLight.className} text-[14rem] flex flex-shrink-0  uppercase`}
          >
            scoop up!
          </h1>
          <div className=" absolute left-0 top-0 w-full h-full flex items-end justify-center ">
            <div className="relative w-full flex flex-col items-center">
              <Image src={dub} alt="dub" width={420} className=" absolute bottom-10"/>
              <Image src={stage} alt="stage" width={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
