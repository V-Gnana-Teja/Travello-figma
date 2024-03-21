import React, { useState } from 'react';
import Axon from '../Assets/images/Axon.png'
import Jetstar from '../Assets/images/Jetstar.png'
import Expedia from '../Assets/images/Expedia.png'
import Qantas from "../Assets/images/Qantas.png"
import Alitalia from  '../Assets/images/Alitalia.png'


const Testimonials = () => {
  const [showCard2, setShowCard2] = useState(false);

  const handleCardClick = () => {
    setShowCard2(!showCard2);
  };

  return (

    <div>
    <div className='mt-12 flex flex-col md:flex-row p-16'> 
      <div className="flex-1 mr-8">
        <div>
          <h3 className="text-gray-500 text-xl font-semibold">TESTIMONIALS</h3>
          <h1 className="mt-4 font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl">
            What People Say  <br /> About Us.
          </h1>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 relative">
          <p className="text-gray-800 text-lg">
            {!showCard2 ?
              "on the windows talking painted pasture yet its express parties use. Sure last upon he same sa knew next. Of believed or diverted no."
              :
              ''
            }
          </p>
          <p className="font-semibold text-gray-900 mt-4">Teja</p>
          <p className="text-gray-600">Bengaluru, India</p>
          <div className="absolute inset-0 bg-white-200 opacity-50 rounded-lg transform translate-y-4"></div>
          <div className="absolute inset-0 p-6 flex items-center justify-center cursor-pointer">
            <p onClick={handleCardClick} className="text-white font-bold text-lg">Change Card</p>
          </div>

        
        </div>

        
      </div>

      <div>

      </div>
         

      
    </div>

     <div className='flex flex-row justify-between items-center'>
     <img src={Axon} width={100} height={70} alt="/" />
     <img src={Jetstar} width={100} height={70} alt="/" />
     <img src={Expedia} width={250} height={200} alt="/" />
     <img src={Qantas} width={100} height={70} alt="/" />
     <img src={Alitalia} width={100} height={70} alt="/" />
     

   </div>

   </div>
  );
};

export default Testimonials;
