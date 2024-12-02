const Venue = () => {
  return (
    <>

      <div className="w-full bg-slate-700 h-[512px] flex items-start justify-center p-12">
        <h1 className="text-white p-6 text-center font-semibold md:font-bold md:text-3xl">
          WELCOME TO ICIEF 16TH EDITION{" "}
        </h1>
      </div>
      <div className=" flex flex-col rounded-lg mx-auto w-full  h-full -mt-[350px] md:w-1/2 md:-mt-80 p-6">
        <h1 className="text-white text-4xl font-bold mb-6 opacity-70 md:text-[60px] md:font-extrabold  ">
          Venue
        </h1>
        <div className="flex flex-col gap-y-6 w-full rounded-lg p-3 md:p-8 bg-white shadow-xl">
          <div className="flex flex-col">
            <h1 className="text-center text-pretty">
              The conference will take place at: Faculty of Economics, Comerce
              and Managment Science.
            </h1>
            <h2 className="mt-2 text-center text-pretty font-medium md:font-bold bg-gradient-to-l from-uni-green-dark to-uni-orane bg-clip-text text-transparent">
              SETIF 1 University Ferhat Abbas SETIF, Algeria
            </h2>
          </div>
          <div>
            <iframe
              className=" rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7848.097782744791!2d5.3534491360187415!3d36.197388829996854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f33e5a99993c61%3A0xbf33966b62b1a5ec!2zNTlXNitYOUcg2YPZhNmK2Kkg2KfZhNin2YLYqti12KfYr9iMINmH2LbYqNipINin2YTYqNin2LIsIFPDqXRpZg!5e1!3m2!1sen!2sdz!4v1733119937087!5m2!1sen!2sdz"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Venue;
