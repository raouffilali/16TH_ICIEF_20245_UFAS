import { Button } from "@/components/ui/button";

const LpSpeaker = () => {
  return (
    <div className="flex flex-col w-full mb-2 ">
      {/* Speaker Text Section */}
      <div className="flex flex-col md:flex-row justify-start items-center md:justify-between">
        {/* infot text */}
        <div className="flex flex-col md:w-1/2">
          <h1 className=" text-lg mt-9 py-2 text-center md:text-start  text-uni-green2 md:text-xl">
            EVENT SPEAKERS
          </h1>
          <h2 className="text-center md:text-start font font-semibold text-2xl md:text-4xl md:font-bold">
            MEET OUR{" "}
            <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
              SPEAKERS
            </span>
          </h2>
          <p className="text-center md:text-start  py-2 md:py-4 text-gray-500 md:text-lg">
            We are proud to have the following speakers for the ICIEF event. We
            are grateful for their support and contribution.
          </p>
        </div>
        {/* Button */}
        <Button className="w-1/2 md:w-1/5 mt-8 md:mt-6 bg-gradient-to-l from-uni-green2 to-uni-green2-light">
          Meet our Speakers
        </Button>
      </div>

      {/* Speaker image slider Section */}
      <div className=""></div>
    </div>
  );
};

export default LpSpeaker;
