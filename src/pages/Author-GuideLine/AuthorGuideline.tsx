import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bodytexture } from '@/assets'; // Adjust the import path as needed

const AuthorGuideline = () => {
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
          Author Guidelines:
        </h1>
        <p className="text-base md:text-lg md:italic mb-6 font-semibold animate-slidein200">
          Participants are invited to submit research papers within the
          conference themes according to the following conditions:
        </p>
        <table className="w-full shadow-lg border border-gray-300 text-base md:text-lg animate-slidein300">
          <tbody>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">
                <strong>Submission:</strong>
              </td>
              <td className="p-4 md:text-center">
                Full papers should be submitted via Word format & PDF format. Do
                not submit zip files.
              </td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">
                <strong>Language:</strong>
              </td>
              <td className="p-4 md:text-center">
                Papers may be submitted in Arabic, English, or French with
                abstracts in both languages.
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">
                <strong>Peer Review:</strong>
              </td>
              <td className="p-4 md:text-center">
                All submissions will undergo double-blind peer review by the
                conference's scientific committee.
              </td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">
                <strong>Formatting:</strong>
              </td>
              <td className="p-4 md:text-center">
                <ul className="list-disc ml-6">
                  <li>Arabic papers: font size 14 Traditional Arabic.</li>
                  <li>
                    English & French papers: Font size 12 Times New Roman.
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">
                <strong>Citation Style:</strong>
              </td>
              <td className="p-4 md:text-center">
                American Psychological Association 6th Edition (APA).
              </td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">
                <strong>Maximum paper length:</strong>
              </td>
              <td className="p-4 md:text-center">20 pages.</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">
                <strong>Originality:</strong>
              </td>
              <td className="p-4 md:text-center">
                Previously accepted conference papers or papers accepted for
                journal publication are not eligible.
              </td>
            </tr>
            <tr className="bg-uni-green2-light text-white">
              <td className="p-4 border-r border-gray-300">
                <strong>Presentation Format:</strong>
              </td>
              <td className="p-4 md:text-center">
                Accepted research papers will be presented in person at the
                conference venue.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-center md:justify-end mt-6 w-full animate-slidein400">
          <Link
            to="/dates"
            className="flex items-center px-3 py-2 md:px-5 md:py-3 bg-gradient-to-l from-uni-green2 to-uni-green2-light text-white rounded shadow hover:from-uni-green2 hover:to-uni-green transition-colors"
          >
            <span className="mr-2 md:mr-4 text-sm md:text-lg">
              Important Dates
            </span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorGuideline;