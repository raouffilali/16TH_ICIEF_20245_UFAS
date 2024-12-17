import { ICIEF16LOGO, ufas_banner } from "@/assets";
import "./component.css";


const AnimatedBannerForHome = () => {

  return (
    <div className="relative w-full h-[600px] overflow-hidden -z-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-uni-green via-[#293d04] to-uni-green2 animate-gradient-x -z-10">
        {/* Wavy Bottom Effect */}
        <img
          className=" inset-0 w-full h-full object-cover md:object-fill opacity-45 blur-[10px] md:blur-[15px]"
          src={ufas_banner}
          alt="Texture"
        />
        <svg
          className="absolute bottom-0 w-full h-[220px] md:h-[240px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L60,112C120,128,240,160,360,176C480,192,600,192,720,176C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 -mt-24 ">
          <img
            className="w-full h-full max-w-[160px] max-h-[90px] md:max-h-[140px] md:max-w-[250px] animate-slidein200"
            src={ICIEF16LOGO}
            alt="Texture"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 md:mt-8 mt-4 drop-shadow-lg textpre animate-slidein300 ">
            International Conference on Islamic Economics and Finance
          </h1>
          <p className="text-2xl font-semibold italic md:text-4xl md:font-bold md:italic mb-6 max-w-5xl p-2 animate-slidein500  bg-gradient-to-b from-[#f3eee7] to-[#f3e297] bg-clip-text text-transparent">
            Islamic Financial Industry After Fifty Years of Practice
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBannerForHome;
