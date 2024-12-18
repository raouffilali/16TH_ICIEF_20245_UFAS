import { Bodytexture, submission_guidelines } from "@/assets";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const SubmissionGuideline = () => {
    const [animationClass, setAnimationClass] = useState("animate-slidein600");
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setAnimationClass("animate-bounce");
    }, 3000);
  }, []);

  return (
    <div className="relative pt-10 p-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center">
      {/* Background Effect */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />

      {/* Page Content */}
      <div className="flex flex-col items-center relative z-10 w-full max-w-[950px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein400">
          ICIEF-16 Submission Guidelines:
        </h2>
        <ul className="list-none text-left space-y-4 text-lg md:text-xl font-medium animate-slidein500">
          <li>
            You can download the guidelines to access detailed information about
            the submission process and follow the instructions to successfully
            complete your submission.
          </li>
        </ul>
        <div className={`mt-10 ${animationClass}`}>
          <svg
            className="w-10 h-10 text-uni-green2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <a
          href={submission_guidelines}
          target="_blank"
          download
          className="animate-slidein700 mt-7 block text-center px-12 py-2 md:px-32 md:py-4 bg-white text-uni-green rounded border-dashed border-2 border-uni-green2 mb-6 hover:bg-gradient-to-l from-uni-green2 to-uni-green2-light hover:text-white hover:border-white hover:shadow-xl"
        >
          <span>Download Submission guidelines</span>
        </a>
        <div className="flex justify-between mt-20 w-full animate-slidein600">
          <Link
            to="/dates"
            className="flex items-center px-3 py-2 md:px-5 md:py-3 bg-gradient-to-l from-uni-green2 to-uni-green2-light text-white rounded shadow hover:from-uni-green2 hover:to-uni-green transition-colors"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            <span className="ml-2 md:ml-4 text-sm md:text-lg">
              Important dates
            </span>
          </Link>
          <Link
            to="/registration"
            className="flex items-center px-3 py-2 md:px-5 md:py-3 bg-gradient-to-l from-uni-green2 to-uni-green2-light text-white rounded shadow hover:from-uni-green2 hover:to-uni-green transition-colors"
          >
            <span className="mr-2 md:mr-4 text-sm md:text-lg">Register</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubmissionGuideline;
