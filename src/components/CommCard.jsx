// Importing Components from node_modules
import React from 'react';

// Import Styling
import '../stylesheets/commissioner/CommCard.scss';

const CommCard = (commInfo) => (
  <div className="commissioners-card">
    <p className="comm-role">{commInfo.commRole}</p>
    <p className="comm-description">
      {commInfo.children}
    </p>
    <br />
    <b style={{ fontSize: '15px' }}>Active Commissioner(s):</b>
    <p className="comm-names">
      {/* <!--Insert Names of Commissioners --> */}
      {commInfo.names}
    </p>
  </div>
);

export default CommCard;
