import React from "react";
import localFont from "next/font/local";
import dubs from "../../app/assets/HERO-SECTION/132.png";
import Image from "next/image";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

function SectionThree() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-red-900 to-red-500">
      <div className="flex flex-col gap-10 items-center relative">
        <h1 className={`${thunder.className} text-7xl uppercase`}>
          explore our flavors
        </h1>
        <div className="w-96 h-96 rounded-full  flex items-center justify-center relative">
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`${thunder.className} text-4xl`}>100%</div>
              <div className={`${thunder.className} text-2xl`}>ICE CREAM</div>
              <div className={`${thunder.className} text-2xl`}>NATURAL</div>
            </div>
          </div>
          
          {/* Ice cream containers */}
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="absolute w-24 h-24"
              style={{
                transform: `rotate(${index * 36}deg) translateY(-150px) rotate(-${
                  index * 36
                }deg)`,
              }}
            >
              <Image
                src={dubs}
                alt={`Ice cream ${index + 1}`}
                width={80}
                height={80}
                className={`w-full h-full object-contain `}
              />
            </div>
          ))}
        </div>
        <h1 className="w-[600px] text-center">
          Our Ice Cream is made with the finest natural ingredients, including
          fresh dairy and real fruits. Crafted for pure joy, every scoop is
          rich, creamy, and irresistibly delicious. Enjoy a treat that’s as
          wholesome as it is delightful!
        </h1>
      </div>
    </div>
  );
}

export default SectionThree;
