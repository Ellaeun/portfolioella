import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id="Contact">
    <div className='"text-center'>
    <h2 className='text-center text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
    <div class="max-w-[800px] mx-auto">
    <div class="mt-6 bg-[#161616] rounded-x1">
    <div class="p-10">
    <form action='https://getform.io/f/bolgxjda' method='POST'>
    <div class="grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
    <div>
    <div class="mt-2.5 relative">
    <input type='text' name="name" id="" placeholder='Your Name' class="bg-[#161616] w-full px-4 py-4 text-white placeholder-white border border-white rounded-md focus:outline-none focus:border-pink-600"/>
    </div>
    </div>
    <div class="mt-2.5 relative">
    <input type='Email' name="Email" id="" placeholder='Your Email' class="bg-[#161616] w-full px-4 py-4 text-white placeholder-white border border-white rounded-md focus:outline-none focus:border-pink-600"/>
    </div>
    <div class="sm:col-span-2">
    <div class="mt-2.5 relative">
    <textarea name="" id="" placeholder="Your Mesage"
    class="bg-[#161616] w-full px-4 py-4 text-white placeholder-white border border-pink-600 rounded-md focus:border-pink-600 " rows="4">
    </textarea>
    </div>
    </div>
    <div class="sm:col-span-2">
    <button type='submit' class="text-x1 w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md">Send

    </button>
    </div>
    </div>
    </form>

    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact