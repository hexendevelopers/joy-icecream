"use client";
import { motion, useTransform } from 'framer-motion';

import localFont from 'next/font/local';
import React from 'react'

const thunderSemibold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600"
});

const SectionThree = ({scrollYProgress1}) => {

  const scale = useTransform(scrollYProgress1, [0,0.100,1], [1,20,55]);
  const translateY = useTransform(
    scrollYProgress1,
    [0,1],
    [0,500]
  );
  const translateX = useTransform(
    scrollYProgress1,
    [0,1],
    [0,125]
  );

  return (
    <>
     <motion.div
    style={{
      scale:scale,
      translateY:translateY,
      translateX:translateX
    }}
     className='hidden lg:flex sticky text-white top-0 left-0 w-screen h-screen bg-gradient-to-b from-red-500 to-red-900  items-center justify-center overflow-hidden z-0'>
        <h1 className={`${thunderSemibold.className} text-[#F5A5A5] text-[5rem] lg:text-[15rem]`}>THE JOURNEY</h1>
    </motion.div>

    {/* -----mobile-version-- */}
    <motion.div
    style={{
      scale:scale,
      // translateY:translateY,
      // translateX:translateX
    }}
     className='lg:hidden sticky top-0 left-0 w-screen h-screen bg-gradient-to-b from-red-500 to-red-900 flex items-center justify-center overflow-hidden z-0'>
        <h1 className={`${thunderSemibold.className} text-[#F5A5A5] text-[5rem] lg:text-[15rem]`}>THE JOURNEY</h1>
    </motion.div>
    </>
   
  )
}

export default SectionThree