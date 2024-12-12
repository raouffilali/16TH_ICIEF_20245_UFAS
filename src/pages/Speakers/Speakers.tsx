import { useEffect } from "react";

const Speakers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="absolute animate-[cbounce_4s_ease-in-out_infinite] z-10 w-full h-[20%] flex flex-col justify-end items-center bg-gray-50 dark:bg-gray-900">
          <h1 className="sm:text-9xl text-7xl font-extrabold font-mono bg-gradient-to-r from-green-600 via-uni-green2-light to-uni-green inline-block text-transparent bg-clip-text">
            قريباً
          </h1>
        </div>
        <div className="absolute w-full h-[50%] flex flex-col items-center justify-end bg-gray-50 dark:bg-gray-900">
          <h1 className="sm:text-7xl text-6xl text-center font-mono font-extrabold bg-gradient-to-r from-green-600 via-uni-green2-light to-uni-green inline-block text-transparent bg-clip-text">
            Coming Soon...
          </h1>
          <div
            id="countdown"
            className="flex items-center justify-center text-gray-500 dark:text-white text-2xl font-extrabold"
          >
            <span id="days" className="px-2">
              {" "}
              ICIEF
            </span>
            <span id="hours" className="px-2">
              16TH
            </span>
            <span id="minutes" className="px-2">
              EDITTION
            </span>
            <span id="seconds" className="px-2">
              2025
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;
