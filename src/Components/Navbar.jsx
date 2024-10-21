import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  } 
  return(
    <div className='bg-black text-pink-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='from-orange-400 to-pink-600 text-4xl font-serif font-extrabold'>Louela E.</h1>
    <ul className='hidden md:flex'>
    <li className='p-3'><a className='text-white text-xl font-serif font-bold' href='#about'>About</a></li>
    <li className='p-3'><a className='text-white text-xl font-serif font-bold' href='#skills'>Skills</a></li>
    <li className='p-3'><a className='text-white text-xl font-serif font-bold' href='#contact'>Contact</a></li>
    </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] border-r border-r-black bg-black ease-in-out duration-500' : 'fixed left-[100%]'}>
 <h1 className='text-3xl font-serif primary-color m-4'>Louela E.</h1>
 <ul className='p-3 text-xl'>
 <li className='p-3'><a className='text-white text-xl font-serif font-bold' href='#home' onClick={handleNav}>Home</a></li>
 <li className='p-3'><a className='text-white text-xl font-serif font-bold' href='#about' onClick={handleNav}>About</a></li>
 <li className='p-3'><a className='text-white text-xl font-serif font-bold' href='#skills' onClick={handleNav}>Skills</a></li>
 <li className='p-3'><a className='text-white text-xl font-serif font-bold' href='#contact' onClick={handleNav}>Contact</a></li>
 </ul>
 </div>
 </div>
  );
};

export default Navbar