import { Bodytexture } from "@/assets";
import { highcommittees } from "../../constants/Highcommittee";
import { motion } from "framer-motion";

const pageVariants = {
  
};

const Hicommittee = () => {
  return (
    <motion.div
      className="relative pt-24 p-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.6 }}
    >
      {/* Background Effect */}
      <img
        className="absolute inset-0 w-full h-full gap-7 object-cover opacity-25 blur-[0.5px]"
        src={Bodytexture}
        alt="Texture"
      />

      {/* Title */}
      <h1
        className="p-2 text-center items-center bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent 
      bg-clip-text text-4xl font-bold mb-5 "
      >
        High Committee
      </h1>

      {/* Container */}
      <div className="m-10 w-full gap-4 max-w-[1000px] md:flex md:gap-8 flex-wrap animate-fadeInLeft">
        {highcommittees.map((Highcommittee, index) => (
          <div
            key={Highcommittee.id}
            className={`flex flex-col h-full items-center  md:flex-row md:items-start bg-gradient-to-br from-uni-green2 via-uni-green2-light to-uni-green2 
              p-4 rounded-lg shadow-xl  ${
                index === 2 ? "md:w-full" : "md:w-[calc(50%-16px)]"
              } mb-4 md:mb-0`}
          >
            {Highcommittee.image && (
              <img
                src={Highcommittee.image}
                alt={Highcommittee.name}
                className="w-full h-auto max-w-[150px] bg-white shadow-2xl object-cover rounded-lg mb-4 "
              />
            )}
            <div className="w-full h-full flex flex-col items-center md:items-start p-2 ">
              <h3 className="text-xl font-bold text-white text-center md:text-start">
                {Highcommittee.name}
              </h3>
              {Highcommittee.description && (
                <p className="text-gray-100 text-center md:text-start overflow-auto">
                  {Highcommittee.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hicommittee;
