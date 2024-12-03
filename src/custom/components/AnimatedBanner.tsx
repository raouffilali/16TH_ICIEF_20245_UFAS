import { Button } from "@/components/ui/button";
import "./component.css"

 const AnimatedBanner = () => {
  return (
    <div className="relative w-full h-[521px] overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-uni-green via-uni-yellow to-green-900 animate-gradient-x">
        {/* Wavy Bottom Effect */}
        <svg
          className="absolute bottom-0 w-full h-auto md:h-[250px]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,176C672,203,768,237,864,234.7C960,232,1056,192,1152,170.7C1248,149,1344,149,1392,149.3L1440,149L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            International Conference on Innovation and Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl drop-shadow-md">
            Exploring Frontiers of Knowledge and Transformation
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-yellow-600 text-white hover:from-green-700 hover:to-yellow-700 shadow-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;