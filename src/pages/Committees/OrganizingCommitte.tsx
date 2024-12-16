import { Bodytexture } from '@/assets'
import { scientificcommittees } from '@/constants/Organizing Committee'

const OrganizingCommitte = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-ful px-6 py-20 ">
          <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px]  "
        src={Bodytexture}
        alt="Texture"
      />
          <h2 className="p-2 text-center text-4xl font-bold mb-4 mt-5 animate-slidein200 bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent 
          bg-clip-text">
            Organizing Committee
          </h2>

          {/* Another Blurred Transparent Card with Organizing Committee */}
          <div className="flex flex-row items-center mt-8 p-6 bg-transparent rounded-lg animate-fadeInLeft ">
            <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center md:gap-8 ">
              {scientificcommittees.map((steeringcommittee) => (
                <div
                  key={steeringcommittee.id}
                  className="flex flex-col w-full h-full max-w-[300px] justify-center items-center bg-gradient-to-br bg-white drop-blur-lg border border-gray-500 to-uni-green2 bg-opacity-60
                  p-2 rounded-lg shadow-2xl md:items-center my-2 md:my-0 transition-all ease-in-out duration-300 transform hover:scale-105"
                >
                  <div className="w-full h-full flex flex-col items-center md:items-center p-2  ">
                    <h3 className=" px-2 text-xl font-bold text-gray-800 text-center md:text-center">
                      {steeringcommittee.name}
                    </h3>
                    {steeringcommittee.description && (
                      <div className="flex-col justify-center text-center md:text-center mt-2 h-20 overflow-y-auto text-uni-green border-0 text-sm px-2 rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                        {steeringcommittee.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default OrganizingCommitte