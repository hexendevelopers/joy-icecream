import Image from "next/image";
import React from "react";
import bg from "../assets/CONTACT_PAGE/contact-bg.png";
import Navbar from "@/components/Navbar";
import Main from "../../pages/Contact/Main";
import Footer from "@/pages/Home/Footer";
import ContactFooter from "../../pages/Contact/ContactFooter";
function page() {
  return (
    <div className=" w-full h-screen relative bg-gradient-to-b from-red-500 to-red-900">
      <Image src={bg} alt="bg" className=" w-full h-full" />
      <div className=" absolute top-0 w-full left-0 flex flex-col gap-10">
        <div className=" w-full flex flex-col gap-5">
          <div className="pt-10 px-20 flex flex-col gap-5">
            <Navbar />
            <hr />
          </div>
        </div>
        <div className=" flex flex-col">
          <Main />
          <ContactFooter />
        </div>
      </div>
    </div>
  );
}

export default page;
