import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function HomePage() {
  return (
    <div className="flex flex-col sm:py-56 py-40 sm:px-32 justify-center px-12 text-3xl font-semibold sm:text-5xl text-white bg-dark w-screen h-screen">
      <h1>
        Hi, <br /> I'm <span className="text-primaryYellow">H</span>ussein
        Talal,
        <br /> Front End Web Developer
      </h1>
      <span className="text-sm font-normal text-lightGray">And amateur photographer</span>

      <Link
        to="/contact"
        className="button text-center my-12 bg-transparent w-32 text-base hover:bg-primaryYellow text-primaryYellow font-normal hover:text-darker py-2 px-4 border border-primaryYellow hover:border-transparent rounded-none"
      >
        Contact me
      </Link>
    </div>
  );
}

export default HomePage;
