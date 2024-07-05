"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./character.css";
import groupPic from "../../assets/bini_group.webp";
import Image from "next/image";
import SpringModal from "../Modal/page";
import CharSpringModal from "../CharacterModal/page";
import {details} from "../../details.js";
import Fade from 'react-reveal/Fade'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCharModalOpen, setCharModalOpen] = useState(false);
  const [selectedChar, setSelectedChar] = useState({});

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleGetInfo = (char) => {
    setCharModalOpen(true);
    setSelectedChar(char);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation in milliseconds
    });
  }, []);

  return (
    <div id="profile" className=" lg:h-screen flex justify-center items-center w-screen flex-col">
      <h1 id="profile" data-aos="fade-up" className="font-bold   lg:text-[3rem] md:text-[2.5rem] text-[2rem] text-gray-600 tracking-widest" style={{fontFamily: 'Birds of Paradise'}}>Profile</h1>

      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper overflow-hidden"
      >
        <SwiperSlide className="swiper-slide">
          <Image
            onClick={handleMouseEnter}
            alt="bini-pic"
            className="border border-gray-500 shadow-lg p-3 hover:scale-110 duration-500 ease-linear"
            src={groupPic}
          />
        </SwiperSlide>
        {details.map((data) => (
          <SwiperSlide  className="bg-cover bg-center w-[300px] h-[300px]" key={data.id}>
            <Image
              onClick={() => handleGetInfo(data)}
              alt="bini-pic"
              className="border  border-gray-500 shadow-lg p-3 hover:scale-110 duration-300 ease-linear"
              src={data.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isModalOpen && (
        <SpringModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
      {isCharModalOpen && (
        <CharSpringModal
          full_name={selectedChar.full_name}
          screenName={selectedChar.screen_name}
          birthday={selectedChar.birthday}
          isOpen={isCharModalOpen}
          setIsOpen={setCharModalOpen}
        />
      )}
    </div>
  );
};

export default Page;
