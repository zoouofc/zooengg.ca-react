// Importing Components from node_modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import Styling
import '../stylesheets/sponsor/SponsorPage.scss';

// Importing Images
// import placeholder from '../assets/sponsor-pages/sponsor-placeholder.png';
import thanks from '../assets/sponsor-pages/thank-you.svg';
import chata from '../assets/sponsor-pages/chata.png';
import vog from '../assets/sponsor-pages/vog.png';
import garmin from '../assets/sponsor-pages/garmin.png';
import helcim from '../assets/sponsor-pages/helcim.svg';
import launchcode from '../assets/sponsor-pages/launchcode.png';
import magnet from '../assets/sponsor-pages/magnetforensics.png';
import primary from '../assets/sponsor-pages/primaryengineering.png';

const SponsorPage = () => (
  <div className="page--body sponsors">
    <div className="sponsor-thanks">
      <img
        src={thanks}
        alt=""
        style={{ width: '270px' }}
      />

      {/* Used to avoid the two <hr> tags from overlapping with the image and text  */}
      <div className="background-protection" />

      <h1>2022 - 2023</h1>
      <hr className="hr-left" />
      <hr className="hr-right" />
    </div>

    <div className="page--description sponsors">
      <p>
        The Electrical and Software Engineering Students&#39; Society would like
        to thank our Sponsors and Partners for their donations during the

        {/* Update the year */}
        {' '}
        2022-2023
        {' '}

        academic year. Their support enables us to reach our mission of enriching the student-body
        experience to ensure that they are fully prepared for their post-secondary careers. As such,
        this Society greatly appreciates all of their generosity, along with their intent to secure
        the success of the leaders of tomorrow.
      </p>

      <p style={{ margin: '0 0 -5px', textAlign: 'left' }}>
        <b>
          If you&#39;re interested in our work, click the button below to learn more about
          our sponsor opportunities and to start a conversation.
        </b>
      </p>
      <div className="btn--dark">
        <Link
          to="/become-a-sponsor"
          className="button"
        >
          Become a Sponsor!
        </Link>
      </div>
    </div>

    <hr
      style={{
        margin: '85px auto 0',
        width: '75%',
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
      <h3 className="sponsor-divider platinum-divider">Platinum Sponsors</h3>
      <img
        src={vog}
        className="platinum"
        alt="vog logo"
      />

      {/* <h3 className="sponsor-divider gold-divider">Gold Sponsors</h3> */}
      {/* <img
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
        margin: '85px auto 0',
        width: '75%',
      }}
    />

    <div className="sponsor-list">
      <h2 className="page--title">Our 2022 Tech Fair Sponsors</h2>
      {/* Placeholder for the different Sponsor Logo levels */}
      <h3 className="sponsor-divider gold-divider">Corporate Sponsors</h3>
      <img
        src={chata}
        className="gold"
        alt="chata logo"
      />

      <img
        src={garmin}
        className="gold"
        alt="garmin logo"
      />

      <img
        src={helcim}
        className="gold"
        alt="helcim logo"
      />

      <img
        src={launchcode}
        className="gold"
        alt="launchcode logo"
      />

      <img
        src={magnet}
        className="gold"
        alt="magnet forensics logo"
      />

      <img
        src={primary}
        className="gold"
        alt="primary engineering logo"
      />

      <img
        src={vog}
        className="gold"
        alt="launchpad by vog logo"
      />
    </div>
  </div>
);

export default SponsorPage;
