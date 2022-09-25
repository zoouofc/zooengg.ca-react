// Importing Components from node_modules
import React from 'react';
import Flickity from 'react-flickity-component';

// Import Styling
import '../stylesheets/HomePage.scss';
import '../stylesheets/Flickity.scss';

// Importing images
import pic1 from '../assets/home-pages/CouncilGroup16.png';
import pic2 from '../assets/home-pages/CouncilGroup18.png';
import pic3 from '../assets/home-pages/CouncilGroup20.png';
import pic4 from '../assets/home-pages/CouncilGroup21.png';
import pic5 from '../assets/home-pages/SocialMediaBanner.png';
import pic6 from '../assets/home-pages/TechFair.png';
// import pic6 from '../assets/home-pages/HarryZooterAd.png';

// Importing files
import constitution from '../assets/home-pages/ZooConstitution_UpdatedMarch2022.pdf';

const flickityOptions = {
  initialIndex: 1,
  imagesLoaded: true,
  wrapAround: true,
  autoPlay: 3000,
  resize: true,
};

const HomePage = () => (
  <div className="page--body home">
    <div className="carousel-container">
      <Flickity
        className="carousel" // default ''
        elementType="div" // default 'div'
        options={flickityOptions} // takes flickity options {}
        style={{ height: "50vh" }}
      >
        <img src={pic1} alt="" />
        <a href="https://www.eventbrite.ca/e/zoos-tech-fair-2022-tickets-403745873777" target="_blank" rel="noreferrer">
          <img src={pic6} alt="" />
        </a>
        <a href="https://linktr.ee/ZOO.UCalgary" target="_blank" rel="noreferrer">
          <img src={pic5} alt="" />
        </a>
        <img src={pic4} alt="" />
        <img src={pic3} alt="" />
        <img src={pic2} alt="" />
      </Flickity>
    </div>

    <h2 className="page--title home">About ZOO</h2>
    <div className="page--description home">
      <p className="home-text">
        The University of Calgary&#39;s Electrical and Software Engineering
        Students&#39; Society, affectionally referred to as ZOO, is an initiative run by students,
        for students. ZOO aims to support their undergraduate students, both academically and
        socially, by providing them with a variety of events to enrich their University experience.
        Through the Society, we hope assist students in clearing the gap between university and
        industry.
      </p>
      <p className="home-text">
        In addition to those responsibilities, ZOO serves as a liaison between the Department (ESE)
        and the many Electrical, Software and Computer Engineering students. We work hard to
        represent your opinions and ensure that your voices are heard.
      </p>
      <p className="home-text">
        Any inquiries for ZOO can be voiced in-person in ENA 106, or via email to
        {' '}
        <a href="mailto: execs@zooengg.ca">execs@zooengg.ca</a>
        . We will attempt to answer questions to the best of our ability and if necessary, direct
        you to the relevant Department employee.
      </p>
      <hr />
      <p id="page--constitution" className="home">
        ZOO abides by the
        {' '}
        <a href={constitution} target="_blank" rel="noreferrer">Club Constitution</a>
      </p>
    </div>
  </div>
);

export default HomePage;
