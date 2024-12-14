
const ImportantDates = () => {
     const dates = [
       { date: "05/12/2024", description: "Submission Opening" },
       { date: "15/02/2025", description: "Full Paper Submission Deadline" },
       { date: "15/03/2025", description: "Scientific Committee Decision" },
       { date: "13-15/05/2025", description: "Conference Dates" },
     ];
  return (
    <div className="container items-center mx-auto w-full h-full flex-col py-12 md:px-16 ">
      <h1 className="underline relative text-center text-4xl md:text-3xl font-bold md:font-bold bg-gradient-to-r from-uni-green via-uni-green2 to-uni-green bg-clip-text text-transparent px-4 py-12 my-4">
        Important Dates
      </h1>
      <div className="relative flex flex-col items-center w-full rounded-md text-uni-green2">
        <div className="flex flex-col items-center xl:w-full xl:flex-row gap-2 md:gap-4 rounded-md">
          {dates.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-uni-green2 via-uni-green2-light to-uni-green2 hover:cursor-pointer rounded-md"
            >
              <h1 className="w-full text-2xl md:text-3xl font-bold text-center text-white drop-shadow-md">
                {item.date}
              </h1>
              <p className="w-full text-center text-md md:text-lg font-semibold text-gray-100 pt-2 md:pt-8 drop-shadow-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImportantDates