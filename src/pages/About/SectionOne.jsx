import React from "react";
import localFont from "next/font/local";
import vintageImage from "../../app/assets/ABOUT US/HERO.png";
import Image from "next/image";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

function SectionOne() {
  return (
    <div className=" w-full h-[600px] relative">
      <Image
        src={vintageImage}
        alt="old joy factory"
        className=" w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className=" flex flex-col gap-5 text-center items-center text-white">
          <h1 className={` uppercase text-9xl text-white ${thunder.className}`}>
            about joy ice cream
          </h1>
          <h1 className={`${thunder.className} text-4xl font-bold uppercase`}>
            indian ice cream industry, since 1948
          </h1>
          <h1 className=" w-[650px]">
            Since our beginning, Joy Ice Cream has been spreading smiles with
            every scoop. While trends change, our passion for rich, creamy
            perfection remains the same.
          </h1>
          <h1 className=" w-[550px]">
            Come for the indulgent classics and signature scoops. Stay for the
            endless flavors of joy.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
