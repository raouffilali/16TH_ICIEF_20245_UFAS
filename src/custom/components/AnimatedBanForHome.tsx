import { Button } from "@/components/ui/button";
import "./component.css";
import { ConfImg } from "@/assets";
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
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#0f5a08] via-[#709c1f] to-[#0f5a08] animate-gradient-x">
        {/* Wavy Bottom Effect */}
        <img
          className=" inset-0 w-full h-full object-cover opacity-25 blur-[0.5px]"
          src={ConfImg}
          alt="Texture"
        />
        <svg
          className="absolute bottom-0 w-full h-[150px] md:h-[250px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,53.3C160,75,320,117,480,160C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,
            128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
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
