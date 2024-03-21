import React from 'react';
import Send from '../Assets/images/send-mail.png';
import Mail from '../Assets/images/mail-5899 (1).png'; 

const Subscribe = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-gray-100 rounded-lg shadow-lg p-8 relative text-lg font-bold text-center">
        <p className="mb-6">Subscribe to get information, latest news, and other <br /> interesting offers about Jadoo</p>

        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder=""
            />
            <img
              src={Mail}www
              alt="Email Icon"
              className="absolute left-3 top-2.5 w-6 h-6"
            />
          </div>
          <button className="bg-red-400 text-white px-4 py-2 rounded-md ml-4">Subscribe</button>
        </div>

        <img
          src={Send}
          alt="Send Mail"
          className="absolute top-0 right-0 z-5 w-8 h-8 cursor-pointer"
        />

      </div>
    </div>
  );
};

export default Subscribe;
