// Importing Components from node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { CgFacebook } from 'react-icons/cg';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import zoo from './assets/icons/zoo.png';

// Importing Project-Defined Components
// import Routes from './components/Routes';

// Importing Styles
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    {/* <Routes /> */}
    <div className="coming-soon--body">
      <div className="zoo-logo">
        <img
          alt="zoo logo"
          src={zoo}
          width="100"
          height="100"
        />
      </div>
      <h3> Coming Soon </h3>
      <p>Our website is currently under construction.</p>
      <div className="coming-soon--contact-info">
        <p className="coming-soon--subscript">In the meantime, check out what we are up to below!</p>
        <div className="coming-soon--icons">
          <CgFacebook
            style={{ margin: '0 5px 0 0' }}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://www.facebook.com/zooengg',
                '_blank',
              );
            }}
          />
          <AiFillInstagram
            style={{ margin: '0 12px 0 0' }}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://www.instagram.com/inZOOgram',
                '_blank',
              );
            }}
          />
          <FaLinkedinIn
            style={{ margin: '0 12px 0 0' }}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://www.linkedin.com/company/zooengg',
                '_blank',
              );
            }}
          />
          <FaTwitter
            style={{ margin: '0 12px 0 0' }}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://twitter.com/zooengg',
                '_blank',
              );
            }}
          />
          <MdEmail
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'mailto:execs@zooengg.ca',
              );
            }}
          />
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
