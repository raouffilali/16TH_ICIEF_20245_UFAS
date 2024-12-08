import { useEffect } from 'react';
import { Bodytexture } from '@/assets'; // Adjust the import path as needed

const Registration = () => {
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
      <div className="flex flex-col items-center relative z-10 w-full max-w-[950px] mb-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein100">
          Registration:
        </h1>
        <p className="text-base md:text-xl md:italic mb-6 text-left w-full animate-slidein200">
          <span className="font font-semibold underline bg-gradient-to-r from-uni-green to bg-uni-yellow bg-clip-text text-transparent">
            Registration for the conference is free of charge
          </span>
          , and accepted paper authors will benefit from:
        </p>
        <ul className="list-disc text-base md:text-lg mb-12 text-left w-full pl-6 animate-slidein300">
          <li>Certificates of participation;</li>
          <li>Meals, break tea, and transportation during the event days;</li>
        </ul>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein400">
          Submission of Papers:
        </h2>
        <p className="text-base md:text-xl md:italic mb-12 md:mb-16 text-left w-full animate-slidein500">
          All papers must be submitted via{" "}
          <span className="font font-semibold underline bg-gradient-to-r from-uni-green to bg-uni-yellow bg-clip-text text-transparent">
            the conference’s submission portal
          </span>
          , accessible through the following link:
        </p>
        <a
          target="_blank"
          href="https://events.univ-setif.dz/register/"
          className="block text-center px-12 py-2 md:px-32 md:py-4 bg-white text-uni-green rounded border-dashed border-2 border-uni-green2 mb-6 animate-slidein600 hover:bg-gradient-to-l from-uni-green2 to-uni-green2-light hover:text-white hover:border-white hover:shadow-xl"
        >
          <span>Submit your Paper</span>

        </a>
      </div>
    </div>
  );
}

export default Registration;