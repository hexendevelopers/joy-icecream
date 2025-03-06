"use client";
import React from "react";
import bar from "../../app/assets/HERO-SECTION/barImage.png";
import Image from "next/image";
import localFont from "next/font/local";
import barMain from "../../app/assets/HERO-SECTION/ICECREAM-BARS/barMain.png";
import bar1 from "../../app/assets/HERO-SECTION/ICECREAM-BARS/bar1.png";
import bar2 from "../../app/assets/HERO-SECTION/ICECREAM-BARS/bar2.png";
import bar3 from "../../app/assets/HERO-SECTION/ICECREAM-BARS/bar3.png";
import bar4 from "../../app/assets/HERO-SECTION/ICECREAM-BARS/bar4.png";
import { motion } from "framer-motion";

const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});
const thunderBold = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
});

function SectionFour() {
  return (
    <div className=" w-full h-screen lg:flex lg:items-center   lg:justify-center bg-gradient-to-b from-red-500 to-red-900">
      <div className="w-full h-full flex flex-col gap-5 lg:gap-0 justify-around lg:justify-normal items-center">
        <div className=" flex flex-col gap-16 lg:gap-10 justify-between lg:justify-normal items-center py-10 lg:py-0">
          <h1
            className={`${thunderBold.className} lg:${thunderLight.className} uppercase lg:normal-case text-[3.6rem] md:text-[14rem] font-bold`}
          >
            Ice Cream Bars
          </h1>
          <h1 className=" text-center w-[22.56rem] lg:w-[29rem] -mt-16">
            It’s about turning simple moments into delightful experiences. Ice
            cream isn’t just a dessert; it’s a way to bring happiness, share
            smiles, and create lasting memories.{" "}
          </h1>
        </div>
        <Image
          src={bar}
          alt=""
          width={1400}
          className=" -mt-80 hidden lg:block"
        />
        <div className="lg:hidden w-full h-1/2 relative">
          <div className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2">
            <Image src={barMain} className="w-[9.5rem]" />
          </div>
          <motion.div
            initial={{ right: 100, rotateZ:-45}}
            whileInView={{ right: 6, rotateZ:0 }}
            viewport={{ once: false, amount: 0.99 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 1,
            }}
            className="absolute bottom-16 "
          >
            <Image src={bar1} className="w-[12.5rem]" />
          </motion.div>
          <motion.div
           initial={{ right: 100, rotateZ:-45}}
           whileInView={{ right: 4, rotateZ:0 }}
           viewport={{ once: false, amount: 0.99 }}
           transition={{
             duration: 0.5,
             delay: 0.2,
             type: "spring",
             stiffness: 100,
             damping: 20,
             mass: 1,
           }}
            className="absolute bottom-1"
          >
            <Image src={bar2} className="w-[12.5rem]" />
          </motion.div>
          <motion.iv
          initial={{ left: 100, rotateZ:45}}
          whileInView={{ left: 6, rotateZ:0 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
          }}
           className="absolute bottom-16 ">
            <Image src={bar3} className="w-[12.5rem]" />
          </motion.iv>
          <motion.div
           initial={{ left: 100, rotateZ:45}}
           whileInView={{ left: 4, rotateZ:0 }}
           viewport={{ once: false, amount: 0.99 }}
           transition={{
             duration: 0.5,
             delay: 0.2,
             type: "spring",
             stiffness: 100,
             damping: 20,
             mass: 1,
           }}
           className="absolute bottom-1 ">
            <Image src={bar4} className="w-[12.5rem]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
