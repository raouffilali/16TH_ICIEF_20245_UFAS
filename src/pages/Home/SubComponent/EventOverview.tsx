import { Confrimg1, Confrimg2, Confrimg3 } from "@/assets";
import { MapIcon, Calendar } from "lucide-react";

const EventOverview = () => {
  return (
    <div className="flex gap-8 w-full h-full flex-col md:flex-row p-5 rounded-lg items-center justify-center">
      <div className="flex flex-col my-4 w-1/2 md:order-1 z-10">
        <div className="flex flex-col items-center md:items-start my-6 p-2 ">
          <p className="font-semibold text-uni-green2 my-1">Overview</p>
          <h1 className="text-4xl font-bold text-gray-800 py-1 text-center md:text-start">
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
        <div className="flex flex-col md:flex-row gap-4 md:-mr-20">
           <div  className="p-5 rounded-lg shadow-lg shadow-uni-green2 w-full bg-white flex flex-row m-auto items-center transition-all ease-in-out duration-300 transform hover:scale-105">
            <div className="p-4 rounded-full bg-uni-green2 hover:bg-uni-green2-light duration-200 ">
              <MapIcon className="text-white " />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-xl font-bold ">WHERE</h1>
              <p>Birmingham City Park Hall, London, UK</p>
            </div>
          </div>
          <div className="p-5 rounded-lg shadow-lg shadow-uni-green2 w-full bg-white flex flex-row m-auto items-center transition-all ease-in-out duration-300 transform hover:scale-105 ">
            <div className="p-4 rounded-full bg-uni-green2 hover:bg-uni-green2-light duration-200 ">
              <Calendar className="text-white " />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-xl font-bold ">WHENE</h1>
              <p>Birmingham City Park Hall, London, UK</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:order-2 -z-10">
        <div className="flex flex-col gap-3 justify-end items-end">
          <img src={Confrimg1} className="w-full h-full rounded-lg shadow-xl max-w-[270px] " alt="conference image 1"/>
          <img src={Confrimg2} className="w-full h-full rounded-lg shadow-xl max-w-[300px]" alt="conference image 2"/>
        </div>
        <div className="flex items-center">
          <img src={Confrimg3} className="w-full h-full rounded-lg shadow-xl max-h-[300px] max-w-[200px]" alt="conference image 3"/>
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
