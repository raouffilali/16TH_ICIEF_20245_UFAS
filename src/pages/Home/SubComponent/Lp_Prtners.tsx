import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { academic_partners } from "@/constants/Academic_partners";
import { Separator } from "@/components/ui/separator";

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
      {/* Sponsor Section */}
      <div className="flex flex-col">
        <h1 className="text-lg mt-9 md:mt-14 py-2 md:text-center text-uni-green2 md:text-xl">
          OUR PARTNERS
        </h1>
        <h2 className="md:text-center font-semibold text-2xl md:text-5xl md:font-bold">
          ACADEMIC{" "}
          <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
            PARTNERS
          </span>
        </h2>
        <p className="md:text-center py-2 md:py-4 text-gray-500 mb-4 md:mb-10">
          We are proud to have the following partners for the ICIEF event. We
          are grateful for their support and contribution.
        </p>
      </div>

      {/* Sponsor Grid */}
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
    </div>
  );
};

export default Lp_Prtners;
