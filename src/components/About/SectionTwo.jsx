"use client";

import React from "react";
import localFont from "next/font/local";
import ReactCompareImage from "react-compare-image";
import oldBox from "../../app/assets/ABOUT US/old-icecream.png";
import newBox from "../../app/assets/ABOUT US/new-icecream.png";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});
const thunderSemibold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});

function SectionTwo() {
  return (
    <div className=" w-full h-auto lg:h-[500px] flex justify-center bg-gradient-to-b from-red-900 to-red-500 px-8 lg:px-20 lg:pt-20">
      <div className=" w-full flex flex-col lg:flex-row lg:items-start items-center gap-10 justify-between">
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <h1 className={`${thunderSemibold.className} lg:${thunder.className} text-[3.2rem] lg:text-8xl leading-none  text-white uppercase`}>
            same great taste new different look
          </h1>
          <h1 className="text-white">
            Enjoy the flavors you love with a fresh new twist! We've given our
            brand a makeover, but rest assured your favorite delicious taste
            remains unchanged.{" "}
          </h1>
          <h1 className="text-white">
            From the creamy textures to the rich, irresistible flavors you love,
            every scoop is crafted with the same dedication that has made JOY a
            household favorite. Whether you're reliving cherished memories or
            creating new ones{" "}
          </h1>
        </div>
        <div className="w-full lg:w-1/3 -mt-10 py-12 lg:py-0">
          <div className="w-full h-full overflow-hidden rounded-3xl">
            <ReactCompareImage
              className="w-full h-full"
              leftImage="new-icecream.png"
              rightImage="old-icecream.png"
              sliderLineColor="#fff"
              sliderLineWidth={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
