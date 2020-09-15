import React from 'react';

function CV() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-dark mt-16">
      <h1 className="inline text-black bg-primaryYellow lg:text-5xl text-3xl font-semibold">
        Download my CV
      </h1>
      <div className="flex flex-col mt-16 justify-center items-center text-white">
        <p className="text-justify px-10">
          Download my full CV to know all the details about me in one page{' '}
        </p>
        <button className="button text-center my-12 bg-transparent w-32 text-base hover:bg-primaryYellow text-primaryYellow font-normal hover:text-darker py-2 px-4 border border-primaryYellow hover:border-transparent rounded-none">
          Download
        </button>
      </div>
    </div>
  );
}

export default CV;
