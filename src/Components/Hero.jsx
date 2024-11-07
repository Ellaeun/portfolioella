import React, { useState, useEffect } from 'react';
import ellaeun from '../assets/ellaeun/ellaeun.png';
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  // State to check if it's a mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Check if it's a mobile device on mount
  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < 768); // You can change this breakpoint to your preference
    };

    // Add event listener for window resize
    window.addEventListener('resize', checkDeviceType);

    // Check device type on mount
    checkDeviceType();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="max-w-7xl w-full px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image */}
        <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto rounded-lg">
          <img
            className="rounded-lg shadow-xl"
            src={ellaeun}
            alt="Ella Eun"
            style={{ backdropFilter: 'blur(5px)', height: 'auto' }}
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="font-serif text-gradient"><br />I'm a</span><br />
            <TypeAnimation
              className="text-pink-700 sm:text-3xl lg:text-4xl font-sans"
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
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl mt-4 sm:mt-6 font-serif">
            Hi, my name is Louela Eyon and I studied at Cavite State University, Bacoor Campus.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://docs.google.com/document/d/1EZDi-HMxtFvMyBtQ_pBPNOfMsH8cZ77RNr5385iNXU0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-black font-bold transition-transform transform hover:scale-105 hover:border-none"
            >
              Download CV
            </a>

            {/* "Contact Me" Button */}
            {isMobile ? (
              <a
                href="tel:+9277763375" // For mobile, open the phone dialer
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-black font-bold transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
            ) : (
              <a
                href="#contact" // For desktop, scroll to the contact form section
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-black font-bold transition-transform transform hover:scale-105"
              >
                Contact Me
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
