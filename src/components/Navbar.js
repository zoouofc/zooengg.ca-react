import React from 'react';
// Following is imported for page routing
import {Link} from 'react-router-dom';
import {
  Nav,
  Navbar as ReactNavbar,
  NavDropdown
} from 'react-bootstrap';

import '../styles/Navbar.css';

import zoo from '../assets/icons/zoo.png';
// import dropdownIcon from '../assets/icons/icon-dropdown.png';

const Navbar = () => {

  return (  
    <>
      <h1 className="page-header"> Electrical, Computer, and Software Engineering Students' Society </h1>
      <ReactNavbar expand="lg">
        <ReactNavbar.Brand href="#home">
          <img
            alt=""
            src={zoo}
            width="32"
            height="32"
            className="d-inline-block align-top"
          />
        </ReactNavbar.Brand>
        <div className="vertical-line" />
        <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">HOME</Link>
            <NavDropdown title="COUNCIL" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/executives" className="nav-link">EXECUTIVES</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/commissioners" className="nav-link">COMMISSIONERS</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/join-the-team" className="nav-link">JOIN THE TEAM</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/events" className="nav-link">EVENTS</Link>
            <NavDropdown title="SPONSORS" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/our-sponsors" className="nav-link">OUR SPONSORS</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/become-a-sponsor" className="nav-link">BECOME A SPONSOR</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </ReactNavbar.Collapse>
      </ReactNavbar>
    </>
  )
}

export default Navbar;
