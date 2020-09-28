import React from 'react';

function AboutMe() {
  return (
    <div className="bg-dark flex w-screen h-full lg:h-screen">
      <div className="lg:px-32 xs:px-4 md:mt-40 my-16 lg:w-1/2">
        <div className=" lg:mx-0 mx-12 lg:block flex flex-col items-center">
          <h1 className="inline text-black bg-primaryYellow text-3xl lg:text-5xl font-semibold">
            About me
          </h1>
          <p className="my-5 text-lightGray text-justify">
            Hussein Talal is a Front-End Web Developer and Software Engineering
            Student at Salahaddin University-Erbil. Most recently, he finished a
            5-month intense web development program run by Re:Coded using
            Flatiron School’s curriculum. Software engineering merges Hussein’s
            passions for making life easier with programming, developing a
            creative eye through amateur photography, and solving widespread
            problems. His experience includes building websites with HTML/CSS,
            SASS, Vanilla JavaScript, React with Bootstrap and other CSS
            libraries, Firebase for databasement management and authentication
            in a CI/CD workflow, and Agile for project management. Projects
            include CURIOSITY-INSPIRING SOUNDING NAMES OF ALL PROJECTS. Hussein
            is known for getting excited about creating something out of nothing
            with high-energy and collaborative teams with shared goals.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 bg-primaryYellow text-4xl hidden lg:flex items-center justify-center">
        <h1
          className="text-4xl"
          style={{ fontSize: '20rem', fontWeight: 'bold' }}
        >{`</>`}</h1>
      </div>
    </div>
  );
}

export default AboutMe;
