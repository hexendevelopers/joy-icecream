import React from "react";
import localFont from "next/font/local";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});

function Main() {
  return (
    <div className=" w-full flex  justify-center pb-9">
      <div className=" flex items-center flex-col gap-10">
        <div className=" flex flex-col gap-1 items-center">
          <h1 className={`${thunder.className} text-8xl font-bold uppercase`}>
            get in touch with us
          </h1>
          <h1 className=" text-sm w-96 text-center uppercase">
            Discover happiness in every purchase. Shop now and make every moment
            joyful!
          </h1>
        </div>
        <div className=" flex flex-col gap-5">
          <div className=" flex items-center gap-10">
            <div className=" flex flex-col gap-2">
              <label htmlFor="FirstName" className=" uppercase">
                First Name
              </label>
              <input
                type="text"
                className={`${thunder.className} w-64 bg-white tracking-wider rounded-lg px-3 h-12 text-red-500 text-xl placeholder:text-red-400`}
                placeholder="FIRST NAME"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="LastName" className=" uppercase">
                Last Name
              </label>
              <input
                type="text"
                className={`${thunder.className} w-64 bg-white rounded-lg tracking-wider px-3 h-12 text-red-500 text-xl placeholder:text-red-400`}
                placeholder="LAST NAME"
              />
            </div>
          </div>
          <div className=" flex items-center gap-10">
            <div className=" flex flex-col gap-2">
              <label htmlFor="EMAIL" className=" uppercase">
                EMAIL ADDRESS
              </label>
              <input
                type="text"
                className={`${thunder.className} w-64 bg-white rounded-lg tracking-wider px-3 h-12 text-red-500 text-xl placeholder:text-red-400`}
                placeholder="NAME@EMAIL.COM"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="LastName" className=" uppercase">
                PHONE NUMBER
              </label>
              <input
                type="text"
                className={`${thunder.className} w-64 bg-white rounded-lg tracking-wider px-3 h-12 text-red-500 text-xl placeholder:text-red-400`}
                placeholder="+91 1234567890"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="textArea">MESSAGE</label>
            <textarea
              rows={50}
              name=""
              className={`${thunder.className} w-full bg-white h-44 rounded-lg tracking-wider p-3  text-red-500 text-xl placeholder:text-red-400`}
              placeholder="YOUR MESSAGE GOES HERE"
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
