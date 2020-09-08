import React from 'react';
import home from '../imgs/home.svg';
import about from '../imgs/person.svg';
import contact from '../imgs/email.svg';
import skills from '../imgs/settings.svg';
import instagram from '../imgs/Instagram.svg';
import github from '../imgs/GitHub.svg';
import linkedin from '../imgs/Linkedin.svg';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="navbar hidden sm:flex sticky left-0 top-0">
        <nav className="h-screen w-16 bg-darker flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center my-5 text-4xl">
            <Link to="/">
              <span className="logo text-primaryYellow">H</span>
            </Link>
          </div>
          <div className="nav-items flex flex-col items-center">
            <Link to="/">
              <img className="my-5" src={home} alt="home icon" />
            </Link>
            <Link to="/about">
              <img className="my-5" src={about} alt="home icon" />
            </Link>
            <Link to="/skills">
              <img className="my-5" src={skills} alt="home icon" />
            </Link>
            <Link to="/contact">
              <img className="my-5" src={contact} alt="home icon" />
            </Link>
          </div>
          <div className="social-icons flex items-center flex-col my-5">
            <a
              className="my-3"
              href="https://github.com/husseinTalal2"
              target="blank"
            >
              <img src={github} alt="github icon" />
            </a>
            <a
              className="my-3"
              href="https://www.linkedin.com/in/hussein-talal-5b77a81a7/"
              target="blank"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a
              className="my-3"
              href="https://www.instagram.com/hossien_talal/"
              target="blank"
            >
              <img src={instagram} alt="instagram icon" />
            </a>
          </div>
        </nav>
      </div>
      <div className="mobile-nav sm:hidden absolute bottom-0">
        <nav className="h-12 bg-darker flex items-center">
          <div className="flex justify-evenly items-center w-screen">
            <Link to="/">
              <img className="my-5" src={home} alt="home icon" />
            </Link>
            <Link to="/about">
              <img className="my-5" src={about} alt="home icon" />
            </Link>
            <Link to="/skills">
              <img className="my-5" src={skills} alt="home icon" />
            </Link>
            <Link to="/contact">
              <img className="my-5" src={contact} alt="home icon" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
