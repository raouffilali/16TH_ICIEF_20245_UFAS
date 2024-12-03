
import { Link } from "react-router"
import Logo from "./Logo"
import Social from "@/components/ui/Social";
import { Logo1 } from "@/assets";


const Footer = () => {
  return (
    <footer className="footer-container bg-gradient-to-r from-[#0f5a08] to-[#709c1f] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo in footer */}
        <div>
          <img
            src={Logo1}
            alt="UFAS-LOGO"
            className="w-16 h-16 md:w-[150px] md:h-[100px]"
          />
          <p className="text-sm">
            Description of the team or organisators bla bla bla etc ...
          </p>
        </div>

        {/* header vertical */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Programme", "Submission", "Contact Us"].map(
              (title, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${title.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-8 md:mb-0">
          <Social />
        </div>
      </div>

      {/* Footer Licence */}
      <div className="text-center border-t-2 border-white mt-8 pt-4 text-sm">
        © 2025 Ferhat Abbas University. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;