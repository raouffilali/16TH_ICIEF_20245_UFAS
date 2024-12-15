import { submissionBannerImage } from "@/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { formFields, faqItems } from "../../../constants/formData"; // Adjust the path as necessary

const FAQandFORMbanner = () => {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center gap-6 bg-gray-500 p-8 md:px-36 mb-24 md:mb-64 mt-24 md:mt-40 animate-fadeInLeft">
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
          <h1 className="text-2xl font-semibold text-center md:text-start md:text-4xl md:font-bold text-white">
            FREQUENT ASKED
            <span className="text-yellow-600">
              <br /> QUESTIONS!!
            </span>
          </h1>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full h-full bg-white text-uni-green2 p-4 md:p-8 rounded-lg"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className=" md:text-lg">{item.question}</AccordionTrigger>
              <AccordionContent className="text-gray-800 text-base md:text-lg">
          {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Form part */}
      <div className="flex flex-col h-full w-full md:w-1/2 rounded-lg bg-white p-4 shadow-[0_0_20px_0px_rgba(15,90,8,0.5)] z-10 -mb-20">
        <div>
          <h2 className="text-center text-2xl font-semibold md:text-4xl md:font-bold mb-4">
            BOOK AN ATTENDEE <span className="text-uni-green2">SEAT</span>
          </h2>
        </div>
        <form className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row gap-2">
            {formFields.slice(0, 2).map((field) => (
              <div
                key={field.id}
                className="flex flex-col w-full md:w-1/2  "
              >
                <label
                  className="mb-2 text-lg font-medium text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {formFields.slice(2, 3).map((field) => (
              <div key={field.id} className="flex flex-col w-full">
                <label
                  className="mb-2 text-lg font-medium text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            {formFields.slice(3, 5).map((field) => (
              <div
                key={field.id}
                className="flex flex-col w-full md:w-1/2 "
              >
                <label
                  className="mb-2 text-lg font-medium text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          {formFields.slice(5).map((field) => (
            <div key={field.id} className="flex flex-col">
              <label
                className="mb-2 text-lg font-medium text-gray-700"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <button
            type="submit"
            className="flex flex-row justify-center items-center gap-2 p-3 bg-uni-green text-white rounded-lg hover:bg-uni-green2 transition-colors"
          >
            Submit <ArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQandFORMbanner;