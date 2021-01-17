// Importing Components from node_modules
import React from 'react';

// Import Styling
import '../stylesheets/HomePage.scss';

const HomePage = () => (
  <div className="page--body home">

    <h2 className="page--title home">About ZOO</h2>
    <div className="page--description home">
      <p className="home-text">
        The University of Calgary&#39;s Electrical, Computer, and Software Engineering
        Students&#39; Society, affectionally referred to as ZOO, is an initiative run by students,
        for students. ZOO aims to support their undergraduate students, both academically and
        socially, by providing them with a variety of events to enrich their University experience.
        Through the Society, we hope assist students in clearing the gap between university and
        industry.
      </p>
      <p className="home-text">
        In addition to those responsibilities, ZOO serves as a liason between the Department (ECE)
        and the many Electrical, Software and Computer Engineering students. We work hard to
        represent your opinions and ensure that your voices are heard.
      </p>
      <p className="home-text">
        Any inquiries for ZOO can be voiced in-person in ENA 106, or via email to
        {' '}
        <a href="mailto: execs@zooengg.ca">execs@zooengg.ca</a>
        . We will attempt to answer questions to the best of our ability and if necessary, direct
        you to the relevant Department employee.
      </p>
      <hr />
      <p id="page--constitution" className="home">
        ZOO abides by the Club Constitution
      </p>
    </div>
  </div>
);

export default HomePage;
