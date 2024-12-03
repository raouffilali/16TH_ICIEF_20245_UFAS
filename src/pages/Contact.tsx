import { IslamicTex } from "@/assets";
import React from "react";

const Contact = () => {
  return (
    <>
      <>
        {/* Responsive Green Banner */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[512px] bg-gradient-to-l from-[#043318] via-[#1b7212] to-[#043318] flex items-start justify-center">
          <img
            className=" absolute inset-0 w-full h-full object-cover opacity-15 blur-[2px]  "
            src={IslamicTex}
            alt="Texture"
          />
        </div>

        {/* Content Section */}
        <div className="mx-auto w-full flex flex-col p-4 bg-[#EBF4F6] mt-[-20px]">
          <h1 className="text-xl">Contact Us</h1>
        </div>
      </>

      {/* Contact Form Section */}
      <div className="flex justify-center items-center bg-white">
        <div className="flex flex-col">
          <div className="justify-center md:justify-normal">Contact Us</div>
          <div className="flex flex-col justify-center items-center m-3 bg-gray-200 text-black w-[150px] h-[500px] md:w-[900px] rounded-lg shadow-lg"></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
