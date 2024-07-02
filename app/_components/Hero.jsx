import Image from 'next/image';
import React from 'react'
import img from '../../public/images/about.png';
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Hero = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  }); 
  return (
    <div className='hero  sm:h-max'>
     <div className="flex items-center justify-between w-[80%] pt-[70px] mx-auto">
      <div className="hero-left text-gray-100" data-aos = 'fade-right'>
        <h4 className=' font-bold text-gray-200'>Welcome To My World</h4>
         <h2 className='text-3xl font-bold'>Hi I'm <span className='text-rose-600'>Ziad Abdalla</span></h2>
         <Typewriter
  options={{
    strings: ['React js Developer', 'Next js Developer'],
    autoStart: true,
    loop: true,
    
     }}
     className = 'Typewriter'
   /> 
         <p className='w-[80%] md:m-0 md:w-[70%] mx-auto  text-xl text-gray-300'>
         Frontend Developer I have a lot of experience and competence in this field because of the large number of projects that I have created in this field.
         </p>
         <div className='flex flex-col md:flex-row gap-4 mt-10 '>
         <a href='../../puplic/images/Resume.pdf' download='Resume.pdf'>
         <button class="bg-rose-600 text-gray-100 hover:bg-rose-700 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300">
     <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download My Cv</span>
        </button>
          </a>
          <a href="https://www.linkedin.com/in/ziad-abdalla-0a3144228/" className='a' target='_blank'>
          <button class="bg-blue-700 flex gap-2 justify-center  text-gray-100 hover:bg-blue-800 font-bold py-2 px-4 rounded items-center transition duration-300">
       <FaLinkedin/>
       <span>Visit My Linkedin</span>
       </button>
          </a>

         </div>
      </div>
      <div className="hero-right" data-aos = 'fade-left'>
       <Image src={img} className='w-[500px] hidden md:block'/>
      </div>
     </div>
    </div>
  )
}

export default Hero
