import { Button } from "@/components/ui/button";
import "./component.css";
import { ConfImg, ufas_banner } from "@/assets";
import { RefObject } from "react";

interface AnimatedBannerProps {
  buttonRef?: RefObject<HTMLDivElement>;
  buttonName: string;
}

const AnimatedBanner = ({ buttonRef, buttonName }: AnimatedBannerProps) => {
  const handleClick = () => {
    if (buttonRef && buttonRef.current) {
      window.scrollBy({ top: 350, behavior: "smooth" });
    }
  };

  return (
   
      <div className="relative w-full h-[600px] overflow-hidden -z-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#122e10] via-[#293d04] to-[#174413] animate-gradient-x -z-10">
          {/* Wavy Bottom Effect */}
          <img
            className=" inset-0 w-full h-full object-cover md:object-fill opacity-45 blur-[4px] md:blur-[6px]"
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
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg textpre animate-slidein300">
              International Conference on Islamic Economics and Finance - UFAS
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl drop-shadow-md animate-slidein500">
              ICIEF 16TH Edition, 2025
            </p>
            <Button
              variant={"outline"}
              size="lg"
              className=" text-uni-green hover:shadow-xl shadow-md text-sm md:text-lg px-20 border-2 hover:border-dotted border-uni-green2-light animate-slidein600 transition-all ease-in-out hover:duration-300 transform hover:scale-105"
              onClick={handleClick}
            >
              {buttonName}
            </Button>
          </div>
        </div>
  </div>
    
  );
};

export default AnimatedBanner;
