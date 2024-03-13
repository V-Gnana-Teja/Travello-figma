import React from 'react';
import Group1 from '../Assets/images/Group 48.png'
import Group2 from '../Assets/images/Group 51.png'
import Group3 from '../Assets/images/Group 50.png'
import Group4 from '../Assets/images/Group 49.png'

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-center">
        <h3 className="text-gray-500 font-bold">CATEGORY</h3>
        <h1 className="pt-4 font-bold font-volkhov text-3xl md:text-4xl lg:text-5xl">We offer Best Services</h1>
      </div>

      <div className="flex justify-between mt-8 w-full">
        <div className="card mt-10" style={{ marginLeft: '80px' }}>
          <img src={Group1} alt="/" />
          <h1 className='mt-6 font-semibold'>Calculated Weather</h1>
          <p className='mt-6'>Built Wicket longer <br/> admire do barton <br/> vanity itself do in it.</p>
        </div>
        <div className="card mt-10">
          <img src={Group2} height={180} width={180} alt="/" />
          <h1 className='mt-2 font-semibold'>Best Flights</h1>
          <p className='mt-4'>Engrossed listening. <br/> Park gate sell they <br/> west hard for the.</p>
        </div>
        <div className="card mt-10" style={{ marginRight: '50px' }}>
          <img src={Group3} alt="/" />
          <h1 className='mt-6 font-semibold'>Local Events</h1>
          <p className='mt-6'>Barton vanity itself do <br/> in it. Preferred to men it <br/> engrossed listening.</p>
        </div>
        <div className="card mt-10" style={{ marginRight: '80px' }}>
          <img src={Group4} alt="/" />
          <h1 className='mt-6 font-semibold'>Customization</h1>
          <p className='mt-6'>We deliver outsourced <br/>aviation services for <br/> military customers</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
