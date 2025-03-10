import React from 'react'
import localFont from "next/font/local";
import ellipseImg from '../../app/assets/MOBILE/HOME/Ellipse.png'
import Image from "next/image";

const thunder = localFont({
    src: "../../app/fonts/Thunder-BoldLC.otf",
    weight: "900",
  });
const signatie = localFont({
    src: "../../app/fonts/Signatie.otf",
    weight: "100 900",
  });

function Footer() {
  return (
    <div className='z-10 w-full h-screen lg:h-auto bg-gradient-to-b from-red-500 to-red-900 flex items-center justify-center pt-20 text-white'>
        <div className=' flex flex-col gap-5  items-center'>

        <h1 className={`text-[3.57rem] lg:text-6xl ${thunder.className} font-semibold text-center uppercase leading-none lg:leading-[1] w-[24.12rem] lg:w-[30rem] text-white`}>bringing joy to every moment with love</h1>
        <h1 className='w-[19rem] lg:w-[21rem] text-center uppercase text-sm font-semibold text-white'>Discover happiness in every purchase. Shop now and make every moment joyful!</h1>
        <div className=' uppercase text-[0.7rem] lg:text-xs flex  items-center gap-7 lg:gap-10 mt-5 text-white'>
            <h1>instagram</h1>
            <h1>facebook</h1>
            <h1>twitter</h1>
            <h1>pintrest</h1>
        </div>
        <h1 className={`${signatie.className} text-3xl lg:text-4xl mt-16 font-semibold text-white`}>Shri LC Java</h1>
        <Image src={ellipseImg} className='w-full lg:w-[40%] mt-10 h-auto' />
        </div>
    </div>
  )
}

export default Footer