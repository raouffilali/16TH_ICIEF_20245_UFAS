import { Confrimg1, Confrimg2, Confrimg3 } from "@/assets";
import { MapPin, Calendar } from "lucide-react";

const EventOverview = () => {
  return (
    <div className="flex gap-6 md:gap-8 w-full h-full flex-col md:flex-row rounded-lg justify-center items-center md:mb-16 mb-8">
      <div className="flex flex-col my-4 w-full md:w-1/2 h-auto md:h-full md:order-1 z-10">
        <div className="flex flex-col items-center md:items-start   ">
          <p className="text-lg text-uni-green2 my-1 md:text-xl">
            Overview
          </p>
          <h1 className="text-2xl md:text-5xl font-semibold md:font-bold text-gray-800 py-1 text-center md:text-start">
            GET THE LATEST INFO ABOUT{" "}
            <span
              className="bg-gradient-to-r from-uni-green via-uni-green2-light to-uni-green2 
            bg-clip-text text-transparent"
            >
              <br /> EVENT
            </span>
          </h1>
          <p className="font-medium text-gray-500 text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:-mr-20 mt-4">
          <div className="py-2 md:px-5 rounded-lg shadow-[0_0_20px_0px_rgba(15,90,8,0.25)] w-1/2 h-full bg-white flex flex-col md:flex-row m-auto items-center transition-all ease-in-out duration-300 transform hover:scale-105">
            <div className="p-4 rounded-full bg-uni-green2 hover:bg-uni-green2-light duration-200 ">
              <MapPin className="text-white " />
            </div>
            <div className="w-full h-full flex flex-col px-4 items-center md:items-start ">
              <h1 className="text-xl font-bold ">WHERE</h1>
              <p className="text-center md:text-start">
                Auditorium Mouloud Kacem Nait Belkacem-Université Ferhat Abbas
                Sétif
              </p>
            </div>
          </div>
          <div className=" py-2 md:px-5 rounded-lg shadow-[0_0_20px_0px_rgba(15,90,8,0.25)] w-1/2 h-full bg-white flex flex-col md:flex-row m-auto items-center transition-all ease-in-out duration-300 transform hover:scale-105">
            <div className="p-4 rounded-full bg-uni-green2 hover:bg-uni-green2-light duration-200 ">
              <Calendar className="text-white " />
            </div>
            <div className="w-full h-full flex flex-col px-4 items-center md:items-start">
              <h1 className="text-xl font-bold ">WHENE</h1>
              <p className="text-center md:text-start">
                From May 13th to May 16th <br /> 08:00 AM - 06:00 PM <br />{" "}
                Africa/Algiers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* image section */}
      <div className="hidden  md:flex md:flex-row gap-3 w-1/2 md:order-2 -z-10 ">
        <div className="flex flex-col items-center gap-3 justify-end md:items-end">
          <img
            src={Confrimg1}
            className="w-full h-full rounded-lg shadow-xl max-w-[270px] "
            alt="conference image 1"
          />
          <img
            src={Confrimg2}
            className="w-full h-full rounded-lg shadow-xl max-w-[300px]"
            alt="conference image 2"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={Confrimg3}
            className="w-full h-full rounded-lg shadow-xl max-h-[300px] max-w-[200px]"
            alt="conference image 3"
          />
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
