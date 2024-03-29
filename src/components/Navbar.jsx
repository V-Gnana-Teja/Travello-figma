import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Logo from "../Assets/images/Logo.png";
import Decore from '../Assets/images/Decore.png';

const Navbar = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  return (
    <div className="navbar-container">

        <div className="absolute" style={{ left: "750.62px", top: "0px", zIndex: 0, pointerEvents: "none" }}>
      <img src={Decore} alt="/" className="opacity-80 pointer-events-auto"  />
    </div>

      <div className="navbar-content flex justify-between items-center h-20 px-5 absolute w-full z-10">
        <div>
          <h1><img src={Logo} height={53} width={183} alt="/" /> </h1>
        </div>

        <ul className="flex flex-row text-xl">
          <li className="mr-12">Destinations</li>
          <li className="mr-12">Hotels</li>
          <li className="mr-12">Flights</li>
          <li className="mr-12">Bookings</li>
          <li className="mr-12">Login</li>
        </ul>

        <div className="flex items-center">
          <button className="border border-black rounded-md px-4 py-2 text-lg mr-4">
            Sign up
          </button>
          <div className="relative">
            <button
              className="px-4 py-2 text-lg flex items-center"
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
            >
              En <FaAngleDown className="ml-1" />
            </button>
            {showLanguageOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-100">Telugu</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
