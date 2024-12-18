import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";
import AnimatedBanner from "@/custom/components/AnimatedBanner";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

const SITE_KEY = import.meta.env.VITE_REACT_APP_SITE_KEY;
const CONTECT_FORM_KEY = import.meta.env.VITE_CONTACT_FORM_SITE_KEY;

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  const [isMessageFilled, setIsMessageFilled] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.length < 2
          ? `${
              name.charAt(0).toUpperCase() + name.slice(1)
            } must be at least 2 characters`
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "message":
        return value.length < 10
          ? "Message must be at least 10 characters"
          : "";
      default:
        return "";
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    if (name === "message") {
      setIsMessageFilled(value.trim().length > 0);
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setIsVerified(!!token);
  };

  const isFormValid = () => {
    return (
      !Object.values(errors).some((error) => error) &&
      Object.values(formData).every((value) => value.trim()) &&
      isVerified
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      message: true,
    });

    if (!isFormValid()) {
      toast.error("Please fix all errors before submitting");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${CONTECT_FORM_KEY}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        formRef.current?.reset();
        recaptchaRef.current?.reset();
        setIsVerified(false);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setIsMessageFilled(false);
        setTouched({
          firstName: false,
          lastName: false,
          email: false,
          message: false,
        });
        toast.success("Your message has been sent successfully!");
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message", {
        description:
          "Contact the conference secretariat via: icief16@univ-setif.dz",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (error: string, touched: boolean) => `
    p-3 mb-1 border rounded-lg transition-colors
    ${
      touched && error
        ? "border-red-500 focus:ring-red-500"
        : touched && !error
        ? "border-green-500 focus:ring-green-500"
        : "border-gray-300 focus:ring-[#0f5a08]"
    }
    focus:outline-none focus:ring-1
  `;

  return (
    <>
      <AnimatedBanner buttonName={"Contact Us"} buttonRef={contactRef} />

      <div
        ref={contactRef}
        className="flex justify-center -mt-6 md:-mt-14 w-full bg-white text-black h-auto p-4 animate-fadeInLeft"
      >
        <div className="relative flex flex-col rounded-lg shadow-xl bg-white p-4 md:justify-between w-full max-w-[900px] gap-6 ring-1 ring-uni-green2-light">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-uni-green to-uni-green2-light bg-clip-text text-transparent">
              For any inquiries, please contact the conference secretariat via:
            </h2>
          </div>

          <div className="flex flex-col-reverse md:flex-row rounded-lg bg-white p-4 md:justify-between w-full gap-6">
            <div className="flex flex-col w-full md:w-1/4 h-auto mx-1 bg-gradient-to-bl gap-5 from-uni-green via-uni-green2 to-uni-green text-white p-5 justify-center items-start rounded-lg shadow-lg">
              <h1 className="text-xl font-extrabold">Email</h1>
              <p>icief16@univ-setif.dz</p>
              <p>icief16setif@gmail.com</p>
              <h1 className="text-xl font-extrabold">For More:</h1>
              <p>036 42 01 50</p>
              <h1 className="text-xl font-extrabold">ADDRESS:</h1>
              <p>
                Setif 1 University Ferhat Abbas, El Baz Campus, Setif, 19137,
                Algeria
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col w-full md:w-3/4 mx-1 rounded-lg px-4 bg-white"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="mb-2 text-lg font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    className={inputClassName(
                      errors.firstName,
                      touched.firstName
                    )}
                    type="text"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("firstName")}
                    required
                  />
                  {touched.firstName && errors.firstName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <label className="mb-2 text-lg font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    className={inputClassName(
                      errors.lastName,
                      touched.lastName
                    )}
                    type="text"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("lastName")}
                    required
                  />
                  {touched.lastName && errors.lastName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label className="mb-2 text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  className={inputClassName(errors.email, touched.email)}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("email")}
                  required
                />
                {touched.email && errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col mt-4">
                <label className="mb-2 text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className={inputClassName(errors.message, touched.message)}
                  name="message"
                  rows={5}
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur("message")}
                  required
                />
                {touched.message && errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </span>
                )}
              </div>

              {isMessageFilled && (
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
                  p-3 rounded-lg transition-all mt-4
                  ${
                    isFormValid()
                      ? "bg-uni-green hover:bg-uni-green2 text-white"
                      : " cursor-not-allowed  bg-gray-500 text-white disabled:opacity-40"
                  }
                `}
                disabled={!isFormValid() || isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <LoaderCircle className=" animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
