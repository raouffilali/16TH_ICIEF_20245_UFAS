import { Footer, Navbar } from "./custom";
import { Outlet } from "react-router";
import AnimatedBanner from "./custom/components/AnimatedBanner";

function App() {
  return (
    <>
      <Navbar />
      <main >
        {" "}
        <Outlet />{" "}
      </main>
      <Footer />
    </>
  );
}

export default App;
