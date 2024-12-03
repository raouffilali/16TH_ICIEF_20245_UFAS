import { IslamicTex } from "@/assets";
import React from "react";
import "./contact.css"
import AnimatedBanner from "@/custom/components/AnimatedBanner";

const Contact = () => {
  return (
    <>
      <AnimatedBanner />

      {/* Contact Form Section */}
      <div className="flex justify-center  items-center w-full bg-white text-black h-auto p-2">
        <div className="flex flex-col md:flex-row rounded-lg shadow-lg bg-slate-300 p-4 md:justify-between">
          <div className="w-full h-auto mx-1 bg-gradient-to-bl from-[#0f5a08] via-[#709c1f] to-[#0f5a08] text-white p-5 justify-between rounded-lg">
            <h1 className="text-xl font-extrabold">EVENT VENUE:</h1>
            <p>Galleria mall conference</p>
            <h1>ADDRESS:</h1>
            <p>19 By Pass NR, Bali, Indonesia, BC 22196</p>
            <h1>RECEPTION INFO:</h1>
            <p>Booking: (+62) 1919-2020</p>
            <h1>Email:</h1>
            <p>eventen@mail.com</p>
            <p>Get Directions</p>
          </div>
          <form className="flex flex-col mx-1 w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px]">
            {/* Name Input */}
            <label
              className="mb-2 text-lg font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f5a08]"
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
              className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f5a08]"
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
              className="p-3 mb-4 h-[150px] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f5a08]"
              id="message"
              placeholder="Type your message here"
            ></textarea>

            {/* Submit Button */}
            <button
              className="w-full p-3 text-white bg-[#0f5a08] rounded-lg hover:bg-[#709c1f] transition duration-200"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
