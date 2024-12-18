import { mapInfo } from "@/constants/maps_Info";
import AnimatedBanner from "@/custom/components/AnimatedBanner";
import { useRef } from "react";
import { venueInfo } from "../../constants/venue-info";
import "../Contact/contact.css";

const Venue = () => {
  const venueRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <AnimatedBanner buttonRef={venueRef} buttonName="Venue" />

      {/* Venue Section */}
      <div
        ref={venueRef}
        className="flex justify-center -mt-6 md:-mt-14 w-full bg-white text-black h-auto p-4 animate-fadeInLeft"
      >
        <div className="relative flex flex-col rounded-lg shadow-xl bg-white p-4 md:justify-between w-full max-w-[900px] gap-6 ring-1 ring-uni-green2-light">
          {/* Headline */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-uni-green to bg-uni-green2 bg-clip-text text-transparent">
              Venue Information
            </h2>
          </div>

          <div className="flex flex-col md:flex-row rounded-lg bg-white p-4 md:justify-between w-full gap-6">
            {/* Left Section (25%) */}
            <div className="flex flex-col w-full md:w-2/4 h-auto mx-1 bg-gradient-to-bl gap-5 from-uni-green via-uni-green2 to-uni-green text-white p-5 justify-center items-start rounded-lg shadow-lg">
              {venueInfo.map((info, index) => (
                <div key={index} className="mb-4">
                  {info.title && (
                    <h1 className="text-xl font-extrabold">{info.title}</h1>
                  )}
                  <p className={info.isBold ? "text-lg font-extrabold" : ""}>
                    {info.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Section (75%) */}
            <div className="w-full md:w-3/4 h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                id="venue"
                src={mapInfo.map_src}
                width="100%"
                height="600"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Venue;
