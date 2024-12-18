import { PhoneCallIcon } from "lucide-react";
import { mapInfo } from "../../../constants/maps_Info";

const Lp_venue = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Sponsor Section */}
      <div className="flex flex-col">
        <h1 className="text-lg mt-9 py-2 md:text-center text-uni-green2 md:text-xl">
          REACH US
        </h1>
        <h2 className="md:text-center font-semibold text-2xl md:text-5xl md:font-bold">
          GET DIRECTIONS TO THE{" "}
          <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
            EVENT HALL
          </span>
        </h2>
        <p className="md:text-center text-justify py-2 md:py-4 text-gray-500">
          The event will be held at the Faculty of Economics, Commerce, and
          Management Sciences "Setif 1 University Ferhat Abbas" in Algeria
        </p>
      </div>

      {/* Venue details section */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch pt-6 md:pt-4">
        {/* Venue Info */}
        <div className="bg-uni-green2 text-white rounded-lg p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-xl font-bold mb-4">Event Venue:</h3>
            <p className="mb-4">
              Faculty of Economics, Commerce, and Management Sciences
            </p>
            <h3 className="text-xl font-bold mb-4">Address:</h3>
            <p className="mb-4">Setif 1 University Ferhat Abbas, Algeria</p>
            <h3 className="text-xl font-bold mb-4">Reception Info:</h3>
            <div className="flex flex-row gap-2">
              <PhoneCallIcon />
              <p className="mb-4">036 42 01 50</p>
            </div>
          </div>
          <a
            href={mapInfo.map_Link}
            target="_blank"
            rel="noopener noreferrer"
            className= " text-center md:w-1/2 md:mx-auto inline-block mt-4 bg-white text-uni-green2 font-semibold py-2 px-4 rounded-full hover:bg-uni-green2-light transition"
          >
            Get Directions
          </a>
        </div>

        {/* Map */}
        <div className="w-full md:w-2/5 border-2 border-dashed border-uni-green2-light rounded-lg shadow-lg flex items-center justify-center min-h-[400px]">
          <iframe
            title="Event Location"
            src={mapInfo.map_src}
            className="w-full h-full rounded-lg"
            style={{
              border: "none",
              height: "400px"
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Lp_venue;
