import localFont from "next/font/local";
import React from "react";
import lcJava from '../../app/assets/ABOUT US/lcjava.png'
import rode from '../../app/assets/ABOUT US/rode.png'
import dub from '../../app/assets/ABOUT US/icetub.png'
import Image from "next/image";
import { motion, useTransform } from "framer-motion";

const thunderMedium = localFont({
  src: "../../app/fonts/Thunder-MediumLC.otf",
  weight: "500",
});
const thunderSemibold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});
const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

const SectionFive = ({scrollYProgress2}) => {

  const scale = useTransform(scrollYProgress2,[0,0.5,0.75,1],[0.7,0.7,0.7,1])
  const translateY = useTransform(scrollYProgress2,[0,0.55,1],[0,0,0])

  return (
    <motion.div 
    style={{
      scale:scale,
      translateY:translateY
    }}
    className="sticky mt-[100vh] top-0 h-screen w-screen bg-gradient-to-r from-red-900 to-red-500 overflow-hidden">
       <div className="relative ">
       <div className="z-0 absolute right-0 top-0 w-full h-full">
      <Image src={rode} className="bg-cover h-full w-full "/>
      </div>
      <div className="w-full h-full bg-transparent flex z-10">
        <div className="w-[55%] ">
          <div className="h-full w-full flex flex-col gap-16 px-14 py-20">
            <div className="w-full">
              <h1 className={` uppercase ${thunderMedium.className} text-6xl leading-none`}>
              Same Great Taste, New Look
              </h1>
              <h1 className={`${thunderSemibold.className} text-[7rem] uppercase leading-none`}>YOUR FAVOURITE JOY</h1>
            </div>

            <div className="w-full flex flex-col gap-7 z-20">
                <h2 className={`${thunderMedium.className} text-6xl`}>2025</h2>
                <p className={`text-xl`}>JOY has grown from strength to strength; it has been a household name across the nation for decades. JOY has come to become synonymous with trust and pure happiness.</p>
                <p className={`text-xl`}>People of almost all age groups are able to relate to JOY and its products. Some of the most well-known products include the JOY Ball, Cassata, and many more.</p>
                <p className={`text-xl`}>JOY has been successful in building an industrial franchising structure like none other and has always been ahead of its times. Accolades has been a part of JOY all through its span so far, and the achievements of JOY.</p>
            </div>
          </div>
        </div>

        <div className="w-[45%] z-20 flex items-center justify-center">
            <Image src={dub} className="w-[70%]"/>
        </div>
      </div>
       </div>
    </motion.div>
  );
};

export default SectionFive;