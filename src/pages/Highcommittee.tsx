import { organizers } from "./Organizors";
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
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  return (
    <div className="relative pt-24 p-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center">
      {/* Wavy Bottom Effect */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px]"
        src={Bodytexture}
        alt="Texture"
      />

      <h1 className="text-center bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent bg-clip-text text-4xl font-bold mb-6 animate-slidein300">
        Conference Organizers
      </h1>
      <table className="w-full max-w-[900px] border-collapse mt-6 shadow-xl animate-slidein500">
        <thead>
          <tr className="bg-white">
            <th className="bg-gradient-to-r from-uni-green2 to-uni-green2 text-white py-3 px-4 text-left text-lg">
              No.
            </th>
            <th className="bg-gradient-to-r from-uni-green2 to-uni-green2-light text-white py-3 px-4 text-left text-lg">
              Organizer Name
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200">01</td>
            <td className="py-3 px-4 border border-gray-200">
              Faculty of Economic, Commerce, and Management Sciences "Setif 1
              University_Ferhat Abass"
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200">02</td>
            <td className="py-3 px-4 border border-gray-200">
              International Association for Islamic Economics
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200">03</td>
            <td className="py-3 px-4 border border-gray-200">
              High Islamic Council
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200">03</td>
            <td className="py-3 px-4 border border-gray-200">
              High Islamic Council
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200">03</td>
            <td className="py-3 px-4 border border-gray-200">
              High Islamic Council
            </td>
          </tr>
        </tbody>
      </table>
      <div className="m-10 w-full max-w-[900px]">
  <Carousel  
    className="flex flex-col  animate-slidein700 "
    plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
  >
    <CarouselContent>
      {organizers.map((organizer) => (
        <CarouselItem key={organizer.id} className="flex flex-col items-center">
          
            {organizer.image && (
              <img
                src={organizer.image}
                alt={organizer.name}
                className="w-full h-full max-w-[300px] max-h-[300px] bg-white shadow-xl object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-uni-green2 text-center">{organizer.name}</h3>
            {organizer.description && (
              <p className="mt-2 text-gray-700 text-center">
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
