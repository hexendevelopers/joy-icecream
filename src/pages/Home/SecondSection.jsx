"use client";

import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import stage from "../../app/assets/HERO-SECTION/icestage.png";
import dub from "../../app/assets/HERO-SECTION/132.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import useMeasure from "react-use-measure";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});

const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});
const thunderSemiBold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "500",
});

function SecondSection({ setStageTopMobile, setStageTop }) {
  const hasSetStageTop = useRef(false); // Tracks if value was set
  const hasSetStageTopMobile = useRef(false); // Tracks if value was set

  const [stageRef, stageBounds] = useMeasure({
    scroll: true,
    debounce: 50,
  });
  const [stageRefMobile, stageBoundsMobile] = useMeasure({
    scroll: true,
    debounce: 50,
  });

  useEffect(() => {
    if (!hasSetStageTop.current) {
      setStageTop(stageBounds.top);
      if (stageBounds.top != 0) {
        hasSetStageTop.current = true; // Prevent future updates
      }
    }
  }, [stageBounds]);

  useEffect(() => {
    if (!hasSetStageTopMobile.current) {
      setStageTopMobile(stageBoundsMobile.top);
      if (stageBoundsMobile.top != 0) {
        hasSetStageTopMobile.current = true; // Prevent future updates
      }
    }
  }, [stageBoundsMobile]);

  return (
    <div className=" w-screen h-[80vh] lg:h-screen bg-gradient-to-b from-red-900 to-red-800 pb-16 lg:py-5 flex justify-center items-center  text-white overflow-x-clip ">
      <div
        className={` flex flex-col justify-between items-center relative h-full  w-full `}
      >
        <div className="flex flex-col gap-5 items-center px-7 lg:px-20 ">
          <h1
            className={`${thunderSemiBold.className} text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-white`}
          >
            joy in every scoop
          </h1>
          <h1 className="w-[80%] lg:w-[30rem] text-white text-xs md:text-base leading-6 lg:leading-normal -mt-3 text-center">
            It’s about turning simple moments into delightful experiences. Ice
            cream isn’t just a dessert; it’s a way to bring happiness
          </h1>
        </div>
        <div className=" flex flex-col justify-between w-screen items-center  overflow-hidden">
          <Marquee
            autoFill
            className="w-full flex items-center gap-5 overflow-x-hidden"
          >
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
          <div className="hidden lg:flex w-full justify-center">
            <Image
              ref={stageRef}
              src={stage}
              alt="stage"
              width={600}
              className=""
            />
          </div>
          {/* ----MOBILE VERSION---- */}
          <div className=" w-full flex lg:hidden justify-center ">
            <Image
              ref={stageRefMobile}
              src={stage}
              alt="stage"
              // width={300}
              // className="w-[18.75rem] md:w-[30rem]"
              className="h-[5.70rem] w-[18.75rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
