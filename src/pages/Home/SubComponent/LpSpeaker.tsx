import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { speakers } from "../../../constants/speakers";
import { Link } from "react-router";

const LpSpeaker = () => {
  return (
    <div className="flex flex-col w-full md:mb-20 ">
      {/* Speaker Text Section */}
      <div className="flex flex-col md:flex-row justify-start items-center md:justify-between">
        {/* Info text */}
        <div className="flex flex-col md:w-1/2">
          <h1 className=" text-lg mt-9 py-2 text-center md:text-start  text-uni-green2 md:text-xl">
            EVENT SPEAKERS
          </h1>
          <h2 className="text-center md:text-start font font-semibold text-2xl md:text-4xl md:font-bold">
            MEET OUR{" "}
            <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
              KEYNOTE SPEAKERS
            </span>
          </h2>
          <p className="font-medium text-center md:text-start  py-2 md:py-4 text-gray-500 md:text-lg">
            We are proud to have the following speakers for the ICIEF event. We
            are grateful for their support and contribution.
          </p>
        </div>
        {/* Button */}
        <Button className="w-1/2 md:w-1/5 mt-4 md:mt-6 bg-gradient-to-l from-uni-green2 to-uni-green2-light">
          <Link to="/speakers">View All Speakers</Link>
        </Button>
      </div>

      {/* Speaker image slider Section */}
      <div className="mt-8">
        {speakers.length === 0 ? (
          <div className="text-center text-2xl md:text-4xl font-semibold text-gray-700 animate-[cbounce_4s_ease-in-out_infinite]">
            <span className="bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
              Coming Soon!{" "}
            </span>
            Stay tuned for speaker announcements...
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                {/* Speaker Image */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 lg:h-[400px] object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold md:text-2xl">
                    {speaker.name}
                  </h3>
                  <p className="text-sm mb-3">{speaker.role}</p>
                  <div className="flex gap-3">
                    <a
                      href={speaker.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500"
                    >
                      <Facebook name="facebook" className="w-5 h-5" />
                    </a>
                    <a
                      href={speaker.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500"
                    >
                      <Linkedin name="twitter" className="w-5 h-5" />
                    </a>
                    <a
                      href={speaker.social.pinterest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500"
                    >
                      <Instagram name="pinterest" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LpSpeaker;
