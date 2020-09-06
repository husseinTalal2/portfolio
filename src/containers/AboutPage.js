import React from 'react';
import underConstruction from '../imgs/underConstruction.png';

function AboutPage() {
  return (
    <div className="flex flex-col my-5 mx-auto items-center justify-center ">
      <h1 className="text-4xl">UNDER CONSTRUCTION</h1>
      <img
        className="w-screen lg:w-1/2"
        src={underConstruction}
        alt="under construction"
      />
    </div>
  );
}

export default AboutPage;
