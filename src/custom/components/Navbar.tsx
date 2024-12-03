// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router";
// import { Logo } from "../index";
// import { navLinks } from "@/constants/navLinks";
// import "./component.css";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Separator } from "@/components/ui/separator";

// const Navbar = () => {
//   const [isSheetOpen, setIsSheetOpen] = useState(true);
//   const location = useLocation();

//   const closeSheet = () => {
//     setIsSheetOpen(false);
//   };

//   useEffect(() => {
//     closeSheet();
//   }, [location]);

//   return (
//     <header className="navbar-container">
//       <div className="container px-4 md:mx-auto flex items-center justify-between">
//         <Logo />
//         <nav className="hidden md:flex items-center gap-x-4">
//           {navLinks.map((link, index) => (
//             <Link
//               key={index}
//               to={link.ref}
//               className="font-medium text-uni-green hover:text-uni-yellow link-animation"
//             >
//               {link.title}
//             </Link>
//           ))}
//         </nav>
//         {/* Mobile Toggle */}
//         <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} >
//           <SheetTrigger className="md:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-uni-green"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </SheetTrigger>
//           <SheetContent>
//             <SheetHeader>
//               <SheetTitle className="bg-gradient-to-r from-uni-yellow to-uni-green bg-clip-text text-xl text-transparent">
//                 ICIEF 16TH EDITION
//               </SheetTitle>
//               <Separator />
//             </SheetHeader>
//             <SheetDescription className="mt-6">
//               <nav className="flex flex-col gap-y-4 ">
//                 {navLinks.map((link, index) => (
//                   <Link
//                     key={index}
//                     to={link.ref}
//                     className="text-lg font-medium text-uni-green hover:text-uni-yellow link-animation border border-dashed border-transparent px-2 py-2"
//                     onClick={closeSheet}
//                   >
//                     {link.title}
//                   </Link>
//                 ))}
//               </nav>
//             </SheetDescription>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

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
import "./component.css"
import { Link, Links } from "react-router";
import { Separator } from "@/components/ui/separator";

// Navigation Bar Component
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md rounded-sm  ">
      <div className="container mx-auto flex justify-between items-center px-4 py-1">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="Conference Logo"  /> */}
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>

          {/* Conference Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-green-600 transition-colors">
              Conference <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/high-committee">High Committee</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/organizers">Organizers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/objectives">Objectives</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/themes">Themes</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-green-600 transition-colors">
              About <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/background">Background of ICIEF</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/participants">Target Participants</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Submission Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-green-600 transition-colors">
              Submission <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/guidelines">Author Guidelines</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dates">Important Dates</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/registration">Registration</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/contact"
            className="hover:text-green-600 transition-colors"
          >
            Contact
          </Link>
          <Link to="/venue" className="hover:text-green-600 transition-colors">
            Venue
          </Link>

          {/* Register Button */}
          <Button className="bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:from-green-600 hover:to-yellow-600 transition-all">
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
              <SheetHeader>
                <SheetTitle>ICIEF 16TH EDITION</SheetTitle>
                <Separator />
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <SheetClose asChild>
                  <Link to="/" className="block py-2 hover:bg-gray-100">
                    Home
                  </Link>
                </SheetClose>

                {/* Mobile Dropdown Sections */}
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-100 hover:border">
                    Conference
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/high-committee" className="block">
                      High Committee
                    </Link>
                    <Link to="/organizers" className="block">
                      Organizers
                    </Link>
                    <Link to="/objectives" className="block">
                      Objectives
                    </Link>
                    <Link to="/themes" className="block">
                      Themes
                    </Link>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-100">
                    About
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/high-committee" className="block">
                      Background of ICIEF
                    </Link>
                    <Link to="/organizers" className="block">
                      Target Participants
                    </Link>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-2 hover:bg-gray-100">
                    Submission
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/guidelines" className="block">
                      Author Guidelines
                    </Link>
                    <Link to="/dates" className="block">
                      Important Dates
                    </Link>
                    <Link to="/registration" className="block">
                      Registration
                    </Link>
                  </div>
                </details>
                {/* Similar structure for About and Submission dropdowns */}

                <SheetClose asChild>
                  <Link to="/contact" className="block py-2 hover:bg-gray-100">
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/venue" className="block py-2 hover:bg-gray-100">
                    Venue
                  </Link>
                </SheetClose>

                <Button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:from-green-600 hover:to-yellow-600">
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


