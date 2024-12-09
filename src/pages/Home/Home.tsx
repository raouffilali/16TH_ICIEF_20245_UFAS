import AnimatedBanForHome from "@/custom/components/AnimatedBanForHome";
import EventOverview from "./SubComponent/EventOverview";

const Home = () => {
  return (
    <>
      <AnimatedBanForHome buttonName={"Learn More"} />

      <div className="container mx-auto w-full h-screen flex flex-col p-12 bg-fuchsia-300 ">
      <EventOverview/>

      </div>

    </>
  );
};

export default Home;
