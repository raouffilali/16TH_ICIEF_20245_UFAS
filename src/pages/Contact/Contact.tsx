import { useRef } from "react";
import "./contact.css";
import AnimatedBanner from "@/custom/components/AnimatedBanner";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <AnimatedBanner buttonName={"Contact Us"} buttonRef={contactRef} />

      {/* Contact Form Section */}
      <div
        ref={contactRef}
        className="flex justify-center -mt-6 md:-mt-14 w-full bg-white text-black h-auto p-4 animate-fadeInLeft"
      >
        <div className="relative flex flex-col rounded-lg shadow-xl bg-white p-4 md:justify-between w-full max-w-[900px] gap-6 ring-1 ring-uni-green2-light">
          {/* Headline */}

          <div className="text-center ">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-uni-green to bg-uni-green2-light bg-clip-text text-transparent">
              For any inquiries, please contact the conference secretariat via:
            </h2>
          </div>

          <div className="flex flex-col-reverse md:flex-row rounded-lg bg-white p-4 md:justify-between w-full gap-6">
            {/* Left Section (25%) */}
            <div className="flex flex-col w-full md:w-1/4 h-auto mx-1 bg-gradient-to-bl gap-5 from-uni-green via-uni-green2 to-uni-green text-white p-5 justify-center items-start rounded-lg shadow-lg">
              <h1 className="text-xl font-extrabold">Email</h1>
              <p> icief16@univ-setif.dz </p>
              <p> icief16setif@gmail.com </p>
              <h1 className="text-xl font-extrabold">ADDRESS:</h1>
              <p>Université de Sétif, El Bez, Sétif 19000</p>
            </div>

            {/* Right Section (75%) */}
            <form className="flex flex-col w-full md:w-3/4 mx-1 rounded-lg px-4 bg-white">
              {/* Name and Last Name Inputs */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* First Name Input */}
                <div className="flex flex-col w-full md:w-1/2">
                  <label
                    className="mb-2 text-lg font-medium text-gray-700"
                    htmlFor="name"
                  >
                    First Name
                  </label>
                  <input
                    className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f5a08]"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your First Name"
                  />
                </div>
                {/* Last Name Input */}
                <div className="flex flex-col w-full md:w-1/2">
                  <label
                    className="mb-2 text-lg font-medium text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="p-3 mb-4 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f5a08]"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                  />
                </div>
              </div>
              {/* Email Input */}
              <div className="flex flex-col">
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
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              {/* Message Input */}
              <div className="flex flex-col">
                <label
                  className="mb-2 text-lg font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f5a08]"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="p-3 bg-uni-green text-white rounded-lg hover:bg-uni-green2 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;