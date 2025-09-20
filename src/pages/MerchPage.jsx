import React from "react";
import "../stylesheets/JoinPage.scss"; // just used the jonipage styling, will change later

const MerchPage = () => (
  <div className="page--body join-us">
    <div className="page--description join-us row">
      <div className="description-right col-lg-5 col-md-6 col-sm-12 col-xs-12">
        <h2 className="page--title join-us" style={{ margin: '0 auto', textAlign: 'center' }}>Merchandise</h2>
        <p style={{ margin: '0 auto', textAlign: 'center' }}>
          We will be updating this page soon with more details, stay tuned!
          <br />
          <br />
          <b>Questions?</b> Email{" "}
          <a href="mailto: execs@zooengg.ca">execs@zooengg.ca</a>
        </p>
      </div>
    </div>
  </div>
);

export default MerchPage;