import React from 'react'
import { Container, Typography } from '@mui/material';
import png from '../assets/pngwing.com (18).png'
import Image from 'next/image';

const Testpage = () => {
  return (
    
     
    <div className="relative bg-cover bg-center h-96">
      
      <Image
        src={png} 
        alt="Background Image"
        layout="fill"
        className=' opacity-40'
      />

      {/* Text overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-green-950 font-poppins">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-poppins">Don't worry about bugs anymore</h1>
          <p className="text-lg mt-4 font-bold font-poppins">We're here to help</p>
        </div>
      </div>
    </div>
      
      
 
    
  )
}

export default Testpage