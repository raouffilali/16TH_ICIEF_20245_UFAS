import "./contact.css";
import AnimatedBanner from "@/custom/components/AnimatedBanner";

const Contact = () => {
  return (
    <>
      <AnimatedBanner />

      {/* Contact Form Section */}
      <div className="flex justify-center -mt-6 md:-mt-14 w-full bg-white text-black h-auto p-4 animate-fadeInLeft" >
        <div className="flex flex-col md:flex-row rounded-lg shadow-xl bg-gray-100 p-4 md:justify-between w-full max-w-[900px]">
          {/* Left Section (25%) */}
          <div className="flex flex-col w-full md:w-1/4 h-auto mx-1 bg-gradient-to-bl gap-5 from-[#0f5a08] via-[#709c1f] to-[#0f5a08] text-white p-5 justify-center items-start rounded-lg shadow-lg">
            <h1 className="text-xl font-extrabold">EVENT VENUE:</h1>
            <p>Galleria mall conference</p>
            <h1 className="text-xl font-extrabold">ADDRESS:</h1>
            <p>19 By Pass NR, Bali, Indonesia, BC 22196</p>
            <h1 className="text-xl font-extrabold">RECEPTION INFO:</h1>
            <p>Booking: (+62) 1919-2020</p>
            <h1 className="text-xl font-extrabold">Email:</h1>
            <p>eventen@mail.com</p>
            <p className="text-lg font-extrabold">Get Directions</p>
          </div>

          {/* Right Section (75%) */}
          <form className="flex flex-col  w-full md:w-3/4 mx-1 rounded-lg p-4 bg-white ">
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
                  placeholder="Enter your name"
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
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f5a08]"
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

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

            {/* Phone Input */}
            <label
              className="mb-2 text-lg font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0f5a08]"
              type="text"
              id="phone"
              placeholder="Enter your phone number"
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
