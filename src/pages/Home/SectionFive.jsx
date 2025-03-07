"use client";

import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import RoundBg from "../../app/assets/MOBILE/HOME/RoundBg.png";
import dub1Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub1.png";
import dub2Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub2.png";
import dub3Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub3.png";
import bar1Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/bar1.png";
import bar2Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/bar2.png";
import { motion } from "framer-motion";
import bar1 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/bar1.png'
import bar2 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/bar2.png'
import bar3 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/bar3.png'
import dub1 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/12.png'
import dub2 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/13.png'
import dub3 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/14.png'
import dub4 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/15.png'
import dub5 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/16.png'
import dub6 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/17.png'
import rode from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/rode.png'

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
    <div className=" w-full h-96 lg:h-[80vh] bg-gradient-to-b from-red-800 to-red-500 flex items-center justify-center relative">
      <div className="absolute inset-0 w-full">
      <Image src={rode} className="w-full hidden lg:block" />
      </div>
      
      <h1
        className={`${thunderMedium.className} hidden z-10 pt-[6rem] lg:block text-[7.05rem] lg:text-[16.5rem] font-extrabold uppercase`}
      >
        JOY in every bite
      </h1>
      
      <div className="hidden lg:block w-full h-full absolute top-0 left-0">
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[10.5rem] left-8"
        >
          <Image className="w-full" src={dub1} />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[17rem] left-[31rem] z-30"
        >
          <Image className="w-full" src={dub2} />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[22.5rem] left-[14.5rem] z-30"
        >
          <Image className="w-full" src={dub3} />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[9.5rem] right-[37.5rem] z-30"
        >
          <Image className="w-full" src={dub4} />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[17rem] right-20 z-30"
        >
          <Image className="w-full" src={dub5} />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[20.5rem] right-[21.5rem] z-30"
        >
          <Image className="w-full" src={dub6} />
        </motion.div>
        <motion.div
          initial={{ width: 60 }}
          whileInView={{ width: 160 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[10rem] right-1 z-30"
        >
          <Image className="w-full" src={bar1} />
        </motion.div>
        <motion.div
          initial={{ width: 75 }}
          whileInView={{ width: 250 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[10rem] left-[14rem] z-30"
        >
          <Image className="w-full" src={bar2} />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 210 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[20rem] right-[35.5rem] z-30"
        >
          <Image className="w-full" src={bar3} />
        </motion.div>
      </div>


      {/* ----MOBILE-VERSION---- */}
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
          <Image className="w-full" src={dub1Mob} />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 112 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[6rem] right-6"
        >
          <Image className="w-full" src={dub2Mob} />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 100 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[14.5rem] right-3"
        >
          <Image className="w-full" src={dub3Mob} />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 105 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[14rem] right-[8.2rem]"
        >
          <Image className="w-full" src={bar1Mob} />
        </motion.div>
        <motion.div
          initial={{ width: 75 }}
          whileInView={{ width: 90 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[8rem] right-1"
        >
          <Image className="w-full" src={bar2Mob} />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionFive;
