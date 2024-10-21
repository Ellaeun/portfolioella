import React from 'react'
import ellaeun from '../assets/ellaeun/ellaeun.png'
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
    return (
          <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
          <div className='col-span-1 my-auto mx-auto w-[200px] h-auto 1g:w-[200px]'>
          <img className='rounded-lg md:ml-4' src={ellaeun} alt="Ella Eun" style={{ backdropFilterwidth: '45%', height: 'auto' }} />
          </div>
          <div>
          <div className='col-span-1 px-5'>
          <h1 className="text-white text-4x1 sm:text-5x1 1g:text-8x1 font-extrabold">
          <span className="font-serif primary-color"><br/>I'm a</span><br/>
          <TypeAnimation 
          className=" text-pink-700 sm:text-3xl lg:text-4xl font-sans"
          sequence={[
          "Student",
          1500, 
          "Aspiring",
          1500,
          "Front-End Dev",
          1500, 
          "Back-End Dev",
          1500,
          ]}
          wrapper="span"
          speed={150} 
          repeat={Infinity}/></h1>
          <p className= "bg-black text-white sm: text 1g my-x1 text-x1 font-serif font-semibold "><br/>
          Hi my name is Louela Eyon studied at Cavite State University Bacoor Campus</p>
          <div className="my-6">
          <a href="https://drive.google.com/drive/home" target="_blank"  rel="noopener noreferrer" 
          className="px-4 py-2 w-full rounded-xl mr-4 bg-gradient-to-r from-orange-500 to-pink-500 text-black font-bold transition-transform transform hover:scale-105 hover:border-none"> Download CV</a>
          <div className="my-6 contact-section">
          <a href="tel:+9277763375" className="px-4 py-2 rounded-xl mr-4 bg-gradient-to-r from-orange-500 to-pink-500 text-black transition-transform transform hover:scale-105 font-bold">Contact Me</a>
          </div>
          
          </div>
          </div>
          </div>
          </div>
          </div>

  )
  };  

export default Hero