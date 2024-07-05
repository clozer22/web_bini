import React from 'react'
import logo from '../../assets/bini_logo.webp'
import Image from 'next/image'
import { FaFacebook, FaInstagram ,FaTwitter  } from "react-icons/fa";

const page = () => {
  return (
<footer className="bg-[#F2A0B9] rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-center items-center gap-5">
            <ul className="flex flex-wrap justify-center items-center gap-5 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" ><FaFacebook className='text-2xl text-[#163667]' /> </a>
                </li>
                <li>
                    <a href="#" ><FaInstagram className='text-2xl text-[#163667]'  /></a>
                </li>
                <li>
                    <a href="#"><FaTwitter className='text-2xl text-[#163667]'  /></a>
                </li>
               
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">BINI</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default page