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

function SectionTwo() {
  return (
    <div className=" w-full h-[500px] flex  justify-center bg-gradient-to-b from-red-900 to-red-500 px-20 pt-20">
      <div className=" w-full flex items-start gap-10 justify-between">
        <div className=" w-1/2 flex flex-col gap-5">
          <h1 className={`${thunder.className} text-8xl  text-white uppercase`}>
            same great taste new different look
          </h1>
          <h1>
            Enjoy the flavors you love with a fresh new twist! We've given our
            brand a makeover, but rest assured your favorite delicious taste
            remains unchanged.{" "}
          </h1>
          <h1>
            From the creamy textures to the rich, irresistible flavors you love,
            every scoop is crafted with the same dedication that has made JOY a
            household favorite. Whether you're reliving cherished memories or
            creating new ones{" "}
          </h1>
        </div>
        <div className="w-1/3 -mt-10">
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
