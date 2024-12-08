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
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 bg-clip-text text-transparent mb-4  animate-slidein100">
          Conference Objectives
        </h1>
        <p className="text-lg bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 bg-clip-text text-transparent animate-fadeInLeft">
          Islamic Finance Industry's 50th Anniversary Conference, Reflecting on
          fifty years of growth, challenges, and opportunities in the Islamic
          finance industry.
        </p>
      </div>

      {/* Objectives Section */}
      <div className="bg-white rounded-lg p-8 w-full max-w-5xl space-y-8 shadow-[0_0_20px_10px_rgba(15,90,8,0.2)] animate-fadeInLeft z-10">
        {/* Objective 1 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            1. Celebrating Fifty Years of Islamic Finance
          </h2>
          <p className="text-gray-600">
            Reflect on the evolution of the Islamic finance industry over the
            past five decades, highlighting its milestones, achievements, and
            transformative impact on global economies.
          </p>
        </div>

        {/* Objective 2 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            2. Strengthening Global Partnerships
          </h2>
          <p className="text-gray-600">
            Foster collaborations between international organizations and
            Islamic financial institutions to amplify support for sustainable
            development initiatives and financial inclusion.
          </p>
        </div>

        {/* Objective 3 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            3. Driving Sustainable Development Goals (SDGs)
          </h2>
          <p className="text-gray-600">
            Evaluate the industry's contributions to achieving critical SDGs,
            including:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Energy security</li>
            <li>Food security</li>
            <li>Health security</li>
            <li>Water security</li>
          </ul>
        </div>

        {/* Objective 4 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            4. Addressing Challenges and Opportunities
          </h2>
          <p className="text-gray-600">
            Provide a platform to analyze the achievements and persistent
            challenges in Islamic finance while discussing strategies to
            navigate emerging challenges.
          </p>
        </div>

        {/* Objective 5 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            5. Enhancing Global Awareness
          </h2>
          <p className="text-gray-600">
            Increase awareness of Islamic finance's role in the global economy,
            promoting knowledge transfer and intellectual exchange.
          </p>
        </div>

        {/* Objective 6 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            6. Promoting Innovative Financial Products
          </h2>
          <p className="text-gray-600">
            Encourage financial institutions to develop products and services
            that meet modern market demands, facilitating sustainable growth.
          </p>
        </div>

        {/* Objective 7 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            7. Strengthening Collaborative Efforts
          </h2>
          <p className="text-gray-600">
            Enhance collaboration between Islamic and global financial
            institutions to facilitate the exchange of expertise and best
            practices.
          </p>
        </div>

        {/* Objective 8 */}
        <div className="border-l-4 border-uni-green2 pl-4 transition-all ease-in-out duration-300 transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-800">
            8. Ensuring Future Sustainability
          </h2>
          <p className="text-gray-600">
            Examine future challenges and opportunities, devising strategies to
            ensure the sustainability and success of the Islamic finance
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Objectives