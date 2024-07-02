import React from 'react'
import { FaBootstrap, FaGithub, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <div className='skills-content container p-5'>
      <h1 className='text-4xl text-center font-bold dark:text-gray-100'>My <span className='text-rose-600'>Skills</span></h1>
      <div className="skills-content mt-[100px]  gap-3 flex flex-col items-center md:flex-row">
        <div className="skills-one dark:text-gray-100 text-center md:text-left  ">
            <h2 className='my-4 text-4xl font-bold'>Let's Explore Popular <span className='text-rose-600'>Skills</span> & <span className='block mt-2'>Experience</span></h2>
            <p className='md:w-[70%] my-8 text-xl'>
            Frontend Developer I have a lot of experience and competence in this field because of the large number of projects that I have created in this field.
            </p>
            <a href="#" className='block my-4'>
         <button class="bg-rose-600 text-gray-100 hover:bg-rose-700 font-bold py-2 px-4 rounded inline-flex items-center transition duration-300">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <a>Download My Cv</a>
        </button>
          </a>
        </div>
        <div className="skills-two flex  flex-wrap justify-center gap-3 items-center w-[100%]">
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer transition duration-300 dark:bg-slate-800 dark:hover:bg-rose-600">
              <FaHtml5 className='mx-auto'/>
              <p className='mt-3'>HTML5</p>
           </div>
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer transition duration-300 dark:bg-slate-800 dark:hover:bg-rose-600">
              <FaCss3Alt  className='mx-auto'/>
              <p className='mt-3'>CSS3</p>
           </div>
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer transition duration-300 dark:bg-slate-800 dark:hover:bg-rose-600">
              <SiTailwindcss  className='mx-auto'/>
              <p className='mt-3'>Tailwind</p>
           </div>
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer dark:bg-slate-800 dark:hover:bg-rose-600">
              <FaBootstrap className='mx-auto'/>
              <p className='mt-3'>Bootstrap</p>
           </div>
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer dark:bg-slate-800 dark:hover:bg-rose-600">
              <IoLogoJavascript  className='mx-auto'/>
              <p className='mt-3'>javaScript</p>
           </div>
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer dark:bg-slate-800 dark:hover:bg-rose-600">
              <FaReact  className='mx-auto'/>
              <p className='mt-3'>React</p>
           </div>
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer dark:bg-slate-800 dark:hover:bg-rose-600">
              <SiRedux  className='mx-auto'/>
              <p className='mt-3'>Redux</p>
           </div>
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer dark:bg-slate-800 dark:hover:bg-rose-600">
              <SiNextdotjs className='mx-auto'/>
              <p className='mt-3'>Next</p>
           </div>
           <div className="mySkill w-[100%] bg-rose-600 p-10 md:w-[30%] text-center h-max text-xl text-gray-100 rounded-md cursor-pointer dark:bg-slate-800 dark:hover:bg-rose-600">
              <FaGithub className='mx-auto'/>
              <p className='mt-3'>Github</p>
           </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills
