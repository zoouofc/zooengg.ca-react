import React, { useEffect } from 'react';
// The following is imported to handle the routing
import { Route, Switch } from 'react-router-dom';
// The use of the <Switch> tag is to ensure that only one component is rendedred at a time
// The use of the `exact` parameter disables partial matching for a route and makes sure that it only returns the route if the path is an EXACT match

// Importing the component-pages for routing
import HomePage from './pages/HomePage';
import ExecutivePage from './pages/ExecutivePage';
import CommissionerPage from './pages/CommissionerPage';
import JoinPage from './pages/JoinPage';
import EventPage from './pages/EventPage';
import SponsorPage from './pages/SponsorPage';
import BecomeSponsorPage from './pages/BecomeSponsorPage';
import ZooMeaningPage from './pages/ZooMeaningPage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import ToTop from './components/ToTop';

/*
  Function used to update each page's <title> tag
  <title> tag is typically found in the public folder (index.html), and would otherwise be static
*/
const Page = (props) => {
  useEffect(() => {
    document.title = props.title || '';
  }, [props.title]);
  return props.children;
};

const App = () => {
  return (
    <>
      {/* Automatically renders the Navbar (Navigation) onto every page */}
      <Navbar />

      <Switch>
        {/* Route to the homepage */}
        <Route
          exact
          path="/"
          render={() => (
            <Page title="ZOO Homepage">
              <HomePage />
            </Page>
          )}
        />

        {/* Route to the Executive Officers */}
        <Route
          exact
          path="/executives"
          render={() => (
            <Page title="ZOO Execs">
              <ExecutivePage />
            </Page>
          )}
        />

        {/* Route to the Commissioners */}
        <Route
          exact
          path="/commissioners"
          render={() => (
            <Page title="ZOO Commissioners">
              <CommissionerPage />
            </Page>
          )}
        />

        {/* Route to info on how to join the team */}
        <Route
          exact
          path="/join-the-team"
          render={() => (
            <Page title="Join ZOO">
              <JoinPage />
            </Page>
          )}
        />

        {/* Route to info on Zoo Events */}
        <Route
          exact
          path="/events"
          render={() => (
            <Page title="ZOO Events">
              <EventPage />
            </Page>
          )}
        />

        {/* Route to info on Zoo Sponsors */}
        <Route
          exact
          path="/our-sponsors"
          render={() => (
            <Page title="ZOO Sponsors">
              <SponsorPage />
            </Page>
          )}
        />

        {/* Route to info on how to sponsor ZOO */}
        <Route
          exact
          path="/become-a-sponsor"
          render={() => (
            <Page title="Become a Sponsor">
              <BecomeSponsorPage />
            </Page>
          )}
        />

        {/* Route to info on how to meaning of ZOO */}
        <Route
          exact
          path="/meaning-of-zoo"
          render={() => (
            <Page title="ZOO Meaning">
              <ZooMeaningPage />
            </Page>
          )}
        />

        {/* Route to info on how to sponsor ZOO */}
        <Route
          exact
          path="/error"
          render={() => (
            <Page title="404 Error">
              <ErrorPage />
            </Page>
          )}
        />

      </Switch>
      <ToTop />
    </>
  );
}

export default App;
