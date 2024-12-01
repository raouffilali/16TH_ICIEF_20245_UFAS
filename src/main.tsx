import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";
import {
  AboutUs,
  Agenda,
  CallForPapers,
  Contact,
  FeesPayment,
  Home,
  Papers,
  PosterPresentation,
  Registration,
  Speakers,
  SubmissionGuidelines,
  Venue,
} from "./pages/";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Home />,
        path: "/", // This is the root path
      },
      {
        path: "/speakers",
        element: <Speakers />,
      },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/poster-presentation",
        element: <PosterPresentation />,
      },
      {
        path: "/papers",
        element: <Papers />,
      },
      {
        path: "/call-for-papers",
        element: <CallForPapers />,
      },
      {
        path: "/submission-guidelines",
        element: <SubmissionGuidelines />,
      },
      {
        path: "/fees-payment",
        element: <FeesPayment />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/venue",
        element: <Venue />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
