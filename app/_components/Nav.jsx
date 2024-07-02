'use client'
import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

const Nav = ({isDark , dark}) => {

  useEffect(() =>{
  document.querySelector(".menu").onclick = function(){
    document.querySelector(".nav-links").classList.toggle("open");
  }
  } , [])

  return (
    <div className='nav sm:sticky md:sticky sticky top-0 w-[100%] z-[5000] bg-slate-300 p-5 dark:bg-slate-700 dark:sticky'>
     <div className=' flex items-center justify-between w-[80%]  mx-auto'>
       <div className="logo text-[25px] font-bold">
       <h2 className='dark:text-gray-100'> Ziad <span className=' text-rose-600'>Portfolio</span></h2>
       </div>
       <ul className='nav-links md:flex items-center gap-8  dark:bg-slate-700'>
        <li><a className='font-bold hover:text-rose-600 transition duration-300 dark:hover:text-rose-600 dark:text-gray-300' href="#home">Home</a></li>
        <li><a className='font-bold hover:text-rose-600 transition duration-300 dark:hover:text-rose-600 dark:text-gray-300' href="#about">About</a></li>
        <li><a className='font-bold hover:text-rose-600 transition duration-300 dark:hover:text-rose-600 dark:text-gray-300' href="#services">Services</a></li>
        <li><a className='font-bold hover:text-rose-600 transition duration-300 dark:hover:text-rose-600 dark:text-gray-300' href="#blog">Blog</a></li>
        <li><a className='font-bold hover:text-rose-600 transition duration-300 dark:hover:text-rose-600 dark:text-gray-300' href="#contact">Contact</a></li>
        <li className='font-bold hover:text-rose-600 transition duration-300 dark:hover:text-rose-600 dark:text-gray-300 cursor-pointer'> 
          {dark ? 
          <MdOutlineWbSunny className='text-xl  dark:text-gray-100' onClick = {isDark}/>
          :
          <LuMoon className='text-xl  dark:text-gray-100' onClick = {isDark}/>
        }
          </li>
       </ul>
      
    <FiMenu className='menu block sm:hidden text-2xl cursor-pointer dark:text-gray-100'/>
  
     </div>
    </div>
  )
}

export default Nav
