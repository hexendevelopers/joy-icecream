"use client"
import Navbar from "@/components/Navbar";
import React from "react";
import localFont from "next/font/local";
import Footer from "../../pages/Contact/ContactFooter";
import Image from "next/image";
import dubba from "../assets/HERO-SECTION/132.png";
import MobileMenu from "@/components/MobileMenu";
import strawberry from "../assets/CUTY/Rectangle 15.png";
import { useState } from "react";
import One from '../assets/CUTY/Rectangle 14.png'
import two from '../assets/CUTY/Rectangle 16.png'
import three from '../assets/CUTY/Rectangle 17.png'
import four from '../assets/CUTY/sunlover-caramel-1.png'
import frame from '../assets/CUTY/Frame 17.png'

const styles = {
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  }
};

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});



function page() {
  const catalog = ["tub", "cone", "bulk", "ripplette", "bar", "sipup", "cup"];
  const img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="w-full h-auto flex flex-col gap-10 bg-gradient-to-b from-red-900 to-red-500">
      <div className=" px-5 md:px-20 pt-10 flex flex-col gap-5  ">
        <Navbar />
        <hr />
      </div>

      <div className="felx flex-col h-full gap-5">
        <div className="w-full flex justify-center relative">
          <h1 className={`${thunder.className} md:text-[17rem] text-5xl flex flex-shrink-0 uppercase text-white`}>
            catalog
          </h1>
          
          {/* Decorative images around the text */}

          <Image
            src={One}
            alt="blueberry"
            width={80}
            className=" hidden md:block absolute top-52 right-80 transform -translate-y-1/2 md:w-[140px] animate-float-fast"
          />
          <Image
            src={strawberry}
            alt="strawberry"
            width={80}
            className="hidden md:block  absolute left-[48%] top-12 md:w-[100px] animate-float-slow"
          />
          <Image
            src={four}
            alt="caramel"
            width={380}
            className="hidden md:block  absolute right-[32%] top-20 transform -translate-y-1/2 md:w-[150px] animate-float-fast"
          />
          <Image
            src={three}
            alt="vanilla"
            width={140}
            className="hidden md:block  absolute left-[27rem] bottom-0 md:w-[130px] animate-float-slow"
          />
          <Image
            src={two}
            alt="orange"
            width={180}
            className="hidden md:block  absolute left-80 top-10 md:w-[80px] animate-float-fast"
          />
        </div>
        <div className=" flex justify-center w-full ">
          <h1 className="w-96 text-center">
            Vibrant elavated flavor combos made to delight and refresh you every
            time
          </h1>
        </div>
      </div>
      <div className=" px-20 md:flex items-center justify-center gap-5 hidden">
        {catalog.map((items, index) => {
          return (
            <div className=" uppercase flex text-xl items-center gap-2 px-5 py-2 rounded-lg border-[0.5px] border-gray-200 mt-5">
              <div className=" w-10 h-10 ">

              <Image src={frame} sizes="10" className=" w-full h-full object-cover"/>
              </div>
              <h1 className=" font-semibold ">{items}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-10 md:grid grid-cols-3 md:gap-10 w-full px-5 md:px-20 mt-20">
        {img.map((items, index) => {
          return (
            <div className="group h-[500px] rounded-2xl bg-yellow-400 flex items-center justify-center cursor-pointer overflow-hidden relative">
              <div className="text-white flex h-full flex-col justify-between items-center py-5 relative z-10">
                <h1 className={`${thunder.className} text-center uppercase text-5xl mt-5`}>
                  strawberry
                </h1>
                <div className="relative">
                  <div className="z-0">
                    <Image
                      src={dubba}
                      width={300}
                      className="z-50 group-hover:scale-110 duration-500 "
                    />
                  </div>
                </div>
                <h1 className={`${thunder.className} text-center uppercase text-5xl`}>
                  500 ML
                </h1>
              </div>
              
              {/* Berry splash elements */}
              <Image
                src={strawberry}
                alt="berry1"
                width={100}
                className="absolute top-20 left-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 group-hover:-translate-y-10 duration-500 rotate-45"
              />
              <Image
                src={strawberry}
                alt="berry2"
                width={60}
                className="absolute top-40 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:-translate-y-10 duration-500 -rotate-12"
              />
              <Image
                src={strawberry}
                alt="berry3"
                width={120}
                className="absolute bottom-20 left-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 group-hover:translate-y-10 duration-500 rotate-6"
              />
              <Image
                src={strawberry}
                alt="berry4"
                width={115}
                className="absolute bottom-40 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:translate-y-10 duration-500 -rotate-12"
              />
            </div>
          );
        })}
      </div>
      
      <Footer />
    </div>
  );
}

export default page;
