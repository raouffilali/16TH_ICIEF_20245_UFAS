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
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <Button asChild className="hidden md:flex md:w-48 font-bold text-black text-sm  p-4 bg-gradient-to-r from-amber-200 to-yellow-500">
          <Link to="/registration">Register</Link>
        </Button>
        {/* Mobile Toggle */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger className="md:hidden">
            <Menu size={24} className="text-uni-green" />
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader>
              <SheetTitle className="bg-gradient-to-r from-uni-yellow to-uni-green bg-clip-text text-lg text-transparent">
                ICIEF 16TH EDITION
              </SheetTitle>
              <Separator />
            </SheetHeader>
            <SheetDescription className="mt-6">
              <nav className="flex flex-col gap-y-4 items-center justify-center ">
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
                <Button className="text-black text-sm w-full p-4 bg-gradient-to-r from-amber-200 to-yellow-500 hover:scale-x-90 hover:text-white">
                  Register
                </Button>
              </nav>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
