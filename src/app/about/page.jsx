import Navbar from "@/components/Navbar";
import React from "react";
import SectionOne from "../../pages/About/SectionOne";
import SectionTwo from "../../pages/About/SectionTwo";
import Footer from "@/pages/Home/Footer";

function page() {
  return (
    <div className=" w-full  flex flex-col  justify-center ">
      <div className=" flex h-screen bg-gradient-to-b from-red-500 to-red-900 flex-col w-full gap-10 px-20 pt-10">
        <div className=" flex flex-col gap-5">
          <Navbar />
          <hr />
        </div>
        <SectionOne />
      </div>
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default page;
