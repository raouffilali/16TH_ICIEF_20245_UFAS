import { Bodytexture } from '@/assets';

const Objectives = () => {
  return (
    <div className="relative bg-gradient-to-b from-transparent via-white to-transparent bg-opacity-45 min-h-screen flex flex-col items-center justify-start py-10 px-6">
      {/* Background Texture */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover opacity-25 blur-[0.5px]"
          src={Bodytexture}
          alt="Texture"
        />
      </div>

      {/* Title Section */}
      <div className="max-w-4xl text-center mb-10 z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein100">
          Conference Objectives
        </h1>
        <p className="text-lg md:text-l font-semibold md:italic text-gray-800 animate-fadeInLeft">
          As the Islamic finance industry marks its fiftieth anniversary, it is
          imperative to pause and assess this experience, rich with achievements
          and challenges alike. This conference aims to shed light on the
          evolution of the Islamic Finance Industry through the following key
          areas:
        </p>
      </div>

      {/* Objectives Section */}
      <div className="bg-white rounded-lg p-8 w-full max-w-5xl space-y-8 shadow-[0_0_20px_10px_rgba(15,90,8,0.2)] animate-fadeInLeft z-10">
        {/* Objective 1 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Evaluating the Islamic Finance Industry's experience after fifty
            years of practice.
          </h2>
        </div>

        {/* Objective 2 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Strengthening international institution partnerships supporting the
            Islamic Finance Industry.
          </h2>
        </div>

        {/* Objective 3 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Evaluating the contribution of Islamic Finance to achieving key
            SDGs, including energy, food, health, and water security.
          </h2>
        </div>

        {/* Objective 4 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Analyzing achievements and addressing challenges faced by the
            Islamic Finance Industry.
          </h2>
        </div>

        {/* Objective 5 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Increasing awareness of Islamic Finance's role in the global
            economy.
          </h2>
        </div>

        {/* Objective 6 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Encouraging financial institutions to develop financial products and
            services that meet market demands.
          </h2>
        </div>

        {/* Objective 7 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Enhancing collaboration between Islamic Financial Institutions and
            global financial institutions to facilitate the exchange of
            expertise and best practices.
          </h2>
        </div>

        {/* Objective 8 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Examining the future challenges and opportunities for the Islamic
            Finance Industry and developing strategies to ensure sustainability
            and continued success.
          </h2>
        </div>

        {/* Objective 9 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            Promoting knowledge transfer, fostering intellectual exchange, and
            strengthening collaborative efforts among all stakeholders within
            the Islamic Finance Industry.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Objectives