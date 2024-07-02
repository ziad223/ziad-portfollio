import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { MdMobileFriendly } from "react-icons/md";

const Services = () => {
  return (
    <div className='services' id='services'>
        <h1 className='text-4xl text-center font-bold dark:text-gray-100'>My 
        <span className='text-rose-600'> Services</span>
        </h1>
      <div className="services-content container flex flex-wrap justify-center gap-3">
       <div className="service md:w-[30%] bg-rose-600 text-white p-4 text-center rounded-md dark:bg-slate-700">
        <FaMobileAlt className='mx-auto text-2xl'/>
         <h2 className='my-5 text-2xl text-yellow-400 font-bold'>Responsive Website</h2>
         <p className='text-xl'>
         Responsive website for all screens (mobile - tablet - laptop)
         </p>
       </div>
       <div className="service md:w-[30%] bg-rose-600 text-white p-4 text-center rounded-md dark:bg-slate-700">
        <MdMobileFriendly  className='mx-auto text-2xl'/>
         <h2 className='my-5 text-2xl text-yellow-400 font-bold'>Friendly Seo</h2>
         <p className='text-xl'>
         It makes the site friendly to search engines and speeds up user access to your site
         </p>
       </div>
       <div className="service md:w-[30%] bg-rose-600 text-white p-4 text-center rounded-md dark:bg-slate-700">
        <BsMoonStars className='mx-auto text-2xl'/>
         <h2 className='my-5 text-2xl text-yellow-400 font-bold'>Dark && Light Mode</h2>
         <p className='text-xl'>
         The user can change the website theme (Dark Mode && Light Mode)
         </p>
       </div>
    
       
       
       
      </div>
    </div>
  )
}

export default Services
