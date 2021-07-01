// Importing Components from node_modules
import React from 'react';

// Import Styling
import '../stylesheets/JoinPage.scss';

// Importing documents and images
import commissionerApp from '../assets/council-pages/CommissionerForm.pdf';
import joinUs from '../assets/council-pages/join-us.svg';

const JoinPage = () => (
  <div className="page--body join-us">
    <div className="page--description join-us row">
      {/* <div className="d-none d-lg-block col-lg-1" /> */}
      <div className="description-left col-lg-5 col-md-6 d-none d-md-block">
        <img
          src={joinUs}
          alt=""
        />
      </div>
      <div className="description-right col-lg-5 col-md-6 col-sm-12 col-xs-12">
        <h2 className="page--title join-us">Join the Team</h2>

        {/* Update text to speecific year  */}
        <p>
          We are accepting applications for the
          {' '}
          <b>2021-2022</b>
          {' '}
          academic year! There are various commissioner roles available,
          so be sure to pick the right one for you.
          <br />
          <br />
          <b>Questions?</b>
          {' '}
          Email
          {' '}
          <a href="mailto: execs@zooengg.ca">execs@zooengg.ca</a>
          , otherwise download the form below and submit your application to join today!
        </p>

        <div className="btn--dark">
          <a
            className="button"
            href={commissionerApp}
            target="_blank"
            rel="noreferrer"
          >
            Download Form
          </a>
        </div>
      </div>
    </div>

    <hr />

    <div className="application-form--container">
      <h3>Send Us Your Application!</h3>
      <p>
        We would like to thank every applicant in advance.
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
          placeholder="Email  (@ucalgary.com preferred)"
        />

        <label
          id="ucid"
          htmlFor="ucid"
        >
          UCID *
        </label>
        <input
          required
          maxLength="8"
          id="ucid-box"
          type="text"
          name="ucid"
          placeholder="UCID"
        />

        <label
          id="degree"
          htmlFor="degree"
        >
          Degree
        </label>
        <select
          required
          id="degree-select"
          name="degree"
        >
          <option selected disabled hidden>
            Select Program...
          </option>
          <option value="Computer">Computer</option>
          <option value="Electrical">Electrical</option>
          <option value="Software">Software</option>
          <option disabled>------------</option>
          <option value="Biomedical">Biomedical</option>
          <option value="Chemical">Chemical</option>
          <option value="Civil">Civil</option>
          <option value="General">General</option>
          <option value="Geomatics">Geomatics</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Oil & Gas">Oil & Gas</option>
          <option value="Other">Other</option>
        </select>

        <label
          id="year"
          htmlFor="year"
        >
          Year
        </label>
        <select
          required
          id="year-select"
          name="year"
        >
          <option selected disabled hidden>
            Select Year of Studies...
          </option>
          <option value="2nd Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
          <option value="5th Year and Above">5th Year and Above</option>
        </select>

        <label
          id="file"
          htmlFor="file"
        >
          Upload your Commissioner Application *
        </label>
        <input
          required
          id="file-select"
          accept="application/pdf"
          type="file"
          name="fileUpload"
        />

        <label
          id="comments"
          htmlFor="comment"
        >
          Additional Comments
        </label>
        <textarea
          maxLength="6000"
          id="comments-box"
          name="comment"
          placeholder="Additional comments, if any (6000 char. limit)..."
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

export default JoinPage;
