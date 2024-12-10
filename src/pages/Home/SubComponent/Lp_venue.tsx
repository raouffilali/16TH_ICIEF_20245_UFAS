const Lp_venue = () => {
  return (
    <div className="flex flex-col border-t-2 border-dashed border-uni-green2-light w-full ">
      {/* Sponsor Section */}
      <div className="flex flex-col">
        <h1 className=" text-lg mt-9 py-2 text-center text-uni-green2 md:text-xl">
          REACH US
        </h1>
        <h2 className="text-center  font-semibold text-2xl md:text-5xl md:font-bold">
          GET DIRECTION TO THE{" "}
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
            href="#"
            className="inline-block mt-4 bg-white text-uni-green2 font-semibold py-2 px-4 rounded-full hover:bg-uni-green2-light transition"
          >
            Get Directions
          </a>
        </div>

        {/* Map */}
        <div className="w-full md:w-3/5 border-2 border-dashed border-uni-green2-light rounded-lg shadow-lg">
          <iframe
            title="Event Location"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3923.9911245374446!2d5.362661276473721!3d36.198541372424756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x12f33e5a99993c61%3A0xbf33966b62b1a5ec!2zNTlXNitYOUcg2YPZhNmK2Kkg2KfZhNin2YLYqti12KfYr9iMINmH2LbYqNipINin2YTYqNin2LIsIFPDqXRpZg!3m2!1d36.197181!2d5.3609165!5e0!3m2!1sen!2sdz"
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
