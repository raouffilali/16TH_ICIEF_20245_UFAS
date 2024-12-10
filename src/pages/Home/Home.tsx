import AnimatedBanForHome from "@/custom/components/AnimatedBanForHome";
import EventOverview from "./SubComponent/EventOverview";
import SponsorPrtners from "./SubComponent/SponsorPrtners";
import LpSpeaker from "./SubComponent/LpSpeaker";
import ImportantDatesHighCommittee from "./SubComponent/ImportantDatesHighCommittee";
import './Home.css';
import SubmissionBanner from "./SubComponent/SubmissionBanner";


const Home = () => {
  return (
    <>
      <AnimatedBanForHome buttonName={"Learn More"} />
      {/* Event Timer  */}

      <div className="container mx-auto w-full h-full flex-col py-4 md:px-16 ">
        {/* 1- Event Overview */}
        <EventOverview />
        {/* 2- Sponsor Partners */}
        <SponsorPrtners />
        <div />
        {/* 3- Important Dates & High committee */}
        <ImportantDatesHighCommittee />
        <div className="container mx-auto w-full h-full flex flex-col py-4 md:px-16 "></div>
        {/* 4- Event Speakers &  */}
        <LpSpeaker />
      </div>
      {/* 5- Submission Banner  */}
      <SubmissionBanner />
    </>
  );
};

export default Home;
