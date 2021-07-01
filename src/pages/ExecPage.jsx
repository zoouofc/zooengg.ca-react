// Importing Components from node_modules
import React from 'react';

// Import project-defined components
import ExecCard from '../components/ExecCard';

// Import Styling
import '../stylesheets/exec/ExecPage.scss';

// Importing Images
import president from '../assets/council-pages/president.png';
import academic from '../assets/council-pages/academic.png';
import events from '../assets/council-pages/events.png';
import external from '../assets/council-pages/external.png';
import finance from '../assets/council-pages/finance.png';
import internal from '../assets/council-pages/internal.png';

const ExecPage = () => (
  <div className="page--body exec">
    {/* Change for new school year */}
    <h2 className="page--title exec">ZOO Executive Council: 2021 - 2022</h2>
    <p className="page--description exec">
      Meet the leaders of today working to make things happen for all the Electrical,
      Software, and Computer Engineering students!
    </p>

    <div id="profile-grid">
      <ExecCard
        imageSource={president}
        alt="president-headshot"
        name="Evan Krul" // Change name for new Exec
        councilPosition="President"
        email="president@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}

      </ExecCard>

      <ExecCard
        imageSource={academic}
        alt="academic-headshot"
        name="Vacant" // Change name for new Exec
        councilPosition="VP Academic"
        email="academic@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Emily Knight" // Change name for new Exec
        councilPosition="VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hi! My name is Emily Knight and I am the current VP Events of ZOO. I am responsible
        for planning, managing and hosting events to help build a community for students.
        I am also in my third year of electrical engineering and love being outdoors!
      </ExecCard>

      <ExecCard
        imageSource={external}
        alt="external-headshot"
        name="Risat Haque" // Change name for new Exec
        councilPosition="VP External"
        email="external@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={finance}
        alt="finance-headshot"
        name="Carter Zimmer" // Change name for new Exec
        councilPosition="VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={internal}
        alt="internal-headshot"
        name="Aleks Berezowski" // Change name for new Exec
        councilPosition="VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

    </div>
  </div>
);

export default ExecPage;
