import { submissionBannerImage } from "@/assets"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ArrowRight} from "lucide-react"
const FAQandFORMbanner = () => {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center gap-6 bg-gray-500 p-8 md:px-36 mb-24 mt-24 animate-fadeInLeft">
        <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${submissionBannerImage})`,
          transform: "scale(-1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.5",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-l from-uni-green to-uni-green2 opacity-85"></div>
            <div className="relative flex flex-col gap-3 bg-transparent text-gray-800 md:w-1/2 shadow-[0_0_20px_0px_rgba(15,90,8,0.25)] h-full rounded-lg justify-center items-center md:items-start ">
            <div>
                <h1 className="text-2xl font-semibold md:text-4xl md:font-bold text-white">FREQUENT ASKED<span className="text-yellow-600"><br/> QUESTIONS!!</span></h1>
            </div>
            <Accordion type="single" collapsible className="w-full h-full bg-white text-uni-green2 p-4 rounded-lg">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is Islamic finance?</AccordionTrigger>
                            <AccordionContent>
                                Islamic finance is a financial system that operates according to Shariah principles, prohibiting interest-based transactions and emphasizing profit-sharing and ethical investments.
                            </AccordionContent>
                        </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What are sukuk?</AccordionTrigger>
                            <AccordionContent>
                                Sukuk are Shariah-compliant financial instruments similar to bonds, used to finance projects while ensuring no involvement in interest-based transactions.
                            </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How does Islamic finance promote financial inclusion?</AccordionTrigger>
                            <AccordionContent>
                                Islamic finance promotes inclusion by providing ethical, interest-free financial services accessible to diverse communities, aligning with their values and beliefs.
                            </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex flex-col h-full w-full md:w-1/2 rounded-lg bg-white p-4 shadow-[0_0_20px_0px_rgba(15,90,8,0.5)] z-10 -mb-20">
            <div>
                <h2 className="text-2xl font-semibold md:text-4xl md:font-bold">LET'S RESERVE A <span className="text-uni-green2">SEAT</span></h2>
            </div>
            <form className="flex flex-col w-full">
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
                    className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
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
                    className="p-3 mb-4 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
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
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
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
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="flex flex-row justify-center items-center gap-2 p-3 bg-uni-green text-white rounded-lg hover:bg-uni-green2 transition-colors"
              >
                Submit <ArrowRight/>
              </button>
            </form>
            </div>    
        </div>
  )
}

export default FAQandFORMbanner