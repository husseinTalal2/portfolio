import React from 'react';
import react from '../../imgs/react.svg';
import js from '../../imgs/javascript.svg';
import bootstrap from '../../imgs/bootstrap.svg';
import firebase from '../../imgs/firebase.svg';
import jest from '../../imgs/jest.svg';
import css from '../../imgs/css.svg';
import npm from '../../imgs/npm.svg';
import git from '../../imgs/git.svg';
import html from '../../imgs/html.svg';

function SkillsPage() {
  return (
    <div className="bg-dark">
      <div className="lg:px-32 mt-40 lg:flex  bg-dark w-screen h-screen">
        <div className="lg:w-1/2 lg:mx-0 mx-12 lg:mt-32">
          <h1 className="inline text-black bg-primaryYellow lg:text-4xl text-2xl font-semibold">
            Skills & Experience
          </h1>
          <p className="my-5 text-lightGray">
            I have experience in building websites with HTML, CSS, SASS, Vanilla
            JavaScript and React with Bootstrap and other CSS libraries and
            using Firebase to manage the database and the authentication in a
            CI/CD workflow and Agile methodologies to manage the project, also I
            have experience using Git and GitHub. I have worked on multiple
            projects with a team in a collaborative environment. I like to work
            in a collaborative team to achieve the desired goals and make
            something out of nothing.
          </p>
        </div>
        <div className="lg:w-2/3 w-screen lg:px-32 md:px-24 sm:px-16 px-12 mt-8 lg:mt-16 mb-12 flex flex-wrap justify-center">
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={react}
            alt="react icon"
          />
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={bootstrap}
            alt="bootstrap icon"
          />
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={js}
            alt="js icon"
          />
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={css}
            alt="css icon"
          />
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={firebase}
            alt="firebase icon"
          />
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={jest}
            alt="jest icon"
          />
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={npm}
            alt="npm icon"
          />
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={git}
            alt="git icon"
          />
          <img
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 lg:py-0 px-2"
            src={html}
            alt="html icon"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
