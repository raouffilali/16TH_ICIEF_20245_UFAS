import { Bodytexture } from '@/assets'; // Adjust the import path as needed
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const ImportantDates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein100">
          Important Dates:
        </h1>
        <table className="w-full shadow-lg border border-gray-300 text-base md:text-lg mb-6 animate-slidein200">
          <tbody>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300 text-left">
                <strong>Submission Opening:</strong>
              </td>
              <td className="p-4 text-left">05/12/2024</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300 text-left">
                <strong>Full Paper Submission Deadline:</strong>
              </td>
              <td className="p-4 text-left">15/02/2025</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300 text-left">
                <strong>Scientific Committee Decision:</strong>
              </td>
              <td className="p-4 text-left">15/03/2025</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300 text-left">
                <strong>Conference Dates:</strong>
              </td>
              <td className="p-4 text-left">13-15/05/2025</td>
            </tr>
          </tbody>
        </table>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein300">
          <span className="font-bold text-uni-green2">Note: </span> Research
          papers submitted after these deadlines will not be considered.
        </p>

        <div className="flex flex-col md:flex-row justify-between mt-20 w-full animate-slidein600">
          <Link
            to="/guidelines"
            className="flex items-center px-3 py-2 md:px-5 md:py-3 mb-4 md:mb-0 bg-gradient-to-l from-uni-green2 to-uni-green2-light text-white rounded shadow hover:from-uni-green2 hover:to-uni-green transition-colors"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            <span className="ml-2 md:ml-4 text-sm md:text-lg">
              Author Guidelines
            </span>
          </Link>
          <Link
            to="/submission-guidelines"
            className="flex items-center px-3 py-2 md:px-5 md:py-3 bg-gradient-to-l from-uni-green2 to-uni-green2-light text-white rounded shadow hover:from-uni-green2 hover:to-uni-green transition-colors"
          >
            <span className="mr-1 md:mr-4 text-sm md:text-lg">Submission guidelines</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ImportantDates;