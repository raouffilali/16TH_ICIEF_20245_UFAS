import { Confrimg1, Confrimg2, Confrimg3 } from "@/assets";
import { MapPin, Calendar } from "lucide-react";
import { Link } from "react-router";

const EventOverview = () => {
  return (
    <div className="justify-center items-center flex flex-col gap-6 w-full h-full rounded-lg md:flex-row md:-my-4">
      <div className="flex flex-col my-4 w-full md:w-1/2 h-auto md:h-full md:order-1 z-10">
        <div className="flex flex-col md:items-start">
          <p className="text-lg text-center text-uni-green2 my-1 md:text-xl"></p>
          <h1
            className="text-3xl md:text-5xl font-bold md:font-bold bg-gradient-to-r from-uni-green via-uni-green2-light to-uni-green2 
            bg-clip-text text-transparent py-1 text-center md:mb-3 md:text-start"
          >
            Overview
          </h1>
          <p className="font-medium text-gray-500 text-start">
            The Islamic Finance Industry emerged in the 1970s with the
            establishment of pioneering institutions such as : Dubai Islamic
            Bank and Islamic Develepment Bank. These institutions distinguished
            themselves by providing Shariah-compliant banking services,
            prohibiting interest-based transactions, and emphasizing risk and
            profit sharing through contracts like murabaha musharakah and
            mudarabah while avoiding usurious transactions.
            <span className="w-full text-uni-green2 hover:underline cursor-pointer">
              <Link className="w-full" to="./Objectives">
                {" "}
                See More
              </Link>
            </span>
          </p>
        </div>
        <div className="h-full flex flex-col md:flex-row justify-center items-center gap-4 mt-8  md:-mr-20 ">
          <div className="py-2 px-2 md:px-3 rounded-lg shadow-[0_0_20px_0px_rgba(15,90,8,0.25)] w-full lg:w-1/2 h-full md:min-h-[120px]  bg-white flex flex-row items-center transition-all ease-in-out duration-300 transform hover:scale-105">
            <div className="p-4 rounded-full bg-uni-green2 hover:bg-gray-300 duration-200 shadow-lg text-white hover:text-uni-green2 ">
              <MapPin />
            </div>
            <div className="w-full h-full flex flex-col px-2 items-center md:items-start ">
              <h1 className="w-full text-start text-lg md:text-xl font-bold overflow-y-auto overflow-hidden">
                WHERE
              </h1>
              <p className="w-full text-start overflow-y-auto overflow-hidden">
                Mouloud Kacem Auditorium Nait Belkacem, Setif 1 University
                Ferhat Abbas
              </p>
            </div>
          </div>
          <div className=" py-2 px-2 md:px-3 rounded-lg shadow-[0_0_20px_0px_rgba(15,90,8,0.25)] w-full lg:w-1/2 h-full md:md:min-h-[120px]  bg-white flex flex-row items-center transition-all ease-in-out duration-300 transform hover:scale-105">
            <div className="p-4 rounded-full bg-uni-green2 hover:bg-gray-300 duration-200 shadow-lg text-white hover:text-uni-green2 ">
              <Calendar />
            </div>
            <div className="w-full h-full flex flex-col px-2 items-center md:items-start ">
              <h1 className="w-full text-start text-lg md:text-xl font-bold overflow-y-auto overflow-hidden">
                WHENE
              </h1>
              <p className="w-full text-start overflow-y-auto overflow-hidden">
                From May 13th to May 16th | 08:00 AM - 06:00 PM | Algeria
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* image section */}
      <div className="hidden md:flex md:flex-row md:justify-center items-center gap-3 md:order-2 ">
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
            className="h-[350px] w-full rounded-lg shadow-2xl max-w-[250px]"
            alt="conference image 3"
          />
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
