import React from 'react'
import dashboard from '../../public/images/Dashboard.png';
import bookStore from '../../public/images/Book Online Store.png';
import gym from '../../public/images/gym.png';
import booking from '../../public/images/bokking.png';
import socialApp from '../../public/images/Social App.png';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className='porojects container' id='portfolio'>
      <h1 className='text-3xl font-bold text-center dark:text-gray-100'>My Lastest <span className='text-rose-600'>Projects</span></h1>
      <div className="projects-content flex flex-col flex-wrap md:flex-row gap-3 justify-center mt-14 ">
        <div className="project  p-6 shadow-lg text-center dark:bg-slate-800 rounded-md dark:text-gray-100 w-[90%] mx-auto md:w-[30%]">
            <a href="https://ziad-dashboard.vercel.app/" target='_blank'>
            <Image src={dashboard} alt="" className='w-full block mb-4 rounded-md' />
            </a>
            <h2 className='my-3 text-xl font-bold text-rose-600'>Dashboard App</h2>
            <h3 className='font-bold'>HTML - CSS - React js</h3>
        </div>
        <div className="project  p-6 shadow-lg text-center dark:bg-slate-800 rounded-md dark:text-gray-100 w-[90%] mx-auto md:w-[30%]">
            <a href="https://ziad-online-book-store.vercel.app/" target='_blank'>
            <Image src={bookStore} alt="" className='w-full block mb-4 rounded-md' />
            </a>
            <h2 className='my-3 text-xl font-bold text-rose-600'>Book Online Store</h2>
            <h3 className='font-bold'>HTML - CSS - React js</h3>
        </div>
        <div className="project  p-6 shadow-lg text-center dark:bg-slate-800 rounded-md dark:text-gray-100 w-[90%] mx-auto md:w-[30%]">
            <a href="https://gym-project-delta.vercel.app/" target='_blank'>
            <Image src={gym} alt="" className='w-full block mb-4 rounded-md' />
            </a>
            <h2 className='my-3 text-xl font-bold text-rose-600'>Gym App</h2>
            <h3 className='font-bold'>HTML - CSS - React js</h3>
        </div>

        <div className="project  p-6 shadow-lg text-center dark:bg-slate-800 rounded-md dark:text-gray-100 w-[90%] mx-auto md:w-[30%]">
            <a href="https://booking-app-teal-ten.vercel.app/" target='_blank'>
            <Image src={booking} alt="" className='w-full block mb-4 rounded-md' />
            </a>
            <h2 className='my-3 text-xl font-bold text-rose-600'>Booking App</h2>
            <h3 className='font-bold'>HTML - CSS - React js</h3>
        </div>

        <div className="project  p-6 shadow-lg text-center dark:bg-slate-800 rounded-md dark:text-gray-100 w-[90%] mx-auto md:w-[30%]">
            <a href="https://ziad-social-app.vercel.app/" target='_blank'>
            <Image src={socialApp} alt="" className='w-full block mb-4 rounded-md' />
            </a>
            <h2 className='my-3 text-xl font-bold text-rose-600'>Social App</h2>
            <h3 className='font-bold'>HTML - CSS - React js</h3>
        </div>

        <div className="project  p-6 shadow-lg text-center dark:bg-slate-800 rounded-md dark:text-gray-100 w-[90%] mx-auto md:w-[30%]">
            <a href="#" target='_blank'>
            <Image src={bookStore} alt="" className='w-full block mb-4 rounded-md' />
            </a>
            <h2 className='my-3 text-xl font-bold text-rose-600'>Book Store</h2>
            <h3 className='font-bold'>HTML - CSS - React js</h3>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio
