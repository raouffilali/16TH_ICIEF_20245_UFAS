import { ICIEF_ar, ICIEF_en, pdf_svg, submissionBannerImage } from "@/assets";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

const SubmissionBanner = () => {
  return (
    <div className="relative text-white text-center py-20 px-6 w-full overflow-hidden mb-8 md:mb-20">
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
          Haven't You Submitted Your Paper Yet?
        </h1>
        <h2 className="text-2xl font-bold text-uni-yellow mt-3">
          Register Now{" "}
        </h2>
        <p className="text-sm mt-4 max-w-md mx-auto">
          All the information about the conference and the submission process and
          dates are available on the{" "}
          <Link className="underline font-semibold" to="/registration">
            Submission section above.
          </Link>{" "}
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to={"/registration"}
            className="bg-white text-gray-800 px-6 md:px-12 py-3 rounded-full font-semibold hover:bg-green-100 transition"
          >
            Register
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
                Call for papers
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-4/5 md:w-full max-w-lg md:max-w-4xl md:h-auto rounded-md">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-3xl text-center md:font-bold bg-gradient-to-l from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
                  Call for papers
                </AlertDialogTitle>
                <Separator />
                <AlertDialogDescription>
                  <p className="text-start">
                    In this section, you can download the call for paper
                    documents in both English and Arabic languages.
                  </p>
                  <br />
                  <p>
                    * if you have encountered any problems contact us via:{" "}
                    <span className="font-bold italic">
                      <a href="mailto:icief16@univ-setif.dz?subject=Call%20for%20papers%20files%20not%20working">
                        icief16@univ-setif.dz
                      </a>
                    </span>
                  </p>
                  <ul className="mt-4 flex flex-col md:flex-row gap-x-3 justify-evenly items-center border-2 border-dashed border-uni-green2 py-4">
                    <li className="flex flex-col items-center">
                      <img
                        src={pdf_svg}
                        alt="PDF Icon"
                        className="w-6 md:w-16 mb-2"
                      />
                      <a
                        href={ICIEF_en}
                        target="_blank"
                        className="underline text-gray-800"
                      >
                        Call for Papers (English)
                      </a>
                    </li>
                    <li className="flex flex-col items-center mt-2 md:mt-0">
                      <img
                        src={pdf_svg}
                        alt="PDF Icon"
                        className="w-6 md:w-16 mb-2"
                      />
                      <a
                        href={ICIEF_ar}
                        target="_blank"
                        className="underline text-gray-800"
                      >
                        Call for Papers (Arabic)
                      </a>
                    </li>
                  </ul>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default SubmissionBanner;
