import React from 'react'
import Travello from '../Assets/images/Group 590.png'

const Footer = () => {
  return (
    <div>
    <div className='mr-12 mt-12 flex p-5'>
       <img src={Travello} alt="/" />

     </div>


    <div className='flex items-center justify-between mr-13 p-8'> 

    <p className='p-2'>Book your trip in minute, get full <br /> Control for much longer</p>

    <ul>
       <li className='font-bold text-xl '><h>Company</h></li>
       <li>About</li>
       <li>Careers</li>
       <li>Mobile</li>
     </ul>
     <ul>
       <li className='font-bold text-xl '><h1>Contact</h1></li>
       <li>Help/FAQ</li>
       <li>Press</li>
       <li>Affiliates</li>
     </ul>
     <ul>
       <li className='font-bold text-xl '><h1>More</h1></li>
       <li>Airline fees</li>
       <li>Airline</li>
       <li>Low fare tips</li>
     </ul>

    </div>
     <p>All rights reserved @ jadoo.co</p>
    </div>
  )
}

export default Footer