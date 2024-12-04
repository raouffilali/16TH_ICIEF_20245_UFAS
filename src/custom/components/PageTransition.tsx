import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode; // Content to render inside the component
  targetPath: string; // Path to navigate to
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  targetPath,
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(targetPath);
    }, 500); // Match this duration with Tailwind's animation
  };

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <button
        onClick={handleNavigation}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Go to {targetPath}
      </button>
      {children}
    </div>
  );
};

export default PageTransition;
