import React from 'react';

function AboutMe() {
  return (
    <div className="bg-dark flex w-screen h-full lg:h-screen">
      <div className="lg:px-24 xs:px-4 md:mt-40 lg:w-1/2">
        <div className=" lg:mx-0 mx-12 lg:mt-24 lg:block flex flex-col items-center">
          <h1 className="inline text-black bg-primaryYellow text-3xl lg:text-5xl font-semibold">
            About me
          </h1>
          <p className="my-5 text-lightGray text-justify">
            I'm Hussein Talal, Front End Web Developer and a Software
            Engineering student at Salahaddin University-Erbil also an amateur
            photographer, recently I finished a 5 month intense web development
            program run by Re:Coded with Flatiron School's curriculum. I was
            always passionate about technology and how everything is being
            digitized to make life easier with programming. My passion is to be
            part of the tech industry to help build solutions and make life
            easier.
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
