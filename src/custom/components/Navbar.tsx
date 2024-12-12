import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/constants/navLinks";
import "./component.css";
import CustomDropdown from "./CustomDropdown"; // Import the new CustomDropdown component
import { Eco } from "@/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // 500ms delay
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md rounded-b-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.subLinks ? (
                <CustomDropdown
                  title={link.title}
                  onLinkClick={handleLinkClick}
                >
                  {link.subLinks.map((subLink, subIndex) => (
                    <div key={subIndex} className="relative group">
                      <Link
                        to={subLink.ref}
                        className="block px-4 py-2 border-transparent border-l-2 hover:border-uni-green2-light transition-colors relative group hover:text-uni-green"
                        onClick={handleLinkClick}
                      >
                        {subLink.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-uni-green2-light transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      {subIndex < link.subLinks.length - 1 && (
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100 transition-opacity duration-300 group-hover:opacity-0"></div>
                      )}
                    </div>
                  ))}
                </CustomDropdown>
              ) : (
                <Link
                  to={link.ref}
                  className="font-medium hover:text-uni-green2 transition-colors relative group"
                  onClick={handleLinkClick}
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-uni-green2 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </div>
          ))}

          {/* Register Button */}
          <Button
            variant="ghost"
            className="font-semibold text-uni-green border-2 border-uni-green2-light hover:bg-uni-green2 hover:text-white px-6"
          >
            <Link to="/registration">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold bg-gradient-to-b from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
                  ICIEF 16TH EDITION
                </SheetTitle>
                <SheetDescription className="text-sm">
                  UFAS 16th International Conference on Islamic Economics and
                  Finance
                </SheetDescription>
                <Separator />
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.subLinks ? (
                      <details className="group">
                        <summary className="link-animation flex justify-between items-center cursor-pointer py-2 font-medium hover:text-uni-green2">
                          {link.title}
                          <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <Separator />
                        <div className="pl-4 mt-2 space-y-2">
                          {link.subLinks.map((subLink, subIndex) => (
                            <div key={subIndex} className="relative group">
                              <Link
                                to={subLink.ref}
                                className="block py-2 hover:text-uni-green2 relative group"
                                onClick={handleLinkClick}
                              >
                                {subLink.title}
                              </Link>
                              {subIndex < link.subLinks.length - 1 && (
                                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 transition-opacity duration-300 group-hover:opacity-0"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          to={link.ref}
                          className="block py-2 font-medium hover:text-uni-green2 relative group"
                          onClick={handleLinkClick}
                        >
                          {link.title}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-uni-green2 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
                <Button
                  variant="ghost"
                  className="text-uni-green border-2 border-uni-green2-light hover:bg-uni-green2 hover:text-white px-6 hover:shadow-lg"
                >
                  <SheetClose asChild onClick={handleLinkClick}>
                    <Link to="/registration">Register</Link>
                  </SheetClose>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
