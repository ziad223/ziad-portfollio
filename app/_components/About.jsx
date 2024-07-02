import React from 'react'
import { FaCheck } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
  AOS.init({
    offset: 200,
    duration: 2000,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className='container p-5' id='about'>
      <h1 className='text-4xl text-center font-bold dark:text-gray-100'>About <span className='text-rose-600'>us</span></h1>
      <div className="about-content mt-[100px] dark:text-gray-100 flex items-center justify-between">
        <div className="about-left w-[50%]" data-aos = 'fade-right'>
            <h4 className='text-2xl font-bold '>About Us</h4>
            <h2 className='my-5 text-4xl font-bold'>Professional <span className='text-rose-600'>Website</span> For <span className='block mt-2'>Your bussnis</span></h2>
            <p className='w-[90%] mx-auto md:m-0'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem cum vel, ex voluptate laborum nulla dicta non consequuntur recusandae? Aperiam et nemo consequatur doloremque id ad voluptate nobis ipsum.
            </p>
            <div className='skills  mt-8'>
        <div className="skills-left flex justify-between">
      <div className="skills-div flex flex-col gap-4">
        <div className='flex gap-3 item-center'>
        <FaCheck className='mt-1 text-rose-600'/><span className='font-bold'>HTML</span>
        </div>
        <div className='flex gap-3 item-center'>
        <FaCheck className='mt-1 text-rose-600'/><span className='font-bold'>CSS</span>
        </div>
        <div className='flex gap-3 item-center'>
        <FaCheck className='mt-1 text-rose-600'/><span className='font-bold'>Tailwind css</span>
        </div>
        <div className='flex gap-3 item-center'>
        <FaCheck className='mt-1 text-rose-600'/><span className='font-bold'>javaScript</span>
        </div>
        
      </div>
      <div className="skills-div flex flex-col gap-4">
        <div className='flex gap-3 item-center'>
        <FaCheck className='mt-1 text-rose-600'/><span className='font-bold'>jQyery</span>
        </div>
        <div className='flex gap-3 item-center'>
        <FaCheck className='mt-1 text-rose-600'/><span className='font-bold'>React js</span>
        </div>
        <div className='flex gap-3 item-center'>
        <FaCheck className='mt-1 text-rose-600'/><span className='font-bold'>Redux Toolkit</span>
        </div>
        <div className='flex gap-3 item-center'>
        <FaCheck className='mt-1 text-rose-600'/><span className='font-bold'>Next js</span>
        </div>
        </div>
       <div>      
            </div>
        </div>
         </div>
        </div>
        <div className="about-right" data-aos = 'fade-left'>
            <div className="box flex flex-wrap gap-5">
                <div className='w-[45%] px-3 text-center text-gray-100 font-bold py-5 bg-rose-600'>
                    <h2 className='text-2xl'>2</h2>
                    <h4 className='mt-2'>Years Experience</h4>
                </div>
                <div className='w-[45%] px-3 text-center text-gray-100 font-bold py-5 bg-rose-600'>
                    <h2 className='text-2xl'>+300</h2>
                    <h4 className='mt-2'>Project Done</h4>
                </div>
                <div className='w-[45%] px-3 text-center text-gray-100 font-bold py-5 bg-rose-600'>
                    <h2 className='text-2xl'>+200</h2>
                    <h4 className='mt-2'>Happy Client</h4>
                </div>
                <div className='w-[45%] px-3 text-center text-gray-100 font-bold py-5 bg-rose-600'>
                    <h2 className='text-2xl'>+3</h2>
                    <h4 className='mt-2'>Award Win</h4>
                </div>
            </div>
         
        </div>
      </div>
    </div>
  )
}

export default About
