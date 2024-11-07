import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black h-screen w-full sm:h-[150px] p-12 flex justify-between mx-auto'>
      <span style={{ fontFamily: 'Dancing Script, cursive' }} className='text-gray-400 font-extrabold'>Louela E.</span>
      
      <p style={{ fontFamily: 'Dancing Script, cursive' }} className='text-gray-400 font-extrabold'>
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ellaeun.ee@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='hover:underline'>ellaeun.ee@gmail.com</a>
        <br />#WebDev2024
      </p>
    </div>
  );
}

export default Footer;
