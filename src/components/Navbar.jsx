import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  Navbar as ReactNavbar,
  NavDropdown,
} from 'react-bootstrap';

// Importing Icons
import { FaAngleDown } from 'react-icons/fa';

// Importing Styles
import '../stylesheets/navbar/Navbar.scss';
import '../stylesheets/navbar/NavbarMobile.scss';

// Importing Images
import zoo from '../assets/icons/zoo-white.png';

const Navbar = () => {
  // Used to determine the current rou te (aka pathname) of the application
  const location = useLocation();

  /*
   * Each time the location changes (i.e. new page loaded) the user
   * will be loaded in at the top of the page, rather than possibly
   * loading in at the middle/bottom.
  */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <h1 className="page-header">
        Electrical and Software Engineering Students&#39; Society
      </h1>
      <ReactNavbar
        expand="sm"
        variant="dark"
      >

        {/* Branding Includes the ZOO Logo on the left of the nav */}
        <ReactNavbar.Brand>
          <NavLink to="/meaning-of-zoo">
            <img
              alt=""
              src={zoo}
              width="40"
              height="40"
              // className="d-inline-block align-top"
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
              className="nav-link top-level"
              active={false}
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
                  <FaAngleDown
                    style={{
                      fill: '#F7F7FF',
                      margin: '-3px 0 0 3px',
                    }}
                  />
                </>
              )}
            >
              <LinkContainer
                to="/executives"
                className="nav-link lower-level"
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
                className="nav-link lower-level"
              >
                <NavDropdown.Item
                  active={false}
                  className="--active-item"
                >
                  COMMISSIONERS
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer
                to="/advocates"
                className="nav-link lower-level"
              >
                <NavDropdown.Item
                  active={false}
                  className="--active-item"
                >
                  ACADEMIC ADVOCATES
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer
                to="/join-the-team"
                className="nav-link lower-level"
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
              className="nav-link top-level"
              active={false}
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
                  <FaAngleDown
                    style={{
                      fill: '#F7F7FF',
                      margin: '-3px 0 0 3px',
                    }}
                  />
                  {' '}

                </>
              )}
            >
              <LinkContainer
                to="/our-sponsors"
                className="nav-link lower-level"
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
                className="nav-link lower-level"
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
  );
};

export default Navbar;
