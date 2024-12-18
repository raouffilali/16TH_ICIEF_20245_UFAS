import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";
import {
  AuthorGuideline,
  BackgroundEvent,
  Contact,
  Highcommittee,
  Home,
  ImportantDates,
  Objectives,
  Organizer,
  Registration,
  Speakers,
  TargetParticipants,
  Themes,
  Venue,
} from "./pages/index.ts";
import { Sponsors } from "./pages/Sponsors/Sponsors.tsx";
import SubmissionGuideline from "./pages/Submission-Guidelines/SubmissionGuideline.tsx";
import PublicationOpportunities from "./pages/Publication Opportunities/PublicationOpportunities.tsx";
import SteeringCommitte from "./pages/Committees/SteeringCommitte.tsx";
import { ScientificCommitte } from "./pages/Committees/ScientificCommitte.tsx";
import OrganizingCommitte from "./pages/Committees/OrganizingCommitte.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Home />,
        path: "/", // This is the root path
      },
      {
        path: "/high-committee",
        element: <Highcommittee />,
      },
      {
        path: "/steering-committee",
        element: <SteeringCommitte />,
      },
      {
        path: "/scientific-committee",
        element: <ScientificCommitte />,
      },
      {
        path: "/organizing-committee",
        element: <OrganizingCommitte />,
      },
      {
        path: "/organizers",
        element: <Organizer />,
      },
      {
        path: "/objectives",
        element: <Objectives />,
      },
      {
        path: "/themes",
        element: <Themes />,
      },
      {
        path: "/background",
        element: <BackgroundEvent />,
      },
      {
        path: "/participants",
        element: <TargetParticipants />,
      },

      {
        path: "/guidelines",
        element: <AuthorGuideline />,
      },
      {
        path: "/dates",
        element: <ImportantDates />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/venue",
        element: <Venue />,
      },
      {
        path: "/speakers",
        element: <Speakers />,
      },
      {
        path: "/sponsors",
        element: <Sponsors />,
      },
      {
        path: "/submission-guidelines",
        element: <SubmissionGuideline />,
      },
      {
        path: "/opportunities",
        element: <PublicationOpportunities />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster richColors />
    <RouterProvider router={router} />
  </>
);
