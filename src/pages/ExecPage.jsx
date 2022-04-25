// Importing Components from node_modules
import React from 'react';

// Import project-defined components
import ExecCard from '../components/ExecCard';

// Import Styling
import '../stylesheets/exec/ExecPage.scss';

// Importing Images
import president from '../assets/council-pages/president.png';
import academic_software from '../assets/council-pages/academic-software.png';
import academic_electrical from '../assets/council-pages/academic-electrical.png';
import events from '../assets/council-pages/events.png';
import external from '../assets/council-pages/external.png';
import finance from '../assets/council-pages/finance.png';
import internal from '../assets/council-pages/internal.png';

const ExecPage = () => (
  <div className="page--body exec">
    {/* Change for new school year */}
    <h2 className="page--title exec">ZOO Executive Council: 2022 - 2023</h2>
    <p className="page--description exec">
      Meet the leaders of today working to make things happen for all the Electrical,
      Software, and Computer Engineering students!
    </p>

    <div id="profile-grid">
      <ExecCard
        imageSource={president}
        alt="president-headshot"
        name="Aleks Berezowski" // Change name for new Exec
        councilPosition="President"
        email="president@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={academic_software}
        alt="academic-headshot"
        name="Rumaisa Shoeb Talukder" // Change name for new Exec
        councilPosition="VP Academic Software"
        email="academic.software@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={academic_electrical}
        alt="academic-headshot"
        name="Ben Pele" // Change name for new Exec
        councilPosition="VP Academic Electrical"
        email="academic.electrical@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Vacant" // Change name for new Exec
        councilPosition="VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={external}
        alt="external-headshot"
        name="Yashpreet Singh" // Change name for new Exec
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
        name="Vacant" // Change name for new Exec
        councilPosition="VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

    </div>
  </div>
);

export default ExecPage;
