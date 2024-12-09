import { Link } from "react-router";
import Social from "@/components/ui/Social";
import { Bodytexture, Logo1 } from "@/assets";
import { HomeIcon, ContactIcon, MapPin  } from 'lucide-react';
const menuItems = [
  { title: "Home", path: "/", icon:<HomeIcon/>  },
  { title: "Contact", path: "/Contact",icon:<ContactIcon/> },
  { title: "Venue", path: "/Venue", icon: <MapPin/> },
];
const Footer = () => {
  return (
    <footer className="p-3 m-auto relative bg-gradient-to-l from-[#0f5a08] via-[#709c1f] to-[#0f5a08] text-white ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Bodytexture}
          alt="Texture"
          className="w-full h-full object-cover opacity-25 blur-[0.5px]"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {/* Logo Section */}
        <div>
          <img
            src={Logo1}
            alt="UFAS-LOGO"
            className="w-16 h-16 md:w-[150px] md:h-[100px]"
          />
          <p className="text-sm mt-4">
            Description of the team or organizers bla bla bla etc...
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {menuItems.map((item, idx) => (
              <li key={idx} className="flex flex-row p-1 gap-2">
                {item.icon}
                <Link to={item.path} className="hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <Social />
        </div>
      </div>

      {/* Footer License */}
      <div className="relative text-center border-t-2 border-white mt-8 pt-4 text-sm z-10">
        © 2025 Ferhat Abbas University. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
