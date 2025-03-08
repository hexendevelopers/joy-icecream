import localFont from "next/font/local";
import React from "react";
import lcJava from "../../app/assets/ABOUT US/lcjava.png";
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
const signatie = localFont({
  src: "../../app/fonts/Signatie.otf",
  weight: "100 900",
});

const SectionFour = ({ scrollYProgress2 }) => {
  const scale = useTransform(scrollYProgress2, [0, 0.25, 0.5], [1, 0.7, 0.7]);
  const translateY = useTransform(
    scrollYProgress2,
    [0, 0.25, 0.6],
    [0, 0, -800]
  );

  return (
    <motion.div
      style={{
        scale: scale,
        translateY: translateY,
      }}
      className="sticky top-0  h-screen w-screen bg-gradient-to-r from-[#EC3D3D] to-[#ea2729] z-20"
    >
      <div className="relative h-full">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 2,
          }}
          className="absolute top-0 left-0 w-full h-full bg-[#F5A5A5] z-30 "
        ></motion.div>
        <div className="w-full h-full flex">
          <div className="w-[55%] ">
            <div className="h-full w-full flex flex-col gap-16 px-14 pt-16 pb-20">
              <div className="w-full">
                <h1
                  className={` uppercase ${thunderMedium.className} text-6xl leading-none`}
                >
                  Founder of Joy
                </h1>
                <h1
                  className={`${thunderSemibold.className} text-[7rem] uppercase leading-none`}
                >
                  Late Shri. L.C.Java
                </h1>
              </div>

              <div className="w-full flex flex-col gap-7">
                <h2 className={`${thunderMedium.className} text-6xl`}>1948</h2>
                <p className={`text-xl`}>
                  JOY’s Founder, Late Shri L.C. Java, a B.Sc. Honors in Geology
                  and an assistant mines manager at Killick Nixon, went to
                  London for training at the Cornwall School of Mines.
                </p>
                <p className={`text-xl`}>
                  {" "}
                  A series of mine accidents led him to opt out of the mining
                  industry. He enrolled himself at Blackpool School of Food
                  Technology, where his course included a stint at the UK Ice
                  Cream Alliances.
                </p>
                <p className={`text-xl`}>
                  After learning more about ice creams and their manufacturing
                  process, he came back to India to start JOY Ice Creams. Mr.
                  Java leased the basement at Rhythm House in Kala Ghoda for ₹12
                  a month, and the first ice cream company in India was born.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[45%] h-full relative">
            <div className="absolute w-full h-full top-0 left-0 flex items-end justify-center">
              <div className="py-16 pl-12 w-full flex flex-col gap-6">
                <h1
                  className={`${signatie.className} text-2xl lg:text-5xl mt-16 font-semibold`}
                >
                  Shri LC Java
                </h1>
                <p className="text-xl font-extralight">
                  The Father of The Indian Ice Cream Industry
                </p>
              </div>
            </div>
            <Image src={lcJava} className="h-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionFour;
