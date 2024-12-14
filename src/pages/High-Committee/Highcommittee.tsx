import { Bodytexture, Conf } from "@/assets";
import { highcommittees } from "../../constants/Highcommittee";
import { organizingcommittees } from "@/constants/Scientific Committee1";
import { steeringcommittees } from "@/constants/Steering Committee Of The Conference";
import { scientificcommittees } from "@/constants/Organizing Committee";

const Hicommittee = () => {
  return (
    <div className="relative pt-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center">
      {/* Background Effect */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />

      {/* Page Content */}
      <div className="flex flex-col items-center relative z-10 w-full max-w-[950px] ">
        {/* Page Title */}
        <h1
          className="p-1 text-center items-center bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent 
          bg-clip-text text-4xl font-bold mb-5 animate-slidein100  "
        >
          High Committee
        </h1>

        {/* Group 1: Honorary Chairs */}
        <div className="mb-4">
          <h2 className=" text-center text-2xl font-bold text-gray-800 mb-4 animate-slidein100 ">
            Honorary Chairs
          </h2>
          <div className="relative flex flex-col md:flex-row md:gap-8 animate-slidein100 mx-8  ">
            {highcommittees.slice(0, 2).map((Highcommittee) => (
              <div
                key={Highcommittee.id}
                className="flex flex-col h-full items-center md:flex-row md:items-start bg-gradient-to-br from-uni-green via-uni-green2 to-white
                  p-4 rounded-lg shadow-2xl md:w-[calc(50%-16px)] mb-6 mt-6 md:mb-0 md:mt-0 transition-all ease-in-out duration-300 transform hover:scale-105 "
              >
                {Highcommittee.image && (
                  <img
                    src={Highcommittee.image}
                    alt={Highcommittee.name}
                    className="w-full h-auto max-w-[150px] bg-white shadow-2xl object-cover rounded-lg mb-4 animate-slidleft800"
                  />
                )}
                <div className="w-full h-full flex flex-col items-center md:items-start p-2 animate-slideright800">
                  <h3 className="px-2 text-xl font-bold text-white text-center md:text-start">
                    {Highcommittee.name}
                  </h3>
                  {Highcommittee.description && (
                    <div className="text-center md:text-start mt-2 h-24 overflow-y-auto overflow-hidden text-white border-0 text-sm px-2 rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                      {Highcommittee.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Conference Chairman */}
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4 animate-slidein100">
            Conference Chairman
          </h2>
          <div className="flex flex-col md:flex-row md:gap-8 animate-slidein100 mx-8 ">
            {highcommittees.slice(2).map((Highcommittee) => (
              <div
                key={Highcommittee.id}
                className="flex flex-col h-full items-center mx md:flex-row md:items-start bg-gradient-to-br from-uni-green via-uni-green2 to-white bg-opacity-60
                  p-4 rounded-lg shadow-2xl mb-6 mt-6 md:mb-0 md:mt-0 transition-all ease-in-out duration-300 transform hover:scale-105"
              >
                {Highcommittee.image && (
                  <img
                    src={Highcommittee.image}
                    alt={Highcommittee.name}
                    className="w-full h-full max-h-[150px] max-w-[150px] bg-white shadow-2xl object-cover rounded-lg mb-4 animate-slidleft800"
                  />
                )}
                <div className="w-full h-full flex flex-col items-center md:items-start p-2 animate-slideright800 ">
                  <h3 className=" px-2 text-xl font-bold text-white text-center md:text-start">
                    {Highcommittee.name}
                  </h3>
                  {Highcommittee.description && (
                    <div className="text-center md:text-start mt-2 h-20 overflow-y-auto text-white md:max-w-[300px] border-0 text-sm px-2 rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                      {Highcommittee.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full relative my-[50px] h-full py-10 overflow-hidden animate-slidein300">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${Conf})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="w-full absolute inset-0 bg-gradient-to-r from-uni-green to-uni-green2 opacity-90"></div>

        {/* Steering committe */}

        <div className="relative flex flex-col justify-center items-center w-full h-full text-white px-6 ">
          <h2 className="text-4xl text-center font-bold mb-4 mt-5 animate-slidleft800">
            Steering Committee
          </h2>
          {/* Blurred Transparent Card with Steering Committee */}
          <div className="flex flex-row items-center mt-8 p-6 bg-transparent rounded-lg ">
            <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center md:gap-8  ">
              {steeringcommittees.map((steeringcommittee) => (
                <div
                  key={steeringcommittee.id}
                  className="flex flex-col w-full h-full max-w-[300px] items-center bg-gradient-to-br bg-white drop-blur-lg border border-white to-uni-green2 bg-opacity-60
                  p-4 rounded-lg shadow-2xl my-6 md:my-0 transition-all ease-in-out duration-300 transform hover:scale-105"
                >
                  {steeringcommittee.image && (
                    <img
                      src={steeringcommittee.image}
                      alt={steeringcommittee.name}
                      className="w-full h-full max-w-[190px] min-h-[190px] max-h-[190px] bg-white shadow-2xl rounded-lg "
                    />
                  )}
                  <div className="w-full h-full flex flex-col items-center md:items-center p-2  ">
                    <h3 className=" px-2 text-xl font-bold text-gray-800 text-center md:text-center">
                      {steeringcommittee.name}
                    </h3>
                    {steeringcommittee.description && (
                      <div className="text-center md:text-center mt-2 h-20 overflow-y-auto text-uni-green border-0 text-sm px-2 rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                        {steeringcommittee.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-center text-4xl font-bold mb-4 mt-5 animate-slideright800">
            Scientific Committee
          </h2>

          {/* Another Blurred Transparent Card with Organizing Committee */}
          <div className="flex flex-row items-center mt-8 p-6 bg-transparent rounded-lg  ">
            <div className="grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center md:gap-8 ">
              {organizingcommittees.map((organizingcommittee) => (
                <div
                  key={organizingcommittee.id}
                  className="flex flex-col w-full h-full max-w-[300px] items-center bg-gradient-to-br bg-white drop-blur-lg border border-white to-uni-green2 bg-opacity-60
                  p-4 rounded-lg shadow-2xl my-6 md:my-0 transition-all ease-in-out duration-300 transform hover:scale-105"
                >
                  {organizingcommittee.image && (
                    <img
                      src={organizingcommittee.image}
                      alt={organizingcommittee.name}
                      className="w-full h-full max-w-[190px] max-h-[190px] bg-white shadow-2xl rounded-lg "
                    />
                  )}
                  <div className="w-full h-full flex flex-col items-center md:items-center p-2  ">
                    <h3 className=" px-2 text-xl font-bold text-gray-800 text-center md:text-center">
                      {organizingcommittee.name}
                    </h3>
                    {organizingcommittee.description && (
                      <div className="text-center md:text-center mt-2 h-20 overflow-y-auto text-uni-green border-0 text-sm px-2 rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                        {organizingcommittee.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-center text-4xl font-bold mb-4 mt-5 animate-slidleft800">
            Organizing Committee
          </h2>

          {/* Another Blurred Transparent Card with Organizing Committee */}
          <div className="flex flex-row items-center mt-8 p-6 bg-transparent rounded-lg  ">
            <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center md:gap-8 ">
              {scientificcommittees.map((steeringcommittee) => (
                <div
                  key={steeringcommittee.id}
                  className="flex flex-col w-full h-full max-w-[300px] justify-center items-center bg-gradient-to-br bg-white drop-blur-lg border border-white to-uni-green2 bg-opacity-60
                  p-2 rounded-lg shadow-2xl md:items-center my-2 md:my-0 transition-all ease-in-out duration-300 transform hover:scale-105"
                >
                  <div className="w-full h-full flex flex-col items-center md:items-center p-2  ">
                    <h3 className=" px-2 text-xl font-bold text-gray-800 text-center md:text-center">
                      {steeringcommittee.name}
                    </h3>
                    {steeringcommittee.description && (
                      <div className="flex-col justify-center text-center md:text-center mt-2 h-20 overflow-y-auto text-uni-green border-0 text-sm px-2 rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                        {steeringcommittee.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hicommittee;
