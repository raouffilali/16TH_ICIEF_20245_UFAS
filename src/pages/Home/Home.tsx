import AnimatedBanForHome from "@/custom/components/AnimatedBanForHome";
import SponsorPrtners from "./SubComponent/SponsorPrtners";
import LpSpeaker from "./SubComponent/LpSpeaker";

const Home = () => {
  return (
    <>
      <AnimatedBanForHome buttonName={"Learn More"} />
      {/* Event Timer  */}
      

      <div className="container mx-auto w-full h-full flex flex-col py-4 md:px-16 ">
      {/* 1- Event Overview */}  
      
      {/* 2- Sponsor Partners */}
      <SponsorPrtners/>

      {/* 3- Important Dates & High committee */}

      {/* 4- Event Speakers &  */}
      <LpSpeaker/>

      </div>

    </>
  );
};

export default Home;
