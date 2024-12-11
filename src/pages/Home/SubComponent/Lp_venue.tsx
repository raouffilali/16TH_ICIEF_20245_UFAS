import { mapInfo } from "../../../constants/maps_Info";

const Lp_venue = () => {
  return (
    <div className="flex flex-col border-t-2 border-dashed border-uni-green2-light w-full ">
      {/* Sponsor Section */}
      <div className="flex flex-col">
        <h1 className=" text-lg mt-9 py-2 text-center text-uni-green2 md:text-xl">
          REACH US
        </h1>
        <h2 className="text-center  font-semibold text-2xl md:text-5xl md:font-bold">
          GET DIRECTIONS TO THE{" "}
          <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
            EVENT HALL
          </span>
        </h2>
        <p className="text-center py-2 md:py-4 text-gray-500 ">
          The event will be held at the Faculty of Economic, Commerce, and
          Management Sciences "Setif 1 University_Ferhat Abass" in Algeria
        </p>
      </div>

      {/* Venue details section */}
      <div className="flex flex-col md:flex-row gap-8 items-center pt-6 md:pt-4">
        {/* Venue Info */}
        <div className="bg-uni-green2 text-white rounded-lg p-8 w-full md:w-2/5">
          <h3 className="text-xl font-bold mb-4">Event Venue:</h3>
          <p className="mb-4">
            Faculty of Economic, Commerce, and Management Sciences
          </p>
          <h3 className="text-xl font-bold mb-4">Address:</h3>
          <p className="mb-4">Setif 1 University_Ferhat Abass, Algeria</p>
          <h3 className="text-xl font-bold mb-4">Reception Info:</h3>
          <p className="mb-4">Booking: (+213) 1234-5678</p>
          <a
            href={mapInfo.map_Link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-white text-uni-green2 font-semibold py-2 px-4 rounded-full hover:bg-uni-green2-light transition"
          >
            Get Directions
          </a>
        </div>

        {/* Map */}
        <div className="w-full md:w-3/5 border-2 border-dashed border-uni-green2-light rounded-lg shadow-lg">
          <iframe
            title="Event Location"
            src={mapInfo.map_src}
            width="100%"
            height="375"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Lp_venue;
