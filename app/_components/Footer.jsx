import React from 'react'

const Footer = () => {
  return (
   



<footer class=" bg-rose-600 dark:bg-slate-700 text-gray-100">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ziad <span className='text-rose-600'>Portfolio</span></span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#about" class=" me-4 md:me-6 text-[18px] font-bold hover:text-gray-400 dark:hover:text-rose-600 transition duration-300">About</a>
                </li>
                <li>
                    <a href="#services" class=" me-4 md:me-6 text-[18px] font-bold hover:text-gray-400 dark:hover:text-rose-600 transition duration-300">Services</a>
                </li>
                <li>
                    <a href="#portfolio" class=" me-4 md:me-6 text-[18px] font-bold hover:text-gray-400 dark:hover:text-rose-600 transition duration-300">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" class=" text-[18px] font-bold hover:text-gray-400 dark:hover:text-rose-600 transition duration-300">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm font-bold text-gray-100 sm:text-center dark:text-gray-400 ">© 2024 <a href="https://flowbite.com/" class="hover:underline">Ziad Abdalla</a>. All Rights Reserved.</span>
    </div>
</footer>



  )
}

export default Footer
