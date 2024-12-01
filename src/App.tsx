import { Button } from "@/components/ui/button";
import "./App.css";
import { Footer, Navbar } from "./custom";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {" "}
        <Outlet />{" "}
      </main>
      <Footer />
    </>
  );
}

export default App;
