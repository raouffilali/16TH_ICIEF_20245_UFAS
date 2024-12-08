import { useEffect } from 'react';
import { Bodytexture } from '@/assets'; // Adjust the import path as needed
import { eventBackground } from '../../constants/eventBackground';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const BackgroundEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative pt-10 p-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center">
      {/* Background Effect */}
      <img
        className="opacity-15 absolute inset-0 w-full h-full object-cover md:opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />

      {/* Page Content */}
      <div className="flex flex-col items-center relative z-10 w-full max-w-[950px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein100">
          {eventBackground.title}
        </h1>
        {eventBackground.description.map((desc, index) => (
          <p key={index} className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein200">
            {desc}
          </p>
        ))}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein500">
          Series of the conference
        </h2>
        <table className="w-full shadow-lg border border-gray-300 text-base md:text-lg mb-6 animate-slidein600">
          <tbody>
            {eventBackground.series.map((event, index) => (
              <tr
                key={index}
                className={
                  event.edition === "16th"
                    ? "bg-gradient-to-bl from-[#0f5a08] via-[#709c1f] to-[#0f5a08] text-white border-2 border-dashed border-black shadow-xl"
                    : index % 2 === 0
                    ? "bg-white border-b border-gray-300"
                    : "bg-uni-green2-light text-white border-b border-gray-300"
                }
              >
                <td className="p-4 border-r border-gray-300">{event.edition}</td>
                <td className="p-4">{event.year}</td>
                <td className="p-4">{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="mt-12 text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein800">
          Introduction:
        </h2>
        {eventBackground.introduction.map((intro, index) => (
          <p key={index} className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein900">
            {intro}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BackgroundEvent;