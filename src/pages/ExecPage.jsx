// Importing Components from node_modules
import React from 'react';

// Import project-defined components
import '../components/ExecCard';

// Import Styling
import '../stylesheets/exec/ExecPage.scss';

const ExecPage = () => (
  <div className="page--body exec">
    <h2 className="page--title exec">ZOO Executive Council: 2020 - 2021</h2>
    <p className="page--description exec">
      Meet the leaders of today working to make things happen for all the Electrical, Software, and
      Computer Engineering students!
    </p>

    <div id="profile-grid" />
  </div>
);

export default ExecPage;
