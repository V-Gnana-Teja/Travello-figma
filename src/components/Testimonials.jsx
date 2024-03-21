import React from 'react';

const Testimonials = () => {
  return (
    <div className='mt-12 flex flex-col md:flex-row p-16'> 
      <div className="flex-1 mr-8">
        <div>
          <h3 className="text-gray-500 text-xl font-semibold">TESTIMONIALS</h3>
          <h1 className="mt-4 font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl">
            What People Say  <br /> About Us.
          </h1>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8 flex-1">
        <p className="text-gray-800 text-lg">
          "on the windows talking painted pasture yet its express parties use. Sure last upon he same sa knew next. Of believed or diverted no."
        </p>
        <p className="font-semibold text-gray-900 mt-4">Teja</p>
        <p className="text-gray-600">Bengaluru, India</p>
      </div>
    </div>
  );
};

export default Testimonials;
