import AnimatedBanForHome from "@/custom/components/AnimatedBanForHome";
import EventOverview from "./SubComponent/EventOverview";
import SponsorPrtners from "./SubComponent/SponsorPrtners";
import LpSpeaker from "./SubComponent/LpSpeaker";
import ImportantDatesHighCommittee from "./SubComponent/ImportantDatesHighCommittee";
import "./Home.css";
import CountdownTimer from "./SubComponent/Discounter";
import SubmissionBanner from "./SubComponent/SubmissionBanner";

const Home = () => {
  const targetDate = "2024-12-31T23:59:59";
  return (
    <>
      <AnimatedBanForHome buttonName={"Learn More"}/>
      {/* Event Timer  */}
      <div className=" ml-36 md:ml-40 -mt-32 md:-mt-40 z-20  h-full w-1/4 flex flex-col justify-center items-center ">
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div className="container mx-auto w-full h-full flex-col py-4 md:px-16 md:py-14 ">
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
    </>
  );
};

export default Home;
