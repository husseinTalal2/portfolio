import React from 'react';
import recodedCertificate from '../../imgs/recoded.jpg';
import flatironCertificate from '../../imgs/flatiron.jpg';
function Certificates() {
  return (
    <div className="w-screen h-1/2 flex flex-col justify-center items-center bg-dark my-48">
      <h1 className="inline text-black bg-primaryYellow lg:text-5xl text-3xl font-semibold">
        Certificates
      </h1>
      <div className="flex lg:flex-row flex-col mt-16 lg:mt-24 justify-center items-center">
        <img
          className="lg:w-1/3  px-6 lg:mx-24"
          src={recodedCertificate}
          alt="recoded certificate"
        />
        <img
          className="lg:w-1/3 px-6 mt-12 mx-24"
          src={flatironCertificate}
          alt="flatiron certificate"
        />
      </div>
    </div>
  );
}

export default Certificates;
