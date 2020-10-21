// Importing Components from node_modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  Navbar as ReactNavbar,
  NavDropdown
} from 'react-bootstrap';

// Importing Icons
import { GoTriangleDown } from 'react-icons/go';

// Importing Styles
import '../styles/Navbar.scss';
import '../styles/NavbarMobile.scss';

// Importing Images
import zoo from '../assets/icons/zoo.png';

const Navbar = () => {

  return (
    <>
      <h1 className="page-header"> Electrical, Computer, and Software Engineering Students' Society </h1>
      <ReactNavbar expand="sm">

        {/* Branding Includes the ZOO Logo on the left of the nav */}
        <ReactNavbar.Brand>
          <NavLink to="/meaning-of-zoo">
            <img
              alt=""
              src={zoo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </NavLink>
        <div className="vertical-line" />
        </ReactNavbar.Brand>

        {/* For Bootstraps mobile toggle */}
        <ReactNavbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactNavbar.Collapse id="basic-navbar-nav">
          <Nav>

            {/* Homepage */}
            <NavLink
              to="/"
              className="nav-link"
            >
              HOME
            </NavLink>
            {/* End of Homepage */}

            {/* Council Dropdown */}
            <NavDropdown
              alignRight
              id="basic-nav-dropdown"
              title={(
                <>
                  COUNCIL
                  <GoTriangleDown />
                </>
              )}
            >
              <LinkContainer
                to="/executives"
                className="nav-link"
              >
                <NavDropdown.Item
                  active={false}
                  className="--active-item"
                >
                  EXECUTIVES
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer
                to="/commissioners"
                className="nav-link"
              >
                <NavDropdown.Item
                  active={false}
                  className="--active-item"
                >
                  COMMISSIONERS
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer
                to="/join-the-team"
                className="nav-link"
              >
                <NavDropdown.Item
                  active={false}
                  className="--active-item"
                >
                  JOIN THE TEAM
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            {/* End of Council Dropdown */}

            {/* Events */}
            <NavLink
              to="/events"
              className="nav-link"
            >
              EVENTS
            </NavLink>
            {/* End of Events */}

            {/* Sponsorship Dropdown */}
            <NavDropdown
              alignRight
              id="basic-nav-dropdown"
              title={(
                <>
                  SPONSORS
                  <GoTriangleDown />
                </>
              )}
            >
              <LinkContainer
                to="/our-sponsors"
                className="nav-link"
              >
                <NavDropdown.Item
                  active={false}
                  className="--active-item"
                >
                  OUR SPONSORS
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer
                to="/become-a-sponsor"
                className="nav-link"
              >
                <NavDropdown.Item
                  active={false}
                  className="--active-item"
                >
                  BECOME A SPONSOR
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            {/* End of Sponsorship Dropdown */}

          </Nav>

        </ReactNavbar.Collapse>
      </ReactNavbar>
    </>
  )
}

export default Navbar;
