import AnimatedBanForHome from "@/custom/components/AnimatedBanForHome";
import "./Home.css";
import CountdownTimer from "./SubComponent/Discounter";
import EventOverview from "./SubComponent/EventOverview";
import FAQandFORMbanner from "./SubComponent/FAQandFORMbanner";
import ImportantDatesHighCommittee from "./SubComponent/ImportantDatesHighCommittee";
import Lp_venue from "./SubComponent/Lp_venue";
import LpSpeaker from "./SubComponent/LpSpeaker";
import SponsorPrtners from "./SubComponent/SponsorPrtners";
import SubmissionBanner from "./SubComponent/SubmissionBanner";


const Home = () => {
  const targetDate = "2025-05-12T23:59:59";

  return (
    <>
      <div className="z-20">
        <AnimatedBanForHome />
      </div>
      {/* Event Timer  */}
      <div className=" ml-36 md:ml-48 -mt-32 md:-mt-40 z-20 h-full w-1/4 flex flex-col justify-center items-center ">
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div

        className=" container mx-auto w-full h-full flex-col justify-center items-center py-4 md:px-16 md:py-14 animate-fadeInLeft"
      >
        {/* 1- Event Overview */}
        <EventOverview />
        {/* 2- Sponsor Partners */}
        <SponsorPrtners />
      </div>
      {/* 3- Important Dates & High committee */}
      <ImportantDatesHighCommittee />
      <div className="container mx-auto w-full h-full flex flex-col py-4 md:px-16 ">
        {/* 4- Event Speakers &  */}

        <LpSpeaker />
      </div>
      <SubmissionBanner />

      <div className=" container mx-auto w-full h-full flex flex-col py-4 md:px-16 ">
        <Lp_venue />
      </div>

      <FAQandFORMbanner />
    </>
  );
};

export default Home;
