import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef(null); 

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
  
    if (!name) {
      Swal.fire({
        title: "Error!",
        text: "Please enter your name.",
        icon: "error"
      });
      return;
    }
  
    const emailPattern = /\S+@\S+\.\S+/;
    const commonDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
    const emailDomain = email.split('@')[1];
  
    if (!email || !emailPattern.test(email) || !commonDomains.includes(emailDomain)) {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid email address. Common mistakes: check for typos like 'gamil' instead of 'gmail'.",
        icon: "error"
      });
      return;
    }
  
    if (!message) {
      Swal.fire({
        title: "Error!",
        text: "Please enter your message.",
        icon: "error"
      });
      return;
    }
  
    formData.append("access_key", "8e205f16-c86c-4f7c-b514-c7db3c180cb0");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
  
        formRef.current.reset();
      } else {
        console.error("Submission failed", data);
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };  

  return (
    <div className='h-screen w-full bg-black sm:py-20 p-5' id="Contact">
      <div className='text-center'>
        <h2 className='text-5xl sm:text-6xl md:text-7xl font-bold leading-tight primary-color'>
          Contact Me
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form ref={formRef} onSubmit={onSubmit}>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4'>
                <div className='sm:pr-2'>
                  <div className='mt-2.5'>
                    <input 
                      type='text' 
                      name="name" 
                      placeholder='Your Name'
                      className="bg-[#161616] w-full px-4 py-4 text-white placeholder-white border border-white rounded-md focus:outline-none focus:border-pink-600 text-lg sm:text-xl"  
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className='sm:pl-2'>
                  <div className='mt-2.5'>
                    <input 
                      type='text' 
                      name="email" 
                      placeholder='Your Email'
                      className="bg-[#161616] w-full px-4 py-4 text-white placeholder-white border border-white rounded-md focus:outline-none focus:border-pink-600 text-lg sm:text-xl"  
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    className="bg-[#161616] w-full px-4 py-4 text-white placeholder-white border border-pink-600 rounded-md focus:border-pink-600 text-lg sm:text-xl" 
                    rows="4" 
                    autoComplete="off"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button 
                    type='submit' 
                    className="text-xl w-full p-4 mt-2 font-extrabold text-white bg-primary-color transition-transform transform hover:scale-105 rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
