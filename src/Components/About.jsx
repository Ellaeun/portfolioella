import React from 'react';
import ellaeun1 from '../assets/ellaeun1/ella1.jpg';
import Facebook from '../assets/Facebook/fb.jpg';
import Insta from '../assets/Insta/Insta.jpg';

const About = () => {
  return (
    <div className='grid grid-cols-1 h-screen w-full max-w-none mx-auto text-white bg-black' id="About">
      {/* About Section */}
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between p-6'>
        {/* Text Section */}
        <div className='text-left my-6 md:my-0 md:w-1/2'>
          <h2 className='text-4xl font-serif font-bold mb-4 primary-color'>About Me</h2>
          <p className='text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed'>
            Hi there! I'm Louela Rosello Eyon, a third-year student aspiring to be a versatile web developer.
            I'm currently honing my skills in front-end technologies like HTML, CSS, JavaScript, and React, 
            while also diving into back-end development with Node.js and MySQL.
            Additionally, I'm exploring Java Swing for desktop applications.
            I love tackling projects that allow me to blend creativity with technical problem-solving, 
            and I'm excited to expand my expertise in both front-end and back-end development.
          </p>
        </div>

        {/* Profile Image */}
        <div className='my-6 md:my-0 md:w-1/2'>
          <img 
            className='rounded-lg shadow-lg w-60 sm:w-72 md:w-96 lg:w-[500px] xl:w-[500px] h-auto' 
            src={ellaeun1} 
            alt='Profile' 
          />
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="flex justify-center space-x-10 my-8">
        <a href="https://facebook.com/ellaeun1211/" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="transition-transform transform hover:scale-110">
          <img src={Facebook} alt="Facebook" 
               className="w-16 h-16 md:w-20 md:h-20 border-4 border-white rounded-full bg-transparent hover:bg-pink-500 transition-all duration-300" />
        </a>

        <a href="https://www.instagram.com/louelaeyon/" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="transition-transform transform hover:scale-110">
          <img src={Insta} alt="Instagram" 
               className="w-16 h-16 md:w-20 md:h-20 border-4 border-white rounded-full bg-transparent hover:bg-pink-500 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
};

export default About;
