import React from 'react';
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

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/executives" component={ExecutivePage} />
        <Route exact path="/commissioners" component={CommissionerPage} />
        <Route exact path="/join-the-team" component={JoinPage} />
        <Route exact path="/events" component={EventPage} />     
        <Route exact path="/our-sponsors" component={SponsorPage} /> 
        <Route exact path="/become-a-sponsor" component={BecomeSponsorPage} /> 
        <Route exact path="/meaning-of-zoo" component={ZooMeaningPage} />         
        <Route component={ErrorPage} />
      </Switch>
      <ToTop />
    </>
  );
}

export default App;
