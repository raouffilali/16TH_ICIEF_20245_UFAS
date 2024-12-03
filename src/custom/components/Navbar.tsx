import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "../index";
import { navLinks } from "@/constants/navLinks";
import "./component.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const location = useLocation();

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  useEffect(() => {
    closeSheet();
  }, [location]);

  return (
    <header className="navbar-container">
      <div className="container px-4 md:mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-x-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.ref}
              className="font-medium text-uni-green hover:text-uni-yellow link-animation"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        {/* Mobile Toggle */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} >
          <SheetTrigger className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-uni-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="bg-gradient-to-r from-uni-yellow via-amber-400 to-uni-yellow bg-clip-text text-xl text-transparent">
                ICIEF 16TH EDITION
              </SheetTitle>
              <Separator />
            </SheetHeader>
            <SheetDescription className="mt-6">
              <nav className="flex flex-col gap-y-4 ">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.ref}
                    className="text-lg font-medium text-uni-green hover:text-uni-yellow link-animation border border-dashed border-transparent px-2 py-2"
                    onClick={closeSheet}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;