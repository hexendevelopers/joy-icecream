import React from "react";
import localFont from "next/font/local";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const signatie = localFont({
  src: "../../app/fonts/Signatie.otf",
  weight: "100 900",
});

function ContactFooter() {
  return (
    <div className=" w-full h-[600px] bg-gradient-to-b from-red-900 to-red-500 flex items-center justify-center">
      <div className=" flex flex-col gap-5 items-center">
        <h1
          className={` text-6xl ${thunder.className} font-semibold text-center uppercase w-[30rem]`}
        >
          bringing joy to every moment with love
        </h1>
        <h1 className=" w-[23em] text-center uppercase text-sm font-semibold">
          Discover happiness in every purchase. Shop now and make every moment
          joyful!
        </h1>
        <div className=" uppercase text-xs flex items-center gap-10 mt-5">
          <h1>instagram</h1>
          <h1>facebook</h1>
          <h1>twitter</h1>
          <h1>pintrest</h1>
        </div>
        <h1 className={`${signatie.className} text-4xl mt-16 font-semibold`}>
          Shri LC Java
        </h1>
      </div>
    </div>
  );
}

export default ContactFooter;
