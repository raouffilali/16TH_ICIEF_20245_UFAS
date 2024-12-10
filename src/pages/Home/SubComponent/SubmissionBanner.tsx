import { submissionBannerImage } from "@/assets";

const SubmissionBanner = () => {
  return (
    <div className="relative text-white text-center py-20 px-6 w-full overflow-hidden mb-12">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${submissionBannerImage})`,
          transform: "scale(-1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-l from-uni-green to-uni-green2 opacity-85"></div>
      <div className="relative z-10">
        <p className="text-lg uppercase tracking-wide font-medium">
          Let's do it hurry
        </p>
        <h1 className="text-4xl font-extrabold mt-2">
          Haven't Submitted Your Paper Yet?
        </h1>
        <h2 className="text-2xl font-bold text-uni-yellow mt-3">
          Register Now{" "}
        </h2>
        <p className="text-sm mt-4 max-w-md mx-auto">
          All informations about the conference and the submission process and
          dates are available on the Submission section above.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-gray-800 px-6 md:px-12 py-3 rounded-full font-semibold hover:bg-green-100 transition">
            Register
          </button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
            Call for paper
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionBanner;