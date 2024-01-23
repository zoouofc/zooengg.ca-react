// Importing Component from node_modules
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing the page components for routing
import HomePage from "../pages/HomePage";
import ExecPage from "../pages/ExecPage";
import CommissionerPage from "../pages/CommissionerPage";
import AdvocatePage from "../pages/AdvocatePage";
import JoinPage from "../pages/JoinPage";
import EventPage from "../pages/EventPage";
import CalendarPage from "../pages/CalendarPage";
import SponsorPage from "../pages/SponsorPage";
import BecomeSponsorPage from "../pages/BecomeSponsorPage";
// import ContactUsPage from '../pages/ContactUsPage';
import ZooMeaningPage from "../pages/ZooMeaningPage";
import CutcoPage from "../pages/CutcoPage";

import Footer from "./Footer";
import Navbar from "./Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to the Executive Officers
  {
    path: "/executives",
    element: (
      <>
        <Navbar />
        <ExecPage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to the Commissioners
  {
    path: "/commissioners",
    element: (
      <>
        <Navbar />
        <CommissionerPage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to the Advocates
  {
    path: "/advocates",
    element: (
      <>
        <Navbar />
        <AdvocatePage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to info on how to join the team
  {
    path: "/join-the-team",
    element: (
      <>
        <Navbar />
        <JoinPage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to info on Zoo Events
  {
    path: "/our-events",
    element: (
      <>
        <Navbar />
        <EventPage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to the Executive Officers
  {
    path: "/calendar",
    element: (
      <>
        <Navbar />
        <CalendarPage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to the ZOO Sponsors
  {
    path: "/zoo-sponsors",
    element: (
      <>
        <Navbar />
        <SponsorPage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to Info on How To Sponsor ZOO
  {
    path: "/become-a-sponsor",
    element: (
      <>
        <Navbar />
        <BecomeSponsorPage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },
  // Route to the Contact Us info
  // {
  //   path: "/contact-us",
  //   element: <ContactUsPage />,
  //   errorElement: <HomePage />,
  // },
  // Route to the Executive Officers
  {
    path: "/meaning-of-zoo",
    element: (
      <>
        <Navbar />
        <ZooMeaningPage />
        <Footer />
      </>
    ),
    errorElement: <HomePage />,
  },

  {
    // This page is an easter egg to the 2022 ZOO ENGG Week Movie: Codebusters
    path: "/cutco",
    element: <CutcoPage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
