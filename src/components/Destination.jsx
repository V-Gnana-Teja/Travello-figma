import React from 'react';
import Europe from '../Assets/images/Europe.png';
import Rome from '../Assets/images/Rome.png';
import London from '../Assets/images/London.png';
import Cursor from '../Assets/images/cursor-4196.png';

const Destination = () => {
  return (
    <div className="flex flex-col mt-16 items-center justify-center">
      <div className="text-center">
        <h3 className="text-gray-500 font-bold">Top Selling</h3>
        <h1 className="pt-4 font-bold font-volkhov text-3xl md:text-4xl lg:text-5xl">Top Destinations</h1>
      </div>

      <div className="flex justify-center mt-8">
        <div className="max-w-xs relative mx-4">
          <div className="relative">
            <a href="link_to_rome" className="block">
              <img src={Rome} alt="Rome, Italy" className="w-full rounded-lg shadow-lg" />
            </a>
            <div className="absolute bottom-0 left-0 justify-between right-0 bg-white px-4 py-2">
              <h2 className="text-gray-800 text-lg font-semibold">Rome, Italy <span>$5.42k</span></h2>
              <p className="text-gray-600"><img src={Cursor} alt="/" className="inline-block align-middle mr-2" /> 10 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs relative mx-4">
          <div className="relative">
            <a href="link_to_london" className="block">
              <img src={London} alt="London, UK" className="w-full rounded-lg shadow-lg" />
            </a>
            <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-2">
              <h2 className="text-gray-800 text-lg font-semibold">London, UK</h2>
              <p className="text-gray-600"><img src={Cursor} alt="/" className="inline-block align-middle mr-2" /> 12 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="max-w-xs relative mx-4">
          <div className="relative">
            <a href="link_to_europe" className="block">
              <img src={Europe} alt="Full Europe" className="w-full rounded-lg shadow-lg" />
            </a>
            <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-2">
              <h2 className="text-gray-800 text-lg font-semibold">Full Europe</h2>
              <p className="text-gray-600"><img src={Cursor} alt="/" className="inline-block align-middle mr-2 " /> 28 Days Trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
