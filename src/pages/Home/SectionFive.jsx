import React from 'react'
import localFont from "next/font/local";


const thunder = localFont({
    src: "../../app/fonts/Thunder-BoldLC.otf",
    weight: "900",
  });

function SectionFive() {
  return (
    <div className=' w-full h-96 bg-gradient-to-b from-red-900 to-red-500 flex items-center justify-center relative'>
        <h1 className={`${thunder.className} text-[14rem] font-extrabold uppercase`}>JOY in every bite</h1>
        
    </div>
  )
}

export default SectionFive