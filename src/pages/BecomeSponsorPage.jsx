// Importing Components from node_modules
import React from 'react';

// Import Styling
import '../stylesheets/sponsor/BecomeSponsorPage.scss';

// Importing Image & Documents
import handshake from '../assets/sponsor-pages/handshake.svg';
import financial from '../assets/sponsor-pages/ZOOPartnershipPackage2021.pdf';

const BecomeSponsorPage = () => (
  <div className="page--body become-sponsor">

    <div className="page--description become-sponsor row">
      <div className="description-left col-lg-7 col-md-6 col-sm-12 col-xs-12">
        <h2 className="page--title become-sponsor">Reasons to Sponsor</h2>
        <p>
          Over the past few years, there has been significant growth in the students enrolling into Software and Electrical Engineering. Therefore, as the Electrical, Computer, and Software Engineering Students&#39; Society, it is our goal to ensure that the students are provided with the necessary resources to succeed in and out of the classroom. Ensuring a smooth transition from Post-Secondary to Industry is crucial as there will be the front-runners in the technological field in Calgary and the rest of the world.
        </p>
        <p>
          To be able to achieve our goal of providing for our students, we require the assistance from partners and sponsors! If you&#39;re interested in what we have available, please check one of the packages below. Please note that our team is very accomodating and willing to entertain any discussions on custom sponsorship requests.
        </p>

        <div className="btn--dark">
          <a
            className="button"
            href={financial}
            target="_blank"
            rel="noreferrer"
          >
            Financial Sponsorship Package
          </a>
          <br />
          
          <a
            className="button disabled"
            onClick="return false;"
          >
            In-kind Sponsorship Package (Coming Soon)
          </a>
        </div>
      </div>

      <div className="image-right col-lg-3 col-md-3 d-none d-md-block">
        <img
          src={handshake}
          alt=""
        />
      </div>
    </div>

    <hr />

    <div className="contact-form--container">
      <h3>Contact Us!</h3>
      <p>
        We would love to get a conversation goin.
        <br />
        <b style={{ color: 'red' }}>This form is currently disabled, so please contact us via direct email</b>
      </p>
      <form id="grid">
        <label
          id="name"
          htmlFor="name"
        >
          Name *
        </label>
        <label
          id="fname"
          htmlFor="fname"
        >
          First Name
        </label>
        <input
          required
          id="fname-box"
          type="text"
          name="firstname"
          placeholder="First Name"
        />

        <label
          id="lname"
          htmlFor="lname"
        >
          Last Name
        </label>
        <input
          required
          id="lname-box"
          type="text"
          name="lastname"
          placeholder="Last Name"
        />

        <label
          id="email"
          htmlFor="email"
        >
          Email *
        </label>
        <input
          required
          id="email-box"
          type="text"
          name="email"
          placeholder="Email"
        />

        <label
          id="company"
          htmlFor="company"
        >
          Company or Organization *
        </label>
        <input
          required
          maxLength="64"
          id="company-box"
          type="text"
          name="company"
          placeholder="Company or Organization..."
        />

        <label
          id="subject"
          htmlFor="subject"
        >
          Subject *
        </label>
        <input
          required
          maxLength="64"
          id="subject-box"
          type="text"
          name="subject"
          placeholder="Subject"
        />

        <label
          id="message"
          htmlFor="message"
        >
          Message *
        </label>
        <textarea
          maxLength="6000"
          id="message-box"
          name="message"
          placeholder="Message (6000 char. limit)..."
        />

        <input
          id="submit"
          name="submit"
          type="submit"
          value="Submit"
          disabled
        />

      </form>
    </div>

  </div>
);

export default BecomeSponsorPage;
