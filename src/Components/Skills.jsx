import React from 'react'
import Mysql from '../assets/Mysql/MySQL.jpg'
import HTML from '../assets/HTML/html.jpg'
import JavaScript from '../assets/JavaScript/JavaScript.png'
import CSS from '../assets/CSS/CSS-Logo.png'
import ReactFrameworks from '../assets/ReactFrameworks/React.png'
import Tailwind from '../assets/Tailwind/tailwindcss-logo.png'
import JavaSwing from '../assets/JavaSwing/JavaSwing.png'
const Skills = () => {
  return (
    <div className='border border-pink-700 bg-black md:h-[200px] max-w-[1200px] mx-auto grid grid-cols-1 place-items-center md:flex md:justify-between md:items-center'>
    <h2 className='text-pink-600 text-2xl md:text-2xl font-bold m-8 border border-white bg-white rounded p-3'>
      My <br/> Tech <br/>Stack
    </h2>
    
    <div className='flex flex-wrap justify-center md:justify-start md:flex-row'>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] border border-pink-600 bg-pink-900 rounded p-3'>
        <img src={Mysql} alt="Mysql" width={40} height={40} className='transition-transform transform hover:scale-150'/>
        <p className='text-white text-xl md:text-xl mt-0'>Mysql</p>
      </div>
  
      <div className='flex flex-col items-center m-2 sm:my-0 w-[80px] md:w-[100px] border border-pink-600 bg-pink-900 rounded p-3'>
        <img src={JavaSwing} alt="Java Swing" width={40} height={40}className='transition-transform transform hover:scale-150' />
        <p className='text-white  mt-0'>JavaSwing</p>
      </div>
  
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] border border-pink-600 bg-pink-900 rounded p-3'>
        <img src={HTML} alt="Html" width={40} height={40} className='transition-transform transform hover:scale-150'/>
        <p className='text-white  mt-0'>HTML</p>
      </div>
  
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] border border-pink-600 bg-pink-900 rounded p-3'>
        <img src={JavaScript} alt="Java Script" width={40} height={40}className='transition-transform transform hover:scale-150' />
        <p className='text-white   mt-0'>JavaScript</p>
      </div>
  
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] border border-pink-600 bg-pink-900 rounded p-3'>
        <img src={CSS} alt="CSS" width={40} height={40} className='transition-transform transform hover:scale-150'/>
        <p className='text-white mt-0'>CSS</p>
      </div>
  
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] border border-pink-600 bg-pink-900 rounded p-3'>
        <img src={ReactFrameworks} alt="React Frameworks" width={40} height={40} className='transition-transform transform hover:scale-150'/>
        <p className='text-white  mt-0'>React</p>
      </div>
  
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px] border border-pink-600 bg-pink-900 rounded p-3'>
        <img src={Tailwind} alt="Tailwind" width={40} height={40}className='transition-transform transform hover:scale-150' />
        <p className='text-white mt-0'>Tailwind</p>
        </div>
      </div>
      </div>
  )
}

export default Skills