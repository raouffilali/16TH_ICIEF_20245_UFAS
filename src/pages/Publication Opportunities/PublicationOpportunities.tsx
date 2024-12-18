import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bodytexture, magas_1, magas_2, magas_3 } from "@/assets";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const PublicationOpportunities = () => {
      const [animationClass, setAnimationClass] = useState("animate-slidein500");
    useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        setAnimationClass("animate-bounce");
      }, 3000);
    }, []);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "", info: "", link: "" });

  const openDialog = (src: string, alt: string, info: string, link: string) => {
    setSelectedImage({ src, alt, info, link });
  };

  return (
    <div className="relative pt-10 p-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center">
      {/* Background Effect */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />

      {/* Page Content */}
      <div className="flex flex-col items-center relative z-10 w-full max-w-[950px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein300">
          Publication Opportunities:
        </h2>
        <ul className="list-none text-left space-y-4 text-base md:text-xl font-medium animate-slidein400">
          <li>
            • All accepted full papers will be published in the conference
            proceedings with an ISBN.
          </li>
          <li>
            • The best papers will be selected for publication in a special
            issue of the Journal of Economics and Management Sciences, Journal
            of King Abdulaziz: Islamic Economics (indexed in SCOPUS), The
            Algerian Review of Financial & Banking Studies, and the Algerian
            Journal of Economics and Financial Research.
          </li>
        </ul>
        <ChevronDown
          className={`text-uni-green2 md:w-12 w-10 h-12 mt-6 ${animationClass}`}
        />

        <div className=" md:mt-8 mb-12 grid grid-cols-2 md:grid-cols-3 gap-4 animate-slidein500">
          {[
            {
              src: magas_3,
              alt: "Journal 1",
              info: "The Algerian Review of Financial & Banking Studies",
              link: "https://asjp.cerist.dz/en/PresentationRevue/497",
            },
            {
              src: magas_2,
              alt: "Journal 2",
              info: "Journal of King Abdulaziz: Islamic Economics (indexed in SCOPUS)",
              link: "https://journals.kau.edu.sa/index.php/JKAUIE",
            },
            {
              src: magas_1,
              alt: "Journal 3",
              info: "The Algerian Journal of Economics and Financial Research",
              link: "https://asjp.cerist.dz/en/PresentationRevue/63",
            },
          ].map((mag, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="relative group transform transition-transform duration-300 hover:scale-105 border-2 border-green-950 border-opacity-65 rounded-md cursor-pointer"
                  onClick={() =>
                  openDialog(mag.src, mag.alt, mag.info, mag.link)
                  }
                >
                  <img
                  className="w-full h-full object-cover"
                  src={mag.src}
                  alt={mag.alt}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 rounded-b-md bg-opacity-75 text-white p-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm md:font-bold">{mag.info}</p>
                  <a
                    href={mag.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-uni-yellow underline"
                  >
                    Read more
                  </a>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className=" md:overflow-auto">
                <DialogHeader>
                  <DialogTitle>{selectedImage.alt}</DialogTitle>
                  <Separator className="mb-3" />
                  <DialogDescription>
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-auto rounded-md"
                    />
                    <p className="mt-4 font-bold">{selectedImage.info}</p>
                    <a
                      href={selectedImage.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-uni-yellow underline mt-2 block"
                    >
                      Read more
                    </a>
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

export default PublicationOpportunities;