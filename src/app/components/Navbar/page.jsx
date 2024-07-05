"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../assets/bini_logo.webp'
import { FaBarsStaggered } from "react-icons/fa6";  
import { FaTimes } from "react-icons/fa";
const page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollProfile = () => {
    const element = document.getElementById("profile");
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };
  const scrollMusic = () => {
    const element = document.getElementById("music");
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  const toggleSideNav = () => {
    setIsVisible((prev) => !prev)
  }
  return (
    <nav className='fixed z-50 w-full shadow-xl h-20 bg-[#F2A0B9] flex justify-evenly items-center'>
    <div className='flex w-full justify-start mx-20'>
      <Image className='hover:scale-105 duration-500 ease-linear cursor-pointer' src={logo} alt="logo" />
    </div>
    <div className='relative'>
      <ul className='flex justify-evenly items-center text-white gap-2 w-full px-5 rdm:hidden lg:flex'>
        <li onClick={scrollProfile} className='pr-2 hover:scale-125 duration-500 cursor-pointer ease-linear'>Profile</li>
        <li onClick={scrollMusic} className='pr-2 hover:scale-125 duration-500 cursor-pointer ease-linear'>Music</li>
        <li className='pr-2 hover:scale-125 duration-500 cursor-pointer ease-linear'>Videos</li>
        <li className='pr-2 hover:scale-125 duration-500 cursor-pointer ease-linear'>Gallery</li>
        <li className='pr-2 hover:scale-125 duration-500 cursor-pointer ease-linear'>Shop</li>
        <li className='pr-2 hover:scale-125 duration-500 cursor-pointer ease-linear'>Events</li>
        <li className='pr-2 hover:scale-125 duration-500 cursor-pointer ease-linear'>Subscribe</li>
        <li className='pr-2'>
          <button className='px-2 py-2 text-sm hover:bg-gray-50/35 text-white hover:scale-105 duration-500 cursor-pointer bg-transparent border border-white rounded-full text-nowrap'>
            Exclusive Membership
          </button>
        </li>
      </ul>

      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSideNav}></div>
      )}

      <div className={`fixed h-[100vh] z-50 bg-[#F2A0B9] lg:hidden rdm:block top-[-1rem] ${isVisible ? "translate-x-0 right-0" : 'translate-x-full right-0'} transform duration-500 shadow-2xl p-5`}>
        <div className='relative w-full mb-11'>
          <FaTimes onClick={toggleSideNav} className='absolute right-0 top-4 cursor-pointer text-white' />
        </div>
        <ul className='w-full text-center gap-5 text-white'>
          <li onClick={scrollProfile} className='pr-2 cursor-pointer ease-linear mb-5'>Profile</li>
          <li className='pr-2 cursor-pointer ease-linear mb-5'>Music</li>
          <li className='pr-2 cursor-pointer ease-linear mb-5'>Videos</li>
          <li className='pr-2 cursor-pointer ease-linear mb-5'>Gallery</li>
          <li className='pr-2 cursor-pointer ease-linear mb-5'>Shop</li>
          <li className='pr-2 cursor-pointer ease-linear mb-5'>Events</li>
          <li className='pr-2 cursor-pointer ease-linear mt-3'>Subscribe</li>
          <li className='pr-2'>
            <button className='px-2 py-2 text-sm hover:bg-gray-50/35 text-white cursor-pointer bg-transparent border border-white rounded-full text-nowrap'>
              Exclusive Membership
            </button>
          </li>
        </ul>
      </div>
    </div>
    <ul className='flex justify-end items-center text-white w-full mx-11 lg:hidden rdm:flex'>
      <li onClick={toggleSideNav} className='pr-2 hover:scale-125 duration-500 cursor-pointer ease-linear'>
        <FaBarsStaggered className='text-2xl' />
      </li>
    </ul>
  </nav>
  )
}

export default page