import { Confrimg1, Confrimg2, Confrimg3 } from "@/assets";
import { MapIcon, Calendar } from "lucide-react";

const EventOverview = () => {
  return (
    <div className="w-full h-full flex-col md:flex-row bg-white p-5 rounded-lg">
      <div>
        <div className="flex flex-col items-center md:items-start my-4">
          <p className="font-semibold text-uni-green2 my-1">Overview</p>
          <h1 className="text-4xl font-bold text-gray-800 py-1 text-center md:text-start">
            GET THE LATEST INFO ABOUT{" "}
            <span
              className="bg-gradient-to-r from-uni-green via-uni-green2-light to-uni-green2 
            bg-clip-text text-transparent"
            >
              <br /> EVENTEN
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
        <div className="flex flex-col md:flex-row gap-4">
          <div className="p-5 rounded-lg shadow-2xl w-full flex flex-row m-auto items-center">
            <div className="p-4 rounded-full bg-uni-green2 hover:bg-uni-green2-light duration-200 ">
              <MapIcon className="text-white " />
            </div>
            <div className="flex flex-col px-4">
              <h1 className="text-xl font-bold ">WHERE</h1>
              <p>Birmingham City Park Hall, London, UK</p>
            </div>
          </div>
          <div className="p-5 rounded-lg shadow-2xl w-full flex flex-row m-auto items-center ">
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
      
    </div>
  );
};

export default EventOverview;
