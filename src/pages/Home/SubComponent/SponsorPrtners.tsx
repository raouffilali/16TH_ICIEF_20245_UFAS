import { sponsors } from "@/assets";
import { Button } from "@/components/ui/button";
const SponsorPrtners = () => {
  return (
    <div className="flex flex-col border-t-2 border-dashed border-uni-green2-light w-full ">
      {/* Sponsor Section */}
      <div className="flex flex-col">
        <h1 className=" text-lg mt-9 py-2 text-center text-uni-green2 md:text-xl">
          OUR PARTNERS
        </h1>
        <h2 className="text-center  font-semibold text-2xl md:text-5xl md:font-bold">
          SPONSORS AND{" "}
          <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
            PARTNERS
          </span>
        </h2>
        <p className="text-center py-2 md:py-4 text-gray-500 ">
          We are proud to have the following sponsors and partners for the ICIEF
          event. We are grateful for their support and contribution.
        </p>
      </div>

      {/* Sponsor Image */}
      <div className="flex flex-col justify-center items-center pt-6 md:pt-4">
        <img
          src={sponsors}
          alt="Sponsors"
          className="w-full h-auto md:w-3/4 md:h-auto border-2 border-opacity-30 border-dashed border-uni-green2-light rounded-md shadow-xl md:shadow-2xl"
        />
      </div>
      <div className="flex justify-center items-center ">
        <Button className="w-1/3 md:w-1/5 mt-8 md:mt-6 bg-gradient-to-l from-uni-green2 to-uni-green2-light">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default SponsorPrtners