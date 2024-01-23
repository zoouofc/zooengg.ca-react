// Importing Components from node_modules
import React from "react";

// Import Styling
import "../stylesheets/commissioner/CommCard.scss";

const CommCard = (commInfo) => {
  return (
    <div className="commissioners-card">
      <p className="comm-role">{commInfo.commRole}</p>
      <p className="comm-description">{commInfo.children}</p>
      <br />
      <b style={{ fontSize: "15px" }}>Active Commissioner(s):</b>
      {/* <!--Insert Names of Commissioners --> */}
      <p className="comm-names">
        {commInfo.names.map((x) => {
          return (
            <>
              {x}
              <br />
            </>
          );
        })}
      </p>
    </div>
  );
};

export default CommCard;
