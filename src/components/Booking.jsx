import React from "react";
import Yellow from "../Assets/images/Group 7.png";
import Red from "../Assets/images/Group 12.png";
import Blue from "../Assets/images/Group 11.png";
import Greece from "../Assets/images/Rectangle 17.png";
import Send from '../Assets/images/send.png'
import Leaf from '../Assets/images/LEAF.png'
import Map from '../Assets/images/map icon.png'
import Building from '../Assets/images/building 1.png'

const Booking = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row p-16">
      <div className="flex-1 mr-8">
        {" "}
        {/* Existing content */}
        <div>
          <h3 className="text-gray-400 font-semibold"> Easy and Fast</h3>
          <h1 className="mt-4 font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl">
            Book your next trip <br /> in 3 easy steps
          </h1>
        </div>
        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <img src={Yellow} alt="/" />
            <div className="md:ml-4">
              <h1 className="font-semibold">Choose Destination</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Veritatis, ipsum. Assumenda itaque fugiat explicabo? Iusto!
              </p>
            </div>
          </div>
          <div className=" mt-8 flex flex-col md:flex-row items-center">
            <img src={Red} alt="/" />
            <div className="md:ml-4">
              <h1 className="font-semibold">Make Payment</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Veritatis, ipsum. Assumenda itaque fugiat explicabo? Iusto!
              </p>
            </div>
          </div>
          <div className=" mt-8 flex flex-col md:flex-row items-center">
            <img src={Blue} alt="/" />
            <div className="md:ml-4">
              <h1 className="font-semibold">Reach Airport on Selected Date</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Veritatis, ipsum. Assumenda itaque fugiat explicabo? Iusto!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-md p-8 flex-1">
        <img src={Greece} alt="/" />
        <p className="mt-6 font-semibold">  Trip to greece </p>
        <p className="mt-4 text-xl">14-29 June | by Robbin joseph</p>
        <div className="flex mt-8 ">
            <img src={Leaf} className="pr-3" alt="/" />
            <img src={Map} className="pr-3" alt="/" />
            <img src={Send} className="pr-3" alt="/" />
        </div>
        <div className="mt-6 flex">
            <img src={Building} alt="/" />
            <p className="pl-3 text-gray-400 text-xl">24 people going</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
