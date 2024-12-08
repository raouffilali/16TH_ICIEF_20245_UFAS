import { Bodytexture } from "@/assets";
import { Book, GraduationCap, BriefcaseBusiness, } from 'lucide-react';

const participants = [
  {
    title: "Academic Researchers",
    description:
      "Experts and scholars dedicated to studying the evolution and dynamics of Islamic finance. They bring a wealth of knowledge and research to the conference discussions.",
    icon: <GraduationCap className="size-20 text-uni-green2"/>,
  },
  {
    title: "PhD Students",
    description:
      "Emerging thought leaders and innovators in the field of Islamic finance, pursuing advanced academic research to drive industry progress.",
    icon: <Book className="size-20 text-uni-green2"/>,
  },
  {
    title: "Professionals from Banking and Finance",
    description:
      "Practitioners from banking, insurance, stock exchanges, central banks, and the Ministry of Finance. These professionals contribute practical insights and explore new opportunities for industry development.",
    icon: <BriefcaseBusiness className="size-20 text-uni-green2"/>,
  },
];

const TargetParticipants = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-16 px-8">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Title */}
        <h1
          className="p-1 text-center items-center bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent 
          bg-clip-text text-4xl font-bold mb-5 animate-slidein100  "
        >
          Target Participants
        </h1>
        <p className="text-lg md:text-3xl font-semibold md:italic text-center mb-12 text-gray-600 animate-slidein100">
          Join a diverse group of participants shaping the future of Islamic
          finance.
        </p>

        {/* Participant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 items lg:grid-cols-3 gap-8 animate-fadeInLeft">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="bg-white shadow-[0_0_20px_10px_rgba(15,90,8,0.1)] rounded-lg  p-6 flex flex-col items-center space-y-4 transition hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="text-6xl text-uni-green2">{participant.icon}</div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl shadow-sm text-center font-bold text-uni-green">
                {participant.title}
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-center">{participant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetParticipants;
