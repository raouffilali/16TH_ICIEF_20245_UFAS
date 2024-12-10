import { Conf } from '@/assets'

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

      <h1 className="relative text-center md:text-start text-5xl font-bold text-white px-4 py-8 my-4">
        Important Dates
      </h1>

      <div className="relative flex flex-col items-center w-full text-white ">
        <div className="w-auto flex flex-col items-center md:flex-row md:gap-6 divide-y-2 md:divide-x-2 md:divide-y-0  ">
          <div className="w-full h-full flex flex-col items-center md:pl-9 ">
            <h1 className="text-4xl font-bold ">05/12/2024</h1>
            <p className="text-center pb-4 md:pt-8">Submission Opening</p>
          </div>
          <div className="w-full h-full flex flex-col items-center md:pl-9">
            <h1 className="text-4xl font-bold pt-4 md:pt-0">05/12/2024</h1>
            <p className="text-center pb-4 md:pt-8">Submission Opening</p>
          </div>
          <div className="w-full h-full flex flex-col items-center md:pl-9">
            <h1 className="text-4xl font-bold pt-4 md:pt-0">05/12/2024</h1>
            <p className="text-center pb-4 md:pt-8">Submission Opening</p>
          </div>
          <div className="w-full h-full flex flex-col items-center md:pl-9">
            <h1 className="text-4xl font-bold pt-4 md:pt-0">05/12/2024</h1>
            <p className="text-center pb-4 md:pt-8">Submission Opening</p>
          </div>
        </div>
      </div>

      <h1 className="relative text-center md:text-start text-5xl font-bold text-white px-4 py-8 my-4">
        High Committee
      </h1>
    </div>
  );
}

export default ImportantDatesHighCommittee