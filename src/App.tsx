import { Footer, Navbar } from "./custom";
import { Outlet } from "react-router";
import AnimatedBanner from "./custom/components/AnimatedBanner";

function App() {
  return (
    <>
      <Navbar />
      
      <main className="mt-20">
        {" "}
        <Outlet />{" "}
      </main>
      <Footer />
    </>
  );
}

export default App;
