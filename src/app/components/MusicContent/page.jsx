"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Pagination } from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import { musicDetails } from '../../details.js'
import MUSIC_CSS from './music.module.css'

const Page = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);

  return (
    <div className="lg:h-screen  flex flex-col justify-center items-center w-full px-10">
      <h1 id="music" data-aos="fade-up" className="font-bold lg:text-[3rem] md:text-[2.5rem] text-[2rem] text-gray-600 tracking-widest" style={{ fontFamily: 'Birds of Paradise' }}>Discography</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
      >
        {musicDetails.map((data) => (
          <SwiperSlide key={data.id} className={` ${MUSIC_CSS['swiper-slide']} rdm:h-full  relative group cursor-pointer  flex`}>
            <Image 
              src={data.musicImg} 
              className={`${MUSIC_CSS.image} object-cover cursor-pointer transition-transform duration-300  h-full w-full`} 
              alt={data.musicName}
            />
            <div className="absolute inset-0  bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
              <a href={data.musicLink} target="_blank" className="text-black text-lg cursor-pointer px-3 py-2 rounded-full bg-white">{data.musicName}</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Page;
