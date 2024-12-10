import { Conf } from '@/assets'
import { highcommittees } from '@/constants/Highcommittee';

const ImportantDatesHighCommittee = () => {
  return (
    <div className="w-full relative my-[50px] h-full py-5 overflow-hidden animate-slidein300">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${Conf})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="w-full absolute inset-0 bg-gradient-to-r from-uni-green2 to-uni-green2-light opacity-90"></div>
      <div className="container items-center xl:items-start mx-auto w-full h-full flex-col py-4 md:px-16 ">
        <h1 className="relative text-center md:text-left text-xl md:text-3xl font-bold md:font-bold text-white px-4 py-4 my-4">
          Important Dates
        </h1>

        <div className="relative flex flex-col items-center w-full text-white border-b-2 pb-8 border-opacity-50">
          <div className="flex flex-col items-center xl:w-full xl:flex-row divide-y-2 xl:divide-x-2 xl:divide-y-0  ">
            <div className="w-full h-full flex flex-col items-center ">
              <h1 className="w-full text-2xl md:text-3xl font-semibold md:font-bold text-center">
                05/12/2024
              </h1>
              <p className=" w-full text-center text-md font-bold pb-4 md:pt-8">
                Submission Opening
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center ">
              <h1 className="w-full text-2xl md:text-3xl font-semibold md:font-bold pt-4 md:pt-0 text-center">
                15/02/2025
              </h1>
              <p className="w-full text-center text-md font-bold pb-4 md:pt-8">
                Full Paper Submission Deadline
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center ">
              <h1 className="w-full text-2xl md:text-3xl font-semibold md:font-bold pt-4 md:pt-0 text-center">
                15/03/2025
              </h1>
              <p className="w-full text-center text-md font-bold pb-4 md:pt-8">
                Scientific Committee Decision
              </p>
            </div>
            <div className="w-full h-full flex flex-col items-center ">
              <h1 className="w-full text-2xl md:text-3xl font-semibold md:font-bold pt-4 md:pt-0 text-center">
                13-15/05/2025
              </h1>
              <p className="w-full text-center text-md font-bold pb-4 md:pt-8 ">
                Conference Dates
              </p>
            </div>
          </div>
        </div>

        <h1 className="relative text-center md:text-start text-xl md:text-3xl font-bold md:font-bold text-white px-4 py-8 my-4">
          High Committee
        </h1>
        <div className="relative flex flex-col items-center md:flex-row mx-4 gap-4">
          <div className="relative p-5 rounded-lg  shadow-uni-green2 w-full h-full mx-auto-50 flex flex-col gap-4 md:flex-row items-center ">
            {highcommittees.map((Highcommittee) => (
              <div
                key={Highcommittee.id}
                className="w-full flex flex-col h-full xl:max-h-[190px] items-center xl:flex-row xl:items-start bg-black bg-opacity-50 to-white
                  p-4 rounded-lg xl:w-[calc(50%-16px)] mb-6 mt-6 xl:mb-0 xl:mt-0 transition-all ease-in-out duration-300 transform hover:scale-105 "
              >
                {Highcommittee.image && (
                  <img
                    src={Highcommittee.image}
                    alt={Highcommittee.name}
                    className="w-full h-auto max-w-[130px] bg-white shadow-2xl  object-cover rounded-lg mb-4 animate-slidleft800"
                  />
                )}
                <div className="w-full h-full flex flex-col items-center md:items-center px-1 animate-slideright800">
                  <h3 className="px-1 xl:text-xl text-xl font-bold text-white text-center md:text-center xl:text-start">
                    {Highcommittee.name}
                  </h3>
                  {Highcommittee.description && (
                    <div className="text-center xl:text-start mt-2 h-24 overflow-y-auto overflow-hidden text-white border-0 text-sm px-2 md:text-sm rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                      {Highcommittee.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantDatesHighCommittee