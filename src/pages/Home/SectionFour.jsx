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
import halfCircle from "../../app/assets/HERO-SECTION/Gradient 14.png";
import { motion } from "framer-motion";

const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

const thunderSemibold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});

const thunderBold = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
});

function SectionFour() {
  return (
    <div className=" w-full h-screen relative lg:flex lg:items-center   lg:justify-center bg-gradient-to-b from-red-500 to-red-900">
      <div className="absolute z-0 top-0 left-0 hidden lg:block">
        <Image src={halfCircle} className="w-full h-full" />
      </div>
      <div className="w-full h-full flex flex-col gap-5 lg:gap-0 justify-around lg:justify-normal items-center">
        <div className=" flex flex-col gap-16 lg:gap-10 justify-between lg:justify-normal items-center py-32 lg:py-0">
          <h1
            className={`${thunderSemibold.className} lg:${thunderSemibold.className} uppercase lg:uppercase text-[3.6rem] md:font-semibold md:text-[12rem] md:uppercase font-bold`}
          >
            Ice Cream Bars
          </h1>
          <h1 className=" text-center w-[22.56rem] lg:-mt-24 lg:w-[30rem] -mt-16">
            It’s about turning simple moments into delightful experiences. Ice
            cream isn’t just a dessert; it’s a way to bring happiness, share
            smiles, and create lasting memories.{" "}
          </h1>
        </div>
        <Image src={bar} alt="" width={1400} className=" -mt-80 hidden " />
        {/* ----BARS DESKTOP ANIMATION--- */}
        <div className="hidden lg:block w-full h-1/2 relative">
          <div className="absolute z-50 -bottom-32 left-1/2 transform -translate-x-1/2">
            <Image src={barMain} className="w-[12.5rem]" />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 transform -translate-x-1/2  w-[10.5rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0 }}
              whileInView={{ rotateZ: 40, x: 130 }}
              viewport={{ once: true, amount: 0.99 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={bar1} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2   w-[10.5rem] ">
            <motion.div
               initial={{ rotateZ: 0, x: 0, y: 0 }}
               whileInView={{ rotateZ: 60, x: 185, y: 20 }}
              viewport={{ once: true, amount: 0.99 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={bar2} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 transform -translate-x-1/2  w-[10.5rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0 }}
              whileInView={{ rotateZ: -40, x: -130 }}
              viewport={{ once: true, amount: 0.99 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={bar3} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2   w-[10.5rem] ">
            <motion.div
                 initial={{ rotateZ: 0, x: 0, y: 0 }}
                 whileInView={{ rotateZ: -60, x: -185, y: 20 }}
              viewport={{ once: true, amount: 0.99 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={bar4} className="w-full" />
            </motion.div>
          </div>
        </div>

        {/* -----BARS ANIMATION MOBILE VERSION--- */}
        <div className="lg:hidden w-full h-1/2  relative">
          <div className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2">
            <Image src={barMain} className="w-[9.5rem]" />
          </div>
          <div className="absolute bottom-28 left-1/2 z-20 transform -translate-x-1/2  w-[7rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0 }}
              whileInView={{ rotateZ: 30, x: 90 }}
              viewport={{ once: true, amount: 0.99 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={bar1} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2   w-[7rem] ">
            <motion.div
               initial={{ rotateZ: 0, x: 0 }}
               whileInView={{ rotateZ: 35, x: 100 }}
              viewport={{ once: true, amount: 0.99 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={bar2} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-28 left-1/2 z-20 transform -translate-x-1/2  w-[7rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0 }}
              whileInView={{ rotateZ: -30, x: -90 }}
              viewport={{ once: true, amount: 0.99 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={bar3} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2   w-[7rem] ">
            <motion.div
               initial={{ rotateZ: 0, x: 0 }}
               whileInView={{ rotateZ: -35, x: -100 }}
              viewport={{ once: true, amount: 0.99 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={bar4} className="w-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
