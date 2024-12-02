import { Footer, Navbar } from "./custom";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-[63px] md:mt-[100px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;