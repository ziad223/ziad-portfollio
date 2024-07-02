import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt, FaYoutube } from 'react-icons/fa'
import {FaLocationCrosshairs} from 'react-icons/fa6';
import Swal from 'sweetalert2'

const Contact = () => {
  function send(){
    Swal.fire({
      title: "Your Message Already Sent Successfully!",
      icon: "success",
      showConfirmButton:false,
      timer : 2000
    });
  }
  return (
    <div className='contact container' id='contact'>
      <div className="contact-content mt-14 flex flex-col md:flex-row">
        <div className="contact-left dark:text-gray-100 text-center md:text-left">
            <h2 className='text-4xl font-bold'>Contact <span className='text-rose-600'>Me!</span></h2>
            <p className='md:w-[70%] my-6 text-[20px] '>
            Frontend Developer I have a lot of experience and competence in this field because of the large number of projects that I have created in this field.
            </p>
             <div className='mx-auto'>
             <div className='flex gap-3 mb-4 items-center font-bold'>
                <FaPhoneAlt className='text-rose-600'/>
                <span className='text-gray-500'>01018227412</span>
            </div>
            <div className='flex gap-3 mb-4 items-center font-bold'>
                <FaEnvelope className='text-rose-600'/>
                <span className='text-gray-500'>ziadabdalla846@gmail.com</span>
            </div>
            <div className='flex gap-3 mb-4 items-center font-bold'>
                <FaLocationCrosshairs className='text-rose-600' />
                <span className='text-gray-500'>Egypt - Sharkia - Zagazig</span>
            </div>
            <div className='flex gap-7 mt-10'>
                <a href="#"><FaFacebook className='bg-rose-600 text-gray-100 w-10 h-10 p-3 rounded-md hover:bg-rose-500 transition duration-300 dark:bg-slate-700 dark:hover:bg-slate-900 '/></a>
                <a href="#"><FaInstagram className='bg-rose-600 text-gray-100 w-10 h-10 p-3 rounded-md hover:bg-rose-500 transition duration-300 dark:bg-slate-700 dark:hover:bg-slate-900 '/></a>
                <a href="#"><FaLinkedin className='bg-rose-600 text-gray-100 w-10 h-10 p-3 rounded-md hover:bg-rose-500 transition duration-300 dark:bg-slate-700 dark:hover:bg-slate-900 '/></a>
                <a href="#"><FaGithub className='bg-rose-600 text-gray-100 w-10 h-10 p-3 rounded-md hover:bg-rose-500 transition duration-300 dark:bg-slate-700 dark:hover:bg-slate-900 '/></a>
            </div>
             </div>
        </div>  
        <div className="contact-right mt-10 md:mt-0">
            <form>
                <input type="text" placeholder='Your Name' className='block w-[300px] md:w-[400px] mb-3 border p-3 border-gray-300 rounded-md dark:bg-slate-700 dark:border-slate-900' />
                <input type="text" placeholder='Your Email Address' className='block w-[300px] md:w-[400px] mb-3 border p-3 border-gray-300 rounded-md dark:bg-slate-700 dark:border-slate-900' />
                <input type="text" placeholder='Your Phone Number' className='block w-[300px] md:w-[400px] mb-3 border p-3 border-gray-300 rounded-md dark:bg-slate-700 dark:border-slate-900' />
                <textarea placeholder='Your Message' className='block w-[300px] md:w-[400px] mb-5 border p-3 border-gray-300 rounded-md h-[200px] dark:bg-slate-700 dark:border-slate-900'></textarea>
            </form>
            <button onClick={send} className='bg-rose-600 text-gray-100 p-3 rounded-md text-xl hover:bg-rose-700 transition duration-300 dark:bg-slate-700'>Send Message</button>
    
        </div>
      </div>
    </div>
  )
}

export default Contact
