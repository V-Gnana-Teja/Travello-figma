import React from 'react';
import Play from '../Assets/images/play-button-4210.png';
import Traveller from '../Assets/images/Traveller 1.png';

const Hero = () => {
  return (
    <div className='pt-32 p-16 flex flex-wrap'>
      <div className="w-full md:w-1/2">
        <div>
          <h3 className='pt-8 uppercase font-bold text-orange-400'>Best Destinations around the world</h3>
          <h1 className='pt-4 font-bold font-volkhov font text-3xl md:text-4xl lg:text-6xl'>Travel, enjoy <br /> and live a new <br /> and full life</h1>
          <p className='pt-6 pb-4'>Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.</p>
          <div className="flex items-center">
            <button className="border pt bg-orange-500 text-white rounded-md px-4 py-2 text-lg mr-4">Find out more</button>
            <button className=" text-black rounded-md px-6 py-4 text-lg ml-4">
              <div className="flex items-center">
                <img src={Play} height={35} width={35} alt="/" />
                <span className="ml-2">Play Demo</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center z-0">
        <img src={Traveller} height={700} width={700} alt="/" />
      </div>
    </div>
  );
};

export default Hero;
