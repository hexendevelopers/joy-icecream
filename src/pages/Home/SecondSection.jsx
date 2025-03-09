"use client";

import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import stage from "../../app/assets/HERO-SECTION/icestage.png";
import dub from "../../app/assets/HERO-SECTION/132.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import  useMeasure from "react-use-measure";


const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});

const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

function SecondSection({setStageTop}) {

  const hasSetStageTop = useRef(false); // Tracks if value was set


  const [stageRef,stageBounds] = useMeasure({
    scroll: true,
  debounce: 50
  })

  useEffect(() => {
  if (!hasSetStageTop.current) {
    setStageTop(stageBounds.top);
    if(stageBounds.top != 0){
      hasSetStageTop.current = true; // Prevent future updates

    }
  }
}, [stageBounds]);


  return (
    <div className=" w-full h-screen bg-gradient-to-b from-red-500 to-red-900 py-16 px-7 md:px-20 flex items-center justify-center">
      <div
        className={` flex flex-col gap-0 md:gap-5 items-center relative h-full  py-16  md:py-0 w-full`}
      >
        <h1 className={`${thunder.className} text-7xl uppercase font-bold`}>
          IT's about biringing joy in every scoop
        </h1>
        <h1 className="w-full md:w-[30rem] text-sm md:text-base leading-6 md:leading-normal -mt-3 text-start md:text-center">
          It’s about turning simple moments into delightful experiences. Ice
          cream isn’t just a dessert; it’s a way to bring happiness, share
          smiles, and create lasting memories.{" "}
        </h1>
        <div className=" flex w-screen items-center gap-5 overflow-hidden">
          <Marquee autoFill className="w-full flex items-center gap-5 overflow-x-hidden">

          <h1
            className={`${thunderLight.className} text-[14rem] hidden md:flex flex-shrink-0  uppercase px-10`}
          >
            scoop up!
          </h1>
          <h1
            className={`${thunderLight.className} text-[14rem] hidden md:flex flex-shrink-0 uppercase text-transparent [-webkit-text-stroke:2px_white]`}
          >
            scoop up!
          </h1>
   


   
          </Marquee>
          <div className=" absolute left-0 top-0 w-full h-full flex items-end justify-center pb-14 lg:pb-0">
            <div className="hidden md:flex relative w-full  flex-col items-center">
              {/* <Image src={dub} alt="dub" width={420} className=" absolute bottom-12 left-[48.5%] transform -translate-x-1/2 z-10"/> */}
              <Image  ref={stageRef} src={stage} alt="stage" width={600} className="absolute -bottom-10 bg-yellow-400"/>
            </div>
            {/* ----MOBILE VERSION---- */}
            <div className="relative w-full flex md:hidden flex-col items-center ">
              {/* <Image src={dub} alt="dub" width={264} className=" absolute -bottom-4 left-[48.5%] transform -translate-x-1/2 z-10"/> */}
              <Image src={stage} alt="stage" width={500} className="absolute -bottom-16"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
