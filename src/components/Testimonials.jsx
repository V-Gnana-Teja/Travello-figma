import React from 'react'
import Axon from '../Assets/images/Axon.png'
import Jetstar from '../Assets/images/Jetstar.png'
import Expedia from '../Assets/images/Expedia.png'
import Qantas from "../Assets/images/Qantas.png"
import Alitalia from  '../Assets/images/Alitalia.png'
import Travello from '../Assets/images/Group 590.png'
/* import  Mail  from "../Assets/images/mail-5899 (1).png";
 */

const Testimonials = () => {
  return (
    <div className=' mt-12 flex flex-col md:flex-row p-16'> 
         <div className="flex-1 mr-8">
        <div>
          <h3 className="text-gray-500 text-xl font-semibold"> TESTIMONIALS</h3>
          <h1 className="mt-4 font-volkhov font-bold text-3xl md:text-4xl lg:text-5xl">
            What People Say  <br /> About Us.
          </h1>
        </div>

          <div>
            <h1 className='card'> "on the windows talking painted pasture yet its express parties use. Sure last upon he same sa knew next. Of believed or diverted no."

            Teja

            Bengaluru, India

            
            
            </h1>
          </div>

          <div className='flex flex-row justify-between items-center'>
            <img src={Axon} width={100} height={70} alt="/" />
            <img src={Jetstar} width={100} height={70} alt="/" />
            <img src={Expedia} width={250} height={200} alt="/" />
            <img src={Qantas} width={100} height={70} alt="/" />
            <img src={Alitalia} width={100} height={70} alt="/" />
            

          </div>


          <div>
            <p> Subscribe to get information, latest news and other and also to be able to greet the  interesting  offers about Jadoo </p>

            <input type="text"   placeholder =' Your email'/>
            
            <button className='bg-red-400 w-7 h-3'>Subscribe</button>
          </div>

            <footer>
              <div className='mr-12 mt-12'>
                <img src={Travello} alt="/" />
              </div>
              <ul>
                <li><h1>Company</h1></li>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
              <ul>
                <li><h1>Contact</h1></li>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliates</li>
              </ul>
              <ul>
                <li><h1>More</h1></li>
                <li>Airline fees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
              </ul>

              <p>All rights reserved @jadoo.co</p>
            </footer>
            </div>
    </div>
    
  )
}   

export default Testimonials