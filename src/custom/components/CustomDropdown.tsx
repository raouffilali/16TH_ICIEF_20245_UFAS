import { useState, useEffect, useRef, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import "./component.css";
import React from "react";

interface CustomDropdownProps {
  title: string;
  children: ReactNode;
  onLinkClick?: () => void; // Add onLinkClick prop
}

const CustomDropdown = ({ title, children, onLinkClick }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 font-medium hover:text-uni-green2 transition-colors link-animation"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-lg py-2 w-56 border border-gray-200">
          <div className="flex flex-col">
            {React.Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement<any>, {
                onClick: handleLinkClick,
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;