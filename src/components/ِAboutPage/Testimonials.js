import React from 'react';

function Testimonials() {
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-dark my-48">
      <h1 className="inline text-black bg-primaryYellow lg:text-5xl text-3xl font-semibold">
        Testimonials
      </h1>
      <div className="md:w-3/4 w-4/5  mt-16 justify-center bg-inputColor items-center text-white rounded">
        <p className="text-justify text-2xl mb-16 mt-12 mx-12">
          {'"'}What I like about Hussein is that he is calm, his pieces of
          information are always top-notch, he cares about everyone and offers
          his help all the time.{'"'}
        </p>
        <p className="mb-8 ml-12 md:text-base text-xs">
          Osama - Instructor at Re:Coded
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
