import React from 'react';
import home from '../imgs/home.svg';
import about from '../imgs/person.svg';
import contact from '../imgs/email.svg';
import skills from '../imgs/settings.svg';
import instagram from '../imgs/Instagram.svg';
import github from '../imgs/GitHub.svg';
import linkedin from '../imgs/Linkedin.svg';
function Navbar() {
  return (
    <div className="navbar">
      <nav className="h-screen w-16 bg-gray-900 flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center my-5 text-4xl">
          <span className="logo text-yellow-500">H</span>
        </div>
        <div className="nav-items flex flex-col">
          <img className="my-5" src={home} alt="home icon" />
          <img className="my-5" src={about} alt="about icon" />
          <img className="my-5" src={skills} alt="skills icon" />
          <img className="my-5" src={contact} alt="contact icon" />
        </div>
        <div className="social-icons flex flex-col my-5">
          <img className="my-3" src={github} alt="github icon" />
          <img className="my-3" src={linkedin} alt="linkedin icon" />
          <img className="my-3" src={instagram} alt="instagram icon" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
