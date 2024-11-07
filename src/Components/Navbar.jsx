import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-pink-400 h-[120px] w-full mx-auto max-w-none flex justify-between items-center px-8">
      {/* Logo */}
      <span 
        className='bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600 text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold leading-none'
        style={{ fontFamily: 'Dancing Script, cursive' }}
      >
        Louela E.
      </span>

      {/* Desktop Navbar Links */}
      <ul className='hidden md:flex space-x-8'>
        <li>
          <a className='text-white text-xl font-serif hover:text-pink-600' href='#about'>About</a>
        </li>
        <li>
          <a className='text-white text-xl font-serif hover:text-pink-600' href='#skills'>Skills</a>
        </li>
        <li>
          <a className='text-white text-xl font-serif hover:text-pink-600' href='#contact'>Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navbar Links */}
      <div className={nav ? 'z-10 fixed top-0 left-0 w-[60%] h-full bg-black ease-in-out duration-500' : 'fixed left-[100%]'}>
        <ul className='flex flex-col p-3 text-xl'>
          <li className='mb-6'>
            <a className='text-white text-xl font-serif font-bold hover:text-pink-600' href='#home' onClick={handleNav}>Home</a>
          </li>
          <li className='mb-6'>
            <a className='text-white text-xl font-serif font-bold hover:text-pink-600' href='#about' onClick={handleNav}>About</a>
          </li>
          <li className='mb-6'>
            <a className='text-white text-xl font-serif font-bold hover:text-pink-600' href='#skills' onClick={handleNav}>Skills</a>
          </li>
          <li className='mb-6'>
            <a className='text-white text-xl font-serif font-bold hover:text-pink-600' href='#contact' onClick={handleNav}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600"
      >
        ↑
      </button>
    </div>
  );
};

export default Navbar;
