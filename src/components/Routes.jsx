// Importing Components from node_modules
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';

// Importing Project-defined Components
import Navbar from './Navbar';
import Footer from './Footer';

// Importing the page components for routing
import HomePage from '../pages/HomePage';
import ExecPage from '../pages/ExecPage';
import CommissionerPage from '../pages/CommissionerPage';
import AdvocatePage from '../pages/AdvocatePage';
import JoinPage from '../pages/JoinPage';
import EventPage from '../pages/EventPage';
import CalendarPage from '../pages/CalendarPage';
import SponsorPage from '../pages/SponsorPage';
import BecomeSponsorPage from '../pages/BecomeSponsorPage';
import ContactUsPage from '../pages/ContactUsPage';
import ZooMeaningPage from '../pages/ZooMeaningPage';
import Cutco from '../pages/Cutco';

// Importing Styles
// import '../stylesheets/Routes.scss';

/*
  Function used to update each page's <title> tag
  <title> tag is typically found in the public folder
  (index.html), and would otherwise be static
*/
const Page = (props) => {
  useEffect(() => {
    document.title = props.title || 'ZOO\'s Site';
  }, [props.title]);

  return props.children;
};

/*
  The following is used to setup the routing for the application through `react-router-dom`
  Also the current method ensures that the Navbar and Footer are automatically rendered onto every
  page. This can be changed by simply removing from a routes render property.
*/
const Routes = () => (
  <Switch>

    <Route
      exact
      path="/"
      render={() => (
        <>
          <Navbar />
          <Page title="ZOO Homepage">
            <HomePage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/* Route to the Executive Officers */}
    <Route
      exact
      path="/executives"
      render={() => (
        <>
          <Navbar />
          <Page title="ZOO Execs">
            <ExecPage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/* Route to the Commissioners */}
    <Route
      exact
      path="/commissioners"
      render={() => (
        <>
          <Navbar />
          <Page title="ZOO Commissioners">
            <CommissionerPage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/* Route to the Advocates */}
    <Route
      exact
      path="/advocates"
      render={() => (
        <>
          <Navbar />
          <Page title="Academic Advocates">
            <AdvocatePage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/* Route to info on how to join the team */}
    <Route
      exact
      path="/join-the-team"
      render={() => (
        <>
          <Navbar />
          <Page title="Join ZOO">
            <JoinPage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/* Route to info on Zoo Events */}
    <Route
      exact
      path="/our-events"
      render={() => (
        <>
          <Navbar />
          <Page title="ZOO Events">
            <EventPage />
          </Page>
          <Footer />
        </>
      )}
    />

    <Route
      exact
      path="/calendar"
      render={() => (
        <>
          <Navbar />
          <Page title="ZOO Calendar">
            <CalendarPage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/*
      Route to info on past Zoo Sponsors, it is currently what
      our membership QR code is linked to but folks ended up
      deciding after it was printed that they wanted the QR code
      to direct people to the events page instead.

      Can revert this once cards are no longer used
    */}
    <Route
      exact
      path="/our-sponsors"
      render={() => <Redirect to="/calendar" />}
    />

    {/* Route to info on Zoo Sponsors */}
    <Route
      exact
      path="/zoo-sponsors"
      render={() => (
        <>
          <Navbar />
          <Page title="ZOO Sponsors">
            <SponsorPage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/* Route to info on how to sponsor ZOO */}
    <Route
      exact
      path="/become-a-sponsor"
      render={() => (
        <>
          <Navbar />
          <Page title="Become a Sponsor">
            <BecomeSponsorPage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/* Route to info on how to meaning of ZOO */}
    <Route
      exact
      path="/contact-us"
      render={() => (
        <>
          <Navbar />
          <Page title="Contact Us">
            <ContactUsPage />
          </Page>
          <Footer />
        </>
      )}
    />

    {/* Route to info on how to meaning of ZOO */}
    <Route
      exact
      path="/meaning-of-zoo"
      render={() => (
        <>
          <Navbar />
          <Page title="Meaning of ZOO">
            <SimpleReactLightbox>
              <ZooMeaningPage />
            </SimpleReactLightbox>
          </Page>
          <Footer />
        </>
      )}
    />

    <Route
      exact
      path="/cutco"
      render={() => (
        <>
          <Cutco />
        </>
      )}
    />

    {/* Redirected to home when searching for a non-existent path */}
    <Redirect to="/" />
  </Switch>
);

export default Routes;
