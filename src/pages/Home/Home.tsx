import AnimatedBanForHome from "@/custom/components/AnimatedBanForHome";
import EventOverview from "./SubComponent/EventOverview";
import SponsorPrtners from "./SubComponent/SponsorPrtners";
import LpSpeaker from "./SubComponent/LpSpeaker";
import ImportantDatesHighCommittee from "./SubComponent/ImportantDatesHighCommittee";
import "./Home.css";
import CountdownTimer from "./SubComponent/Discounter";
import SubmissionBanner from "./SubComponent/SubmissionBanner";
import Lp_venue from "./SubComponent/Lp_venue";
import FAQandFORMbanner from "./SubComponent/FAQandFORMbanner";
import { Bodytexture } from "@/assets";
import { useRef } from "react";

const Home = () => {
  const targetDate = "2025-05-12T23:59:59";
  const mainRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="z-20">
        <AnimatedBanForHome buttonName={"Learn More"} buttonRef={mainRef} />
      </div>
      {/* Event Timer  */}
      <div className="relative ml-36 md:ml-48 -mt-32 md:-mt-40 z-20 h-full w-1/4 flex flex-col justify-center items-center ">
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover opacity-10 blur-[0.5px]"
            src={Bodytexture}
            alt="Texture"
          />
        </div>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div
        ref={mainRef}
        className="relative container mx-auto w-full h-full flex-col justify-center items-center py-4 md:px-16 md:py-14 "
      >
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover opacity-10 blur-[0.5px]"
            src={Bodytexture}
            alt="Texture"
          />
        </div>
        {/* 1- Event Overview */}
        <EventOverview />
        {/* 2- Sponsor Partners */}
        <SponsorPrtners />
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover opacity-10 blur-[0.5px]"
          src={Bodytexture}
          alt="Texture"
        />
      </div>
      {/* 3- Important Dates & High committee */}
      <ImportantDatesHighCommittee />
      <div className="relative container mx-auto w-full h-full flex flex-col py-4 md:px-16 ">
        {/* 4- Event Speakers &  */}
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover opacity-10 blur-[0.5px]"
            src={Bodytexture}
            alt="Texture"
          />
        </div>
        <LpSpeaker />
      </div>
      <SubmissionBanner />

      <div className="relative container mx-auto w-full h-full flex flex-col py-4 md:px-16 ">
        <div className="absolute inset-0 -z-10">
          <img
            className="w-full h-full object-cover opacity-10 blur-[0.5px]"
            src={Bodytexture}
            alt="Texture"
          />
        </div>
        <Lp_venue />
      </div>

      <FAQandFORMbanner />
    </>
  );
};

export default Home;
