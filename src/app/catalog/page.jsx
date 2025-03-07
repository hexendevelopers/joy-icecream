import Navbar from "@/components/Navbar";
import React from "react";
import localFont from "next/font/local";
import Footer from "../../pages/Contact/ContactFooter";
import Image from "next/image";
import dubba from "../assets/HERO-SECTION/132.png";
import MobileMenu from "@/components/MobileMenu";
import strawberry from "../assets/CUTY/Rectangle 15.png";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});

function page() {
  const catalog = ["tub", "cone", "bulk", "ripplette", "bar", "sipup", "cup"];
  const img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className=" w-full h-auto    flex flex-col gap-10 bg-gradient-to-b from-red-900 to-red-500">
      <div className=" px-5 md:px-20 pt-10 flex flex-col gap-5  ">
        <Navbar />
        <hr />
      </div>

      <div className=" felx flex-col h-full gap-5">
        <div className=" w-full flex justify-center">
          <h1
            className={` ${thunder.className} md:text-[17rem] text-5xl flex flex-shrink-0 uppercase`}
          >
            catalog
          </h1>
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
              <h1>Im</h1>
              <h1 className=" font-semibold ">{items}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-10 md:grid grid-cols-3 md:gap-10 w-full px-5 md:px-20 mt-20">
        {img.map((items, index) => {
          return (
            <div className=" h-[500px] rounded-2xl bg-yellow-400 flex items-center justify-center  cursor-pointer ">
              <div className=" text-white flex h-full flex-col justify-between items-center py-5">
                <h1
                  className={`${thunder.className} text-center uppercase text-5xl`}
                >
                  strawberry
                </h1>
                <div className=" relative">
                  <Image
                    src={dubba}
                    width={300}
                    className=" hover:scale-75 duration-300"
                  />
                </div>
                <h1
                  className={`${thunder.className} text-center uppercase text-5xl`}
                >
                  500 ML
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default page;
