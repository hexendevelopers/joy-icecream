"use client";

import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import RoundBg from "../../app/assets/MOBILE/HOME/RoundBg.png";
import dub1 from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub1.png";
import dub2 from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub2.png";
import dub3 from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub3.png";
import bar1 from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/bar1.png";
import bar2 from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/bar2.png";
import { motion } from "framer-motion";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const thunderMedium = localFont({
  src: "../../app/fonts/Thunder-MediumLC.otf",
  weight: "500",
});

function SectionFive() {
  return (
    <div className=" w-full h-96 bg-gradient-to-b from-red-900 to-red-500 flex items-center justify-center relative">
      <h1
        className={`${thunder.className} hidden lg:block text-[7.05rem] md:text-[14rem] font-extrabold uppercase`}
      >
        JOY in every bite
      </h1>
      <Image src={RoundBg} className="w-full lg:hidden" />
      <div className="lg:hidden absolute top-0 left-0 w-full h-full flex pt-4 flex-col justify-center items-center">
        <h1 className={`${thunderMedium.className} text-[6rem] leading-none `}>
          JOY IN
        </h1>
        <h1
          className={`${thunderMedium.className} text-[6rem] leading-none -mt-3`}
        >
          EVERY BITE
        </h1>
      </div>
      <div className="lg:hidden w-full h-full absolute top-0 left-0">
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 100 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[6.5rem] left-6"
        >
          <Image className="w-full" src={dub1} />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 112 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[6rem] right-6"
        >
          <Image className="w-full" src={dub2} />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 100 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[14.5rem] right-3"
        >
          <Image className="w-full" src={dub3} />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 105 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[14rem] right-[8.2rem]"
        >
          <Image className="w-full" src={bar1} />
        </motion.div>
        <motion.div
          initial={{ width: 75 }}
          whileInView={{ width: 90 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[8rem] right-1"
        >
          <Image className="w-full" src={bar2} />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionFive;
