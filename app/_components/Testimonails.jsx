import React from 'react'
import avatar1 from '../../public/images/avatar1.png';
import avatar2 from '../../public/images/avatar2.png';
import avatar3 from '../../public/images/avatar3.jpg';
import avatar4 from '../../public/images/avatar4.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';


const Testimonails = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay :true,
        autoplaySpeed : 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='testimonails container'>
      <h2 className='text-4xl font-bold text-center dark:text-gray-100'>The Client <span className='text-red-600'>Say</span></h2>
      <Slider {...settings}  className="testimonails-content w-[100%] md:w-[70%] mx-auto mt-[70px]">
       <div className="testimonail w-[100%] bg-rose-600 dark:bg-slate-700 text-gray-100 p-7 text-center">
         <Image src={avatar1} className='w-[80px] h-[80px] object-contain mx-auto mb-4 block' alt="" />
         <p className='md:w-[70%] mx-auto '>
         One of the best programmers I have dealt with. He has a lot of experience in this field. He works on the project very efficiently and delivers the project in a short period of time.
         </p>
         <div className='flex justify-center gap-3 my-4'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
         </div>
         <h2 className='text-3xl font-bold text-rose-400'>Ahmed Samy</h2>
         <h3 className='mt-5 text-2xl font-bold text-gray-300'>Network Engineer</h3>
       </div>
       <div className="testimonail w-[100%] bg-rose-600 dark:bg-slate-700 text-gray-100 p-7 text-center">
         <Image src={avatar2} className='w-[80px] h-[80px] object-contain mx-auto mb-4 block' alt="" />
         <p className='md:w-[70%] mx-auto '>
         One of the best programmers I have dealt with. He has a lot of experience in this field. He works on the project very efficiently and delivers the project in a short period of time.
         </p>
         <div className='flex justify-center gap-3 my-4'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
         </div>
         <h2 className='text-3xl font-bold text-rose-400'>Mohamed Nader</h2>
         <h3 className='mt-5 text-2xl font-bold text-gray-300'>Frontend Developer</h3>
       </div>
       <div className="testimonail w-[100%] bg-rose-600 dark:bg-slate-700 text-gray-100 p-7 text-center">
         <Image src={avatar3} className='w-[80px] h-[80px] object-contain mx-auto mb-4 block' alt="" />
         <p className='md:w-[70%] mx-auto '>
         One of the best programmers I have dealt with. He has a lot of experience in this field. He works on the project very efficiently and delivers the project in a short period of time.
         </p>
         <div className='flex justify-center gap-3 my-4'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
         </div>
         <h2 className='text-3xl font-bold text-rose-400'>Nada Saad</h2>
         <h3 className='mt-5 text-2xl font-bold text-gray-300'>Graphic Designer</h3>
       </div>
       <div className="testimonail w-[100%] bg-rose-600 dark:bg-slate-700 text-gray-100 p-7 text-center">
         <Image src={avatar4} className='w-[80px] h-[80px] object-contain mx-auto mb-4 block' alt="" />
         <p className='md:w-[70%] mx-auto '>
         One of the best programmers I have dealt with. He has a lot of experience in this field. He works on the project very efficiently and delivers the project in a short period of time.
         </p>
         <div className='flex justify-center gap-3 my-4'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
         </div>
         <h2 className='text-3xl font-bold text-rose-400'>Salma Ahmed</h2>
         <h3 className='mt-5 text-2xl font-bold text-gray-300'>Kids Doctor</h3>
       </div>
      </Slider >
    </div>
  )
}

export default Testimonails
