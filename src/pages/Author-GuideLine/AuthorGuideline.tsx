import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorGuideline = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dates');
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6 text-center animate-slidein100">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2">
        Author Guidelines:
      </h1>
      <p className="text-sm md:text-base md:italic mb-6">
        Participants are invited to submit research papers within the conference
        themes according to the following conditions:
      </p>
      <table className="w-full shadow-lg border border-gray-300 text-sm md:text-base">
        <tbody>
          <tr className="bg-white border-b border-gray-300">
            <td className="p-4 border-r border-gray-300">
              <strong>Submission:</strong>
            </td>
            <td className="p-4">
              Full papers should be submitted via Word format & PDF format. Do
              not submit zip files.
            </td>
          </tr>
          <tr className="bg-uni-green2-light text-white border-b border-gray-300">
            <td className="p-4 border-r border-gray-300">
              <strong>Language:</strong>
            </td>
            <td className="p-4">
              Papers may be submitted in Arabic, English, or French with
              abstracts in both languages.
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-300">
            <td className="p-4 border-r border-gray-300">
              <strong>Peer Review:</strong>
            </td>
            <td className="p-4">
              All submissions will undergo double-blind peer review by the
              conference's scientific committee.
            </td>
          </tr>
          <tr className="bg-uni-green2-light text-white border-b border-gray-300">
            <td className="p-4 border-r border-gray-300">
              <strong>Formatting:</strong>
            </td>
            <td className="p-4">
              <ul className="list-disc ml-6">
                <li>Arabic papers: font size 14 Traditional Arabic.</li>
                <li>English & French papers: Font size 12 Times New Roman.</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-white border-b border-gray-300">
            <td className="p-4 border-r border-gray-300">
              <strong>Citation Style:</strong>
            </td>
            <td className="p-4">
              American Psychological Association 6th Edition (APA).
            </td>
          </tr>
          <tr className="bg-uni-green2-light text-white border-b border-gray-300">
            <td className="p-4 border-r border-gray-300">
              <strong>Maximum paper length:</strong>
            </td>
            <td className="p-4">20 pages.</td>
          </tr>
          <tr className="bg-white border-b border-gray-300">
            <td className="p-4 border-r border-gray-300">
              <strong>Originality:</strong>
            </td>
            <td className="p-4">
              Previously accepted conference papers or papers accepted for
              journal publication are not eligible.
            </td>
          </tr>
          <tr className="bg-uni-green2-light text-white">
            <td className="p-4 border-r border-gray-300">
              <strong>Presentation Format:</strong>
            </td>
            <td className="p-4">
              Accepted research papers will be presented in person at the
              conference venue.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center md:justify-end mt-4">
        <Button
          onClick={handleNavigate}
          className="px-4 py-2 bg-uni-yellow text-white rounded shadow hover:bg-uni-green2-light transition-colors"
        >
          Go to Important Dates
        </Button>
      </div>
    </div>
  );
}

export default AuthorGuideline;