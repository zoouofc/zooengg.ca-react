// Importing Components from node_modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

// Import styling
import '../stylesheets/Footer.scss';

const Footer = () => (
  <div className="footer--body">

    <section className="footer--upper-content">
      <div className="footer--address">
        <h4> Electrical and Software Engineering Students&#39; Society</h4>
        <p>
          2500 University Drive, ENA 106
          <br />
          Calgary, Alberta, Canada
          <br />
          T2N 1N4
        </p>
      </div>

      <div className="footer--link-container">
        {/* Link Column 1 */}
        <div className="link-column link-1">
          <h4 className="footer-title">Site Links</h4>
          <ul>
            <li><NavLink to="/">About Us</NavLink></li>
            <li><NavLink to="/executives">Executive Council</NavLink></li>
            <li><NavLink to="/commissioners">Commissioners</NavLink></li>
            <li><NavLink to="/advocates">Academic Advocates</NavLink></li>
            <li><NavLink to="/join-the-team">Join the Team</NavLink></li>
          </ul>
        </div>

        {/* Link Column 2 */}
        <div className="link-column link-2">
          <ul>
            <li><NavLink to="/our-events">Our Events</NavLink></li>
            <li><NavLink to="/calendar">Events Calendar</NavLink></li>
            <li><NavLink to="/zoo-sponsors">Our Sponsors</NavLink></li>
            <li><NavLink to="/become-a-sponsor">Become a Sponsor</NavLink></li>
            <li><a href="https://zooengg.myshopify.com/" target="_blank" rel="noreferrer">Our Store</a></li>
          </ul>
        </div>
      </div>
    </section>

    <hr />

    <section className="footer--lower-content">
      <div className="social-media--icons">
        <a href="mailto:execs@zooengg.ca">
          <FaEnvelope />
        </a>

        <a href="https://www.facebook.com/zooengg/">
          <FaFacebookSquare />
        </a>

        <a href="https://www.linkedin.com/company/zooengg">
          <FaLinkedin />
        </a>

        <a href="https://twitter.com/zooengg">
          <FaTwitterSquare />
        </a>

        <a href="https://discord.com/invite/nkEN6sG">
          <FaDiscord />
        </a>

        <a href="https://www.instagram.com/inzoogram/">
          <FaInstagram />
        </a>
      </div>

      <p>
        Copyright © 2021 Electrical and Software Engineering Students&#39; Society
        <b>
          {' '}
          | Made with ♡ in Calgary
        </b>
      </p>
    </section>
  </div>
);

export default Footer;
