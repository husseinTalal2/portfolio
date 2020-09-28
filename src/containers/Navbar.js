import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';
import logo from '../imgs/logo.svg';
function Navbar() {
  const location = useLocation();

  function activeClassName(path) {
    return location.pathname === path ? 'text-primaryYellow' : 'text-lightGray';
  }

  return (
    <>
      <div className="navbar hidden lg:flex fixed left-0 top-0">
        <nav className="h-screen w-16 bg-darker flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center my-5 text-4xl">
            <NavLink to="/">
              <img src={logo} className="logo" />
            </NavLink>
          </div>
          <div className="nav-items flex flex-col items-center">
            <NavLink to="/">
              <FontAwesomeIcon
                className={`mb-8 text-xl ${activeClassName('/')}`}
                icon={faHome}
              />
            </NavLink>

            <NavLink to="/about">
              <FontAwesomeIcon
                className={`mb-8 text-xl ${activeClassName('/about')}`}
                icon={faUser}
              />
            </NavLink>

            <NavLink to="/skills">
              <FontAwesomeIcon
                className={`mb-8 text-xl ${activeClassName('/skills')}`}
                icon={faUserCog}
              />
            </NavLink>
            <NavLink to="/contact">
              <FontAwesomeIcon
                className={`mb-8 text-xl ${activeClassName('/contact')}`}
                icon={faEnvelope}
              />
            </NavLink>
          </div>
          <div className="social-icons flex items-center flex-col">
            <a
              className="my-3"
              href="https://github.com/husseinTalal2"
              target="blank"
            >
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow lg:mb-4 text-xl"
                icon={faGithub}
              />
            </a>
            <a
              className="my-3"
              href="https://www.linkedin.com/in/hussein-talal-5b77a81a7/"
              target="blank"
            >
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow lg:mb-4 text-xl"
                icon={faLinkedin}
              />
            </a>
            <a
              className="my-3"
              href="https://www.instagram.com/hossien_talal/"
              target="blank"
            >
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow lg:mb-4 text-xl"
                icon={faInstagram}
              />
            </a>
          </div>
        </nav>
      </div>
      <div className="mobile-nav lg:hidden fixed bottom-0">
        <nav className="h-16 bg-darker flex items-center">
          <div className="flex justify-evenly items-center w-screen">
            <NavLink to="/">
              <FontAwesomeIcon
                className={`lg:mb-8 text-xl ${activeClassName('/')}`}
                icon={faHome}
              />
            </NavLink>
            <NavLink to="/about">
              <FontAwesomeIcon
                className={`lg:mb-8 text-xl ${activeClassName('/about')}`}
                icon={faUser}
              />
            </NavLink>
            <NavLink to="/skills">
              <FontAwesomeIcon
                className={`lg:mb-8 text-xl ${activeClassName('/skills')}`}
                icon={faUserCog}
              />
            </NavLink>
            <NavLink to="/contact">
              <FontAwesomeIcon
                className={`lg:mb-8 text-xl ${activeClassName('/contact')}`}
                icon={faEnvelope}
              />
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
