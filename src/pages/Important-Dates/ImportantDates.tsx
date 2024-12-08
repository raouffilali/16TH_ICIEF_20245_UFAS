import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Bodytexture } from '@/assets'; // Adjust the import path as needed

const ImportantDates = () => {
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
        <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2">
          Important Dates:
        </h1>
        <table className="w-full shadow-lg border border-gray-300 text-sm md:text-base mb-6">
          <tbody>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300 text-left">
                <strong>Submission Opening:</strong>
              </td>
              <td className="p-4 text-left">01/12/2024</td>
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
              <td className="p-4 text-left">14/03/2025</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300 text-left">
                <strong>Conference Dates:</strong>
              </td>
              <td className="p-4 text-left">13-15/05/2025</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm md:text-base md:italic mb-6 text-left w-full">
          <span className="font-bold text-uni-green2">Note: </span> Research
          papers submitted after these deadlines will not be considered.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2">
          Publication Opportunities:
        </h2>
        <ul className="list-none text-left space-y-4 text-sm md:text-base">
          <li>
            • All accepted full papers will be published in the conference
            proceedings with an ISBN.
          </li>
          <li>
            • The best papers will be selected for publication in a special issue
            of the Journal of Economics and Management Sciences, Journal of King
            Abdulaziz: Islamic Economics (indexed in SCOPUS), The Algerian Review
            of Financial & Banking Studies, and the Algerian Journal of Economics
            and Financial Research.
          </li>
        </ul>
        <div className="flex justify-between mt-20 w-full">
          <Link to="/guidelines" className="flex items-center px-2 py-2 md:px-4 md:py-2 bg-gradient-to-l from-uni-green2 to-uni-green2-light text-white rounded shadow hover:from-uni-green2 hover:to-uni-green transition-colors">
            <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
            <span className="ml-2 md:ml-4 text-xs md:text-base">Author Guidelines</span>
          </Link>
          <Link to="/registration" className="flex items-center px-2 py-1 md:px-4 md:py-2 bg-gradient-to-l from-uni-green2 to-uni-green2-light text-white rounded shadow hover:from-uni-green2 hover:to-uni-green transition-colors">
            <span className="mr-2 md:mr-4 text-xs md:text-base">Register</span>
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ImportantDates;