// Importing Components from node_modules
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';

// Importing Project-defined Components
import Navbar from './Navbar';

// Importing the page components for routing
import HomePage from '../pages/HomePage';
import ExecPage from '../pages/ExecPage';
import CommissionerPage from '../pages/CommissionerPage';
import JoinPage from '../pages/JoinPage';
import EventPage from '../pages/EventPage';
import SponsorPage from '../pages/SponsorPage';
import BecomeSponsorPage from '../pages/BecomeSponsorPage';
import ZooMeaningPage from '../pages/ZooMeaningPage';
import ErrorPage from '../pages/ErrorPage';

// Importing Styles
import '../stylesheets/Routes.scss';

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
        </>
      )}
    />

    {/* Route to info on Zoo Events */}
    <Route
      exact
      path="/events"
      render={() => (
        <>
          <Navbar />
          <Page title="ZOO Events">
            <EventPage />
          </Page>
        </>
      )}
    />

    {/* Route to info on Zoo Sponsors */}
    <Route
      exact
      path="/our-sponsors"
      render={() => (
        <>
          <Navbar />
          <Page title="ZOO Sponsors">
            <SponsorPage />
          </Page>
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
        </>
      )}
    />

    {/* Route to info on how to sponsor ZOO */}
    <Route
      exact
      path="/error"
      render={() => (
        <>
          <Navbar />
          <Page title="404 Error">
            <ErrorPage />
          </Page>
        </>
      )}
    />

  </Switch>
);

export default Routes;
