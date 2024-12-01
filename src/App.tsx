import { Footer, Navbar } from "./custom";
import { Outlet } from "react-router";

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
