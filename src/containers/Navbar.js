import React from 'react';
import home from '../imgs/home.svg';
import about from '../imgs/person.svg';
import contact from '../imgs/email.svg';
import skills from '../imgs/settings.svg';
import instagram from '../imgs/Instagram.svg';
import github from '../imgs/GitHub.svg';
import linkedin from '../imgs/Linkedin.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Navbar() {
  return (
    <>
      <div className="navbar hidden lg:flex fixed left-0 top-0">
        <nav className="h-screen w-16 bg-darker flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center my-5 text-4xl">
            <Link to="/">
              <span className="logo text-primaryYellow">H</span>
            </Link>
          </div>
          <div className="nav-items flex flex-col items-center">
            <Link to="/">
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow mb-8 text-xl"
                icon={faHome}
              />
            </Link>
            <Link to="/about">
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow mb-8 text-xl"
                icon={faUser}
              />
            </Link>
            <Link to="/skills">
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow mb-8 text-xl"
                icon={faUserCog}
              />
            </Link>
            <Link to="/contact">
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow mb-8 text-xl"
                icon={faEnvelope}
              />
            </Link>
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
            <Link to="/">
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow lg:mb-8 text-xl"
                icon={faHome}
              />
            </Link>
            <Link to="/about">
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow lg:mb-8"
                icon={faUser}
              />
            </Link>
            <Link to="/skills">
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow lg:mb-8"
                icon={faUserCog}
              />
            </Link>
            <Link to="/contact">
              <FontAwesomeIcon
                className="text-lightGray hover:text-primaryYellow lg:mb-8"
                icon={faEnvelope}
              />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
