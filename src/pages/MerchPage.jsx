import React from "react";
import "../stylesheets/MerchPage.scss";

const MerchPage = () => (
  <div className="page--body merch">
    <div className="page--description merch">
      <h2 className="page--title merch">ZOO Merch Order Form!</h2>
      <p>
        Interested in purchasing some ZOO merch? Our form isn't currently
        available, but stay tuned for an update to then be able to purchase
        whatever merch interests you!
      </p>
      <p>
        If you have any questions regarding the process, do not hesitate to
        email <a href="mailto: merch@zooengg.ca">merch@zooengg.ca</a>
      </p>
    </div>
    <div className="form-container">
      <iframe
        title="event-calendar"
        src="https://forms.gle/2VDrkF6hyppH4S3d8"
        style={{ border: 0 }}
        frameborder="0"
      />
    </div>
  </div>
);

export default MerchPage;
