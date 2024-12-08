import { Footer, Navbar } from "./custom";
import { Outlet } from "react-router";
import AnimatedBanner from "./custom/components/AnimatedBanner";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-20"> {/* Adjust the padding as needed */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;