"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import SectionOne from "../../pages/About/SectionOne";
import SectionTwo from "../../pages/About/SectionTwo";
import Footer from "@/pages/Home/Footer";
import SectionThree from "../../pages/About/SectionThree";
import SectionFour from "../../pages/About/SectionFour";
import SectionFive from "../../pages/About/SectionFive";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import tubBg from '../../app/assets/ABOUT US/tub-bg.png'

function page() {

  const [isFixed,setIsFixed] = useState(false);
  const ContainerRef1 = useRef();
  const ContainerRef2 = useRef();

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ContainerRef1,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ContainerRef2,
    offset: ["start start", "end end"],
  });
  useEffect(()=>{
    const handleScroll = () => {
      const containerTop = ContainerRef2.current.getBoundingClientRect().top;
      const containerBottom = window.innerHeight - ContainerRef2.current.getBoundingClientRect().bottom;
      
        if(containerTop <= 0 && containerBottom <= 0){
          setIsFixed(true);
        }else{
          setIsFixed(false)
        }
    };

    window.addEventListener("scroll",handleScroll);

    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  },[])

  return (
    <div className=" w-full  flex flex-col gap-0 justify-center ">
      <div className=" flex h-screen bg-gradient-to-b from-red-500 to-red-900 flex-col w-full gap-8 lg:gap-10 px-8 lg:px-20 pt-6 lg:pt-10">
        <div className=" flex flex-col gap-2 lg:gap-5">
          <Navbar />
          <hr />
        </div>
        <SectionOne />
      </div>
      <SectionTwo />

      <div ref={ContainerRef1} className="h-[700vh] w-full z-0 overflow-clip">
        <SectionThree scrollYProgress1={scrollYProgress1} />
      </div>
      <div ref={ContainerRef2} className="h-[400vh] w-full z-10 relative">
        <div className={`w-screen h-screen top-0 ${isFixed ? "fixed" : "hidden"}`}>
        <Image src={tubBg}  className="w-full"/>
        </div>
        
        <SectionFour scrollYProgress2={scrollYProgress2} />
        <SectionFive scrollYProgress2={scrollYProgress2}/>
      </div>
      <Footer />
    </div>
  );
}

export default page;
