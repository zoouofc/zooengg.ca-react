// Importing Components from node_modules
import React from "react";
import { Link } from "react-router-dom";

// Import Styling
import "../stylesheets/sponsor/SponsorPage.scss";

// Importing Images
// import placeholder from '../assets/sponsor-pages/sponsor-placeholder.png';
import thanks from "../assets/sponsor-pages/thankYou.svg";
// import vog from '../assets/sponsor-pages/vog.png';

const SponsorPage = () => (
  <div className="page--body sponsors">
    <div className="sponsor-thanks">
      <img src={thanks} alt="" style={{ width: "270px" }} />

      {/* Used to avoid the two <hr> tags from overlapping with the image and text  */}
      <div className="background-protection" />

      <h1>2023 - 2024</h1>
      <hr className="hr-left" />
      <hr className="hr-right" />
    </div>

    <div className="page--description sponsors">
      <p>
        The Electrical and Software Engineering Students&#39; Society would like
        to thank our Sponsors and Partners for their donations during the
        {/* Update the year */} 2023-2024 academic year. Their support enables
        us to reach our mission of enriching the student-body experience to
        ensure that they are fully prepared for their post-secondary careers. As
        such, this Society greatly appreciates all of their generosity, along
        with their intent to secure the success of the leaders of tomorrow.
      </p>

      <p style={{ margin: "0 0 -5px", textAlign: "left" }}>
        <b>
          If you&#39;re interested in our work, click the button below to learn
          more about our sponsor opportunities and to start a conversation.
        </b>
      </p>
      <div className="btn--dark">
        <Link to="/become-a-sponsor" className="button">
          Become a Sponsor!
        </Link>
      </div>
    </div>

    <hr
      style={{
        margin: "85px auto 0",
        width: "75%",
      }}
    />

    <div className="sponsor-list">
      <h2 className="page--title">Our Year-Long Partners & Sponsors</h2>

      {/* Comment out the following line when not in use */}
      {/* <h5
        style={{ margin: '10px' }}
      >
        We are currently looking for sponsors and partners for the school year!
      </h5> */}

      {/* Placeholder for the different Sponsor Logo levels */}
      {/* <h3 className="sponsor-divider platinum-divider">Platinum Sponsors</h3>
      <img
        src={placeholder}
        className="platinum"
        alt="placeholder"
      />

      <h3 className="sponsor-divider gold-divider">Gold Sponsors</h3>
      <img
        src={placeholder}
        className="gold"
        alt="placeholder"
      /> */}

      {/* <h3 className="sponsor-divider silver-divider">Silver Sponsor</h3> */}
      {/* <img
        src={placeholder}
        className="silver"
        alt="placeholder"
      /> */}
    </div>

    <hr
      style={{
        margin: "35px auto 0",
        width: "75%",
      }}
    />

    <div className="sponsor-list">
      <h2 className="page--title">Our 2023 Tech Fair Sponsors</h2>
      {/* Placeholder for the different Sponsor Logo levels */}
      {/* <h3 className="sponsor-divider gold-divider">Enterprise Sponsors</h3>
      <img
        src={placeholder}
        className="platinum"
        alt="placeholder"
      />

      <h3 className="sponsor-divider gold-divider">Corporate Sponsors</h3>
      <img
        src={placeholder}
        className="platinum"
        alt="placeholder"
      />

      <h3 className="sponsor-divider gold-divider">Basic Sponsors</h3>
      <img
        src={placeholder}
        className="platinum"
        alt="placeholder"
      />*/}
    </div>
  </div>
);

export default SponsorPage;
