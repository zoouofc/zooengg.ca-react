// Importing Components from node_modules
import React from "react";

// Importing Images
import mail from "../assets/icons/mail.png";

// Import Styling
import "../stylesheets/exec/ExecCard.scss";

const ExecCard = (execInfo) => {
  const mailTo = `mailto:${execInfo.email}`;

  return (
    <div className="executive-card">
      <img
        className="profile-pic"
        src={execInfo.imageSource}
        alt={execInfo.alt}
        style={{ width: "100%" }}
      />
      <h1>{execInfo.name}</h1>
      <p className="title">{execInfo.councilPosition}</p>
      <p className="bio">{execInfo.children}</p>
      <div style={{ margin: "20px 0 15px" }}>
        <a href={mailTo}>
          <img
            title={execInfo.email}
            className="mail-pic"
            alt="mail icon"
            src={mail}
            target="_blank"
          />
        </a>
      </div>
    </div>
  );
};

export default ExecCard;
