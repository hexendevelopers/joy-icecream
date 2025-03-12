import Image from "next/image";
import React from "react";
import bg from "../assets/CONTACT_PAGE/contact-bg.png";
import Navbar from "@/components/Navbar";
import Main from "../../pages/Contact/Main";
import Footer from "@/pages/Home/Footer";
import ContactFooter from "../../pages/Contact/ContactFooter";
import SectionFive from "@/pages/Home/SectionFive";
function page() {
  return (
    <div className=" w-full relative bg-gradient-to-b from-red-500 to-red-900">
      <div className="hidden h-screen w-full lg:block ">
      <Image src={bg} alt="bg" className=" w-full h-full " />
      </div>
      
      <div className=" absolute top-0 w-full h-auto left-0 flex flex-col bg-gradient-to-b lg:bg-none from-red-900 to-red-900">
        <div className=" w-full h-auto lg:h-screen flex flex-col lg:gap-5">
          <div className="pt-6 px-5 lg:px-20 flex flex-col gap-5">
            <Navbar />
            <hr />
            <Main />
          </div>
          <div className="w-full h-auto flex flex-col lg:hidden">
            <SectionFive />
            <ContactFooter/>
          </div>
          
        </div>
        <div className="hidden lg:block">
          <ContactFooter />
          </div>
       
      </div>
    </div>
  );
}

export default page;
