import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { academic_partners } from "@/constants/Academic_partners";
import { media } from "@/constants/media";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { organizers } from "@/constants/Organizors";
import {comming_soon} from "@/assets";

const Lp_Prtners = () => {
  const [selectedPartner, setSelectedSponsor] = useState({
    logo: "",
    name: "",
    website: "",
    description: "",
  });

  const openDialog = (
    logo: string,
    name: string,
    website: string,
    description: string
  ) => {
    setSelectedSponsor({ logo, name, website, description });
  };

  return (
    <div className="flex flex-col border-t-2 border-dashed border-uni-green2-light w-full mt-16 md:mt-36">
      {/* Academic Partners Section */}
      <div className="flex flex-col">
        <h2 className="md:text-center font-semibold text-2xl md:text-5xl md:font-bold mt-9 md:mt-14 py-2">
          ACADEMIC{" "}
          <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
            PARTNERS
          </span>
        </h2>
        <p className="md:text-center py-2 md:py-4 text-gray-500 mb-4 md:mb-10">
          We are proud to have the following partners for the 16th ICIEF event.
          We are grateful for their support and contribution.
        </p>
      </div>
      {/*  Grid */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
          {academic_partners.map((academic_partner, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="relative group overflow-hidden rounded-lg shadow-lg border-2 border-dashed border-gray-300 cursor-pointer"
                  onClick={() =>
                    openDialog(
                      academic_partner.logo,
                      academic_partner.name,
                      academic_partner.website,
                      academic_partner.description
                    )
                  }
                >
                  {/* Sponsor Image */}
                  <img
                    src={academic_partner.logo}
                    alt={academic_partner.name}
                    className="w-full h-40 md:h-60 object-contain"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-uni-green bg-opacity-75 text-white flex items-center justify-center transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm text-center font-bold md:text-xl">
                      {academic_partner.name} <br />{" "}
                      <span className="text-uni-yellow mt-1">
                        click for details
                      </span>
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-full md:w-1/2 md:overflow-auto rounded-lg">
                <DialogHeader>
                  <DialogTitle>{selectedPartner.name}</DialogTitle>
                  <Separator />
                  <DialogDescription>
                    <img
                      src={selectedPartner.logo}
                      alt={selectedPartner.name}
                      className="w-full h-auto rounded-md mb-4 object-contain"
                    />
                    <p className="text-gray-700">
                      <strong>Description:</strong>{" "}
                      {selectedPartner.description}
                    </p>
                    <p className="text-gray-700 mb-2 mt-2">
                      <strong>Website:</strong>{" "}
                      <a
                        href={selectedPartner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-uni-green2-light hover:text-uni-yellow "
                      >
                        {selectedPartner.website}
                      </a>
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {/* Media partners */}
      <div className="flex flex-col border-t-2 border-dashed border-uni-green2-light w-full mt-32 md:mt-60">
        <h2 className="md:text-center font-semibold text-2xl md:text-5xl md:font-bold mt-16 md:mt-28">
          MEDIA{" "}
          <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
            PARTNERS
          </span>
        </h2>
        <p className="md:text-center py-2 md:py-4 text-gray-500 mb-4 md:mb-10">
          We are proud to have the following partners for the 16th ICIEF event.
          We are grateful for their support and contribution.
        </p>
      </div>
      {/*  Grid */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 ">
          {media.length === 0
            ? Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg border-2 border-dashed border-gray-300 cursor-pointer bg-gray-200 "
                >
                  <div className="w-40 md:w-80 h-40 md:h-60 bg-gray-300"></div>
                  <div className="absolute inset-0 bg-gray-100 bg-opacity-75 text-white flex items-center justify-center">
                    <img src={comming_soon} alt="" />
                  </div>
                </div>
              ))
            : media.map((_media_partner, _index) => (
                <div>comming soon!!</div>
                // <Dialog key={index}>
                // <DialogTrigger asChild>
                //   <div
                //   className="relative group overflow-hidden rounded-lg shadow-lg border-2 border-dashed border-gray-300 cursor-pointer"
                //   onClick={() =>
                //     openDialog(
                //     media_partner.logo,
                //     media_partner.name,
                //     media_partner.website,
                //     media_partner.description
                //     )
                //   }
                //   >
                //   {/* Media Partner Image */}
                //   <img
                //     src={media_partner.logo}
                //     alt={media_partner.name}
                //     className="w-full h-40 md:h-60 object-contain"
                //   />

                //   {/* Hover Overlay */}
                //   <div className="absolute inset-0 bg-uni-green bg-opacity-75 text-white flex items-center justify-center transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                //     <h3 className="text-sm text-center font-bold md:text-xl">
                //     {media_partner.name} <br />{" "}
                //     <span className="text-uni-yellow mt-1">
                //       click for details
                //     </span>
                //     </h3>
                //   </div>
                //   </div>
                // </DialogTrigger>
                // <DialogContent className="w-full md:w-1/2 md:overflow-auto rounded-lg">
                //   <DialogHeader>
                //   <DialogTitle>{selectedPartner.name}</DialogTitle>
                //   <Separator />
                //   <DialogDescription>
                //     <img
                //     src={selectedPartner.logo}
                //     alt={selectedPartner.name}
                //     className="w-full h-auto rounded-md mb-4 object-contain"
                //     />
                //     <p className="text-gray-700">
                //     <strong>Description:</strong>{" "}
                //     {selectedPartner.description}
                //     </p>
                //     <p className="text-gray-700 mb-2 mt-2">
                //     <strong>Website:</strong>{" "}
                //     <a
                //       href={selectedPartner.website}
                //       target="_blank"
                //       rel="noopener noreferrer"
                //       className="text-uni-green2-light hover:text-uni-yellow "
                //     >
                //       {selectedPartner.website}
                //     </a>
                //     </p>
                //   </DialogDescription>
                //   </DialogHeader>
                // </DialogContent>
                // </Dialog>
              ))}
        </div>
      </div>

      {/* Event partners organizers */}
      <div className="flex flex-col border-t-2 border-dashed border-uni-green2-light w-full mt-32 md:mt-60">
        <h2 className="md:text-center font-semibold text-2xl md:text-5xl md:font-bold mt-16 md:mt-28">
          <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
            ORGANIZERS
          </span>
        </h2>
        <p className="md:text-center py-2 md:py-4 text-gray-500 mb-4 md:mb-10">
          We are honored to have the following organizers for the 16th ICIEF
          event. Their dedication and hard work make this event possible.
        </p>
      </div>

      {/*  Grid */}
      <div className="flex justify-center  ">
        <div className="grid grid-cols-2 gap-4 md:gap-6 ">
          {!organizers?.length
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg border-2 border-dashed border-gray-300 cursor-pointer bg-gray-200 animate-pulse"
                >
                  <div className="w-40 md:w-80 h-40 md:h-60 bg-gray-300"></div>
                  <div className="absolute inset-0 bg-gray-400 bg-opacity-75 text-white flex items-center justify-center">
                    <h3 className="text-sm text-center font-bold md:text-xl">
                      <Loader2 className="w-10 h-10 animate-spin" />
                    </h3>
                  </div>
                </div>
              ))
            : organizers.map((organizer, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg border-2 border-dashed border-gray-300 cursor-pointer"
                >
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-40 md:h-60 object-contain p-4"
                  />
                  <div className="absolute inset-0 bg-uni-green bg-opacity-75 text-white flex items-center justify-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                    <h3 className="text-sm text-center font-bold md:text-xl px-4">
                      {organizer.name}
                    </h3>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Lp_Prtners;
