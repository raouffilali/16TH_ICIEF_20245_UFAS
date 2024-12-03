import { IslamicTex } from "@/assets";
import React from "react";

const Contact = () => {
  return (
    <>
      <>
        {/* Responsive Green Banner */}
        <div className="relative mx-au w-full h-[300px] sm:h-[400px] md:h-[512px] bg-gradient-to-l from-gray-300 via-gray-100 to-gray-300 flex items-start justify-center">
          {/* Background Image */}
          <img
            className=" inset-0 w-full h-full object-cover opacity-25 blur-[2px]"
            src={IslamicTex}
            alt="Texture"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 opacity-70 bg-gradient-to-r from-[#0f5a08] to-[#9de796]"></div>
        </div>
      </>

      {/* Contact Form Section */}
      <div className="flex justify-center items-center w-full mx-auto bg-gray-200 text-black h-auto p-6 rounded-lg shadow-lg">
        <form className="flex flex-col w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px]">
          {/* Name Input */}
          <label
            className="mb-2 text-lg font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            id="name"
            placeholder="Enter your name"
          />

          {/* Email Input */}
          <label
            className="mb-2 text-lg font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          {/* Message Input */}
          <label
            className="mb-2 text-lg font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="p-3 mb-4 h-[150px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            id="message"
            placeholder="Type your message here"
          ></textarea>

          {/* Submit Button */}
          <button
            className="w-full p-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
