import { submissionBannerImage } from "@/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { formFields, faqItems } from "../../../constants/formData";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import { toast } from "sonner";

const SITE_KEY = import.meta.env.VITE_REACT_APP_SITE_KEY;
const ATTENDDEE_FORM_KEY = import.meta.env.VITE_ATTENDEE_FORM_SITE_KEY;

const FAQandFORMbanner = () => {
  const [formData, setFormData] = useState(() =>
    Object.fromEntries(formFields.map((field) => [field.name, ""]))
  );
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Check if all fields are filled
    const allFieldsFilled = formFields.every(
      (field) => updatedFormData[field.name].trim() !== ""
    );
    setIsAllFieldsFilled(allFieldsFilled);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCaptchaChange = (token: string | null) => {
    setIsVerified(!!token);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    for (const field of formFields) {
      if (!formData[field.name]) {
        toast.error(`Please fill out the ${field.label} field.`);
        setIsSubmitting(false);
        return;
      }
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (!isVerified) {
      toast.error("Please complete the reCAPTCHA.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${ATTENDDEE_FORM_KEY}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormData(() =>
          Object.fromEntries(formFields.map((field) => [field.name, ""]))
        );
        recaptchaRef.current?.reset();
        setIsVerified(false);
        setIsAllFieldsFilled(false);
        toast.success("Your form has been submitted successfully!");
      } else {
        toast.error("Failed to submit the form. Please try again later.");
      }
    } catch {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center gap-6 bg-gray-500 p-8 md:px-36 mb-8 md:mb-16 shadow-lg mt-24 md:mt-40 animate-fadeInLeft">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${submissionBannerImage})`,
          transform: "scale(-1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.5",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-l from-uni-green to-uni-green2 opacity-85"></div>
      <div className="relative flex flex-col gap-3 bg-transparent text-gray-800 md:w-1/2 shadow-[0_0_20px_0px_rgba(15,90,8,0.25)] h-full rounded-lg justify-center items-center md:items-start">
        <div>
          <h1 className="text-2xl font-semibold text-center md:text-start md:text-4xl md:font-bold text-white">
            FREQUENTLY ASKED
            <span className="text-yellow-600">
              <br /> QUESTIONS!!
            </span>
          </h1>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full h-full bg-white text-uni-green2 p-4 md:p-8 rounded-lg"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-800 text-base md:text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Form part */}
      <div className="flex flex-col h-full w-full md:w-1/2 rounded-lg bg-white p-4 shadow-[0_0_20px_0px_rgba(15,90,8,0.5)] z-10">
        <div>
          <h2 className="text-center text-2xl font-semibold md:text-4xl md:font-bold mb-4">
            BOOK AN ATTENDEE <span className="text-uni-green2">SEAT</span>
          </h2>
        </div>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-2">
            {formFields.slice(0, 2).map((field) => (
              <div key={field.id} className="flex flex-col w-full md:w-1/2">
                <label
                  className="mb-2 text-lg font-medium text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {formFields.slice(2, 3).map((field) => (
              <div key={field.id} className="flex flex-col w-full">
                <label
                  className="mb-2 text-lg font-medium text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            {formFields.slice(3, 5).map((field) => (
              <div key={field.id} className="flex flex-col w-full md:w-1/2">
                <label
                  className="mb-2 text-lg font-medium text-gray-700"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          {formFields.slice(5).map((field) => (
            <div key={field.id} className="flex flex-col">
              <label
                className="mb-2 text-lg font-medium text-gray-700"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-uni-green2"
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            </div>
          ))}
          {isAllFieldsFilled && (
            <div className="mb-4 flex justify-center items-center md:w-full mt-4">
              <div className="transform scale-[0.77] md:scale-100 -ml-[0.1rem] md:ml-0">
                <ReCAPTCHA
                  sitekey={SITE_KEY}
                  onChange={handleCaptchaChange}
                  ref={recaptchaRef}
                />
              </div>
            </div>
          )}
          <button
            type="submit"
            className={`
              flex flex-row justify-center items-center gap-2 p-3 rounded-lg transition-colors
              ${
                isVerified
                  ? "bg-uni-green hover:bg-uni-green2 text-white"
                  : "bg-gray-500 text-white opacity-40 cursor-not-allowed"
              }
            `}
            disabled={!isVerified || isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <LoaderCircle className="animate-spin mr-2" />
                Sending...
              </div>
            ) : (
              <>
                Submit <ArrowRight />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQandFORMbanner;