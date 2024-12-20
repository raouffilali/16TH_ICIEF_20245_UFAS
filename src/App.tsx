import { ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import { Footer, Navbar } from "./custom";

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main ref={topRef} className="pt-16 ">
        {" "}
        {/* Adjust the padding as needed */}
        <Outlet />
      </main>
      <Footer />
      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 z-50 bg-[#709c1f] text-white rounded-full shadow-lg hover:bg-uni-yellow transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp />
        </button>
      )}
    </>
  );
}

export default App;