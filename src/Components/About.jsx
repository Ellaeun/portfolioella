import React from 'react';
import ellaeun1 from '../assets/ellaeun1/ella1.jpg';
import Facebook from '../assets/Facebook/facebook-logo-3.png';
import Insta from '../assets/Insta/Instagram-Logo.png';

const About = () => {
  return (
    <div className='grid grid-cols-1 max-w-[1200px] mx-auto py-8 text-white bg-black' id="About">
      <div className='flex flex-col md:flex-row items-center'>
      <div className='text-left my-auto mx-6'>
      <h2 className='text-4xl font-serif font-bold mb-4 primary-color'>About Me</h2>
      <p className='text-base font-serif'>
      Hi there! I'm Louela Rosello Eyon, a third-year student aspiring to be a versatile web developer. I'm currently honing my skills in front-end technologies like HTML, CSS, JavaScript, and React, while also diving into back-end development with Node.js and MySQL. Additionally, I'm exploring Java Swing for desktop applications. I love tackling projects that allow me to blend creativity with technical problem-solving, and I'm excited to expand my expertise in both front-end and back-end development.
      </p>
      </div>
      <img className='rounded-lg md:ml-4' src={ellaeun1} alt='Profile' width={300} height={300} />
      </div>
      <div className="flex justify-center space-x-10 my-8 mt-16">
      <a href="https://facebook.com/ellaeun1211/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="transition-transform transform hover:scale-110">
      <img src={Facebook} alt="Facebook" 
      className="w-20 h-20  border-4 border-white transition-all duration-300 hover:bg-pink-600" /></a>
      <a href="https://www.instagram.com/louelaeyon/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="transition-transform transform hover:scale-110">
      <img src={Insta} 
      alt="Instagram" 
      className="w-20 h-20  border-4 border-white transition-all duration-300 hover:bg-pink-600" /></a>
      </div>
      </div>
);
};

export default About