"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import { Bebas_Neue, Montez } from "next/font/google";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import bg from "../../app/assets/HERO-SECTION/background-one.png";
import Image from "next/image";
import dubOne from "../../app/assets/HERO-SECTION/130.png";
import dubTwo from "../../app/assets/HERO-SECTION/131.png";
import dubThree from "../../app/assets/HERO-SECTION/132.png";
import { motion } from "framer-motion";
import coconut from "../../app/assets/HERO-SECTION/sunlover-cocco-1.png";
import choclate from "../../app/assets/HERO-SECTION/CHOCOLATE.png";
import berry from "../../app/assets/HERO-SECTION/straw.png";
import caramel from "../../app/assets/HERO-SECTION/caramel.png";
import flower from "../../app/assets/HERO-SECTION/sunlover-vanilla-1.png";

const thunder = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

const BebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: "600",
  subsets: ["latin"],
});

function Hero() {
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-gradient-to-b from-red-900 to-red-500  relative">
      <Image src={bg} alt="bg" className=" w-full h-full bg-cover" />
      <div className=" w-full h-full absolute top-0 left-0 pt-10 px-20">
        <div className=" w-full h-full flex flex-col justify-between">
          <div className=" flex flex-col gap-5">
            <Navbar />
            <hr className=" w-full border-gray-300" />
            <div className=" flex flex-col gap-3 -mt-16">
              <div className=" w-full flex justify-center ">
                <h1
                  className={`text-[16.5rem] ${thunder.className} font-extrabold `}
                >
                  SCOOP THE JOY!
                </h1>
              </div>
              <h1
                className={` ${manrope.className} w-72 leading-9  text-white text-[1.75rem] font-semibold -mt-32 `}
              >
                Indulge in the creamiest flavors, crafted with love!
              </h1>
            </div>
          </div>
          <div className=" w-full flex justify-center relative">
            <motion.div className=" z-10">
              <Image
                src={dubThree}
                alt="main one"
                width={430}
                className=" -mt-36 z-10 "
              />
            </motion.div>
            <motion.div
              className="absolute -mt-14 ml-96"
              initial={{ x: -230, rotateZ: -30 }}
              animate={{ x: 0, rotateZ: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image src={dubOne} alt="second one" width={450} className=" " />
            </motion.div>

            <motion.div
              initial={{ x: 230, rotateZ: 30 }}
              animate={{ x: 0, rotateZ: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              className="absolute -mt-14 -ml-96"
            >
              <Image src={dubTwo} alt="second one" width={450} className=" " />
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full absolute top-0 left-0 flex items-center justify-between">
        <div className=" flex items-center gap-32 w-full justify-between overflow-hidden">
          <motion.div
            initial={{ x: 300, y: 200 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
            }}
            className=" -ml-20 z-50"
          >
            <Image src={coconut} width={200} />
          </motion.div>
          <motion.div
            initial={{ x: 100, y: 300 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
            }}
            className=" relative -mt-80 ml-16 bg-whit   z-50 flex flex-shrink-0"
          >
            <Image src={choclate} width={130} className="z-50 mt-44" />
          </motion.div>
          <motion.div
            initial={{ x: 100, y: 300 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
            }}
            className=" z-10 -mt-40  ml-56 flex flex-shrink-0"
          >
            <Image src={berry} width={120} />
          </motion.div>
          <motion.div
            className=" "
            initial={{ x: 0, y: 300 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
            }}
          >
            <Image src={caramel} width={140} />
          </motion.div>
          <motion.div
            initial={{ x: -300, y: 300 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
            }}
            className=" z-20 -mt-54 -mr-16 -mt-28 "
          >
            <Image src={flower} width={160} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
