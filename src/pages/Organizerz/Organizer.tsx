import { organizers } from "../../constants/Organizors";
import { Bodytexture } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

const Organizer = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="relative pt-10 p-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center">
      {/* Wavy Bottom Effect */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px] "
        src={Bodytexture}
        alt="Texture"
      />

      <h1
        className="p-2 text-center bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent 
      bg-clip-text text-4xl font-bold mb-6 animate-slidein100 transition-all ease-in-out duration-300 transform hover:scale-105"
      >
        Conference Organizers
      </h1>
      <table className="w-full max-w-[900px] border-collapse mt-6 shadow-xl animate-fadeInLeft transition-all ease-in-out duration-300 transform hover:scale-105">
        <thead>
          <tr className="bg-white ">
            <th className="bg-gradient-to-r from-uni-green2 to-uni-green2 text-white py-3 px-4 text-left text-lg">
              No.
            </th>
            <th className="bg-gradient-to-r from-uni-green2 via-uni-green2-light to-transparent text-white py-3 px-4 text-left text-lg">
              Organizer Name
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="bg-white ">
            <td className="py-3 px-4 border border-gray-200 font-bold">01</td>
            <td className="py-3 px-4 border border-gray-200 font-bold">
              Faculty of Economic, Commerce, and Management Sciences "Setif 1
              University_Ferhat Abass"
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200 font-bold">02</td>
            <td className="py-3 px-4 border border-gray-200 font-bold">
              International Association for Islamic Economics
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200 font-bold">03</td>
            <td className="py-3 px-4 border border-gray-200 font-bold">
              High Islamic Council
            </td>
          </tr>
        </tbody>
      </table>
      <div className=" p-2 md:p-10 m-10 w-full h-full max-w-[900px] bg-gradient-to-br from-transparent via-uni-green2-light to-transparent rounded-md shadow-xl text-transparent animate-fadeInLeft">
        <Carousel
          className="flex flex-col p-6 rounded-sm  border-2 border-opacity-30 border-dashed border-uni-green2-light "
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {organizers.map((organizer) => (
              <CarouselItem
                key={organizer.id}
                className="flex flex-col items-center"
              >
                {organizer.image && (
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="p-3+ w-full h-full max-w-[150px] max-h-[150px] md:max-w-[300px] md:max-h-[300px] bg-white shadow-xl object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-lg md:text-xl font-bold text-white shadow-sm text-center">
                  {organizer.name}
                </h3>
                {organizer.description && (
                  <p className="mt-2 text-white shadow-sm text-center">
                    {organizer.description}
                  </p>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Organizer;
