import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
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

// Navigation Bar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md rounded-b-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.subLinks ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center font-semibold hover:text-uni-green2 transition-colors link-animation">
                    {link.title}{" "}
                    <ChevronDown className="ml-1 h-4 w-4 link-animation" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="absolute mt-1 bg-white shadow-lg rounded-lg py-2 w-56 "
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <DropdownMenuItem
                        asChild
                        key={subIndex}
                        className="w-full px-4 py-4"
                      >
                        <Link
                          to={subLink.ref}
                          className=" transition-colors link-animation  hover:text-uni-green2 font-medium"
                        >
                          {subLink.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to={link.ref}
                  className="hover:text-uni-green2 transition-colors link-animation font-semibold"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}

          {/* Register Button */}
          <Button
            variant={"ghost"}
            className="font-semibold text-uni-green border-2 border-uni-green2-light hover:bg-uni-green2 hover:text-white px-12"
          >
            Register
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
              <SheetHeader className="">
                <SheetTitle className=" text-xl font-bold bg-gradient-to-b from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent">
                  ICIEF 16TH EDITION
                </SheetTitle>
                <Separator />
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.subLinks ? (
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer py-2 hover:text-uni-green2 link-animation font-medium ">
                          {link.title}
                          <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <Separator />
                        <div className="pl-4 mt-2 space-y-4">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subLink.ref}
                              className="block hover:text-uni-green2 transition-colors link-animation"
                            >
                              - {subLink.title}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          to={link.ref}
                          className="block py-2 hover:text-uni-green2 link-animation font-medium"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
                <Button
                  variant={"ghost"}
                  className="text-uni-green border-2 border-uni-green2-light hover:bg-uni-green2 hover:text-white px-6"
                >
                  Register
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