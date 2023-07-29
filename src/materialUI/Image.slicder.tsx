import React, { useRef, useState } from "react";
import Script from "next/script";
import Head from "next/head"
// Import Swiper React components
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import slid1 from '../../public/slide2.svg'
import slid2 from '../../public/slide21.svg'
import slide3 from '../../public/slid31.svg'
import css from '../styles/imageslider.module.css'


import Image from "next/image";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function Imageslider() {
 
  return (
    <>
  
   
   
      <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='myswiper'
      >
        <SwiperSlide >
            <div  className={css.slide_rap}><Image className={css.img} src={slid1} alt="slid" /> 
            <h1>Automate your hotel</h1>
            <h2>Control and maximise your revenues and bookings like never before.</h2></div>
        </SwiperSlide>
        <SwiperSlide>
            <div  className={css.slide_rap}>
                <Image className={css.img} src={slid2} alt="slid" /> 
            <h1>all bookings at fingertip</h1>
            <h2>Get all your walk in and online bookings at one place.</h2>
            </div>
    

        </SwiperSlide>
        <SwiperSlide>
        <div  className={css.slide_rap}>
                <Image  className={css.img} src={slide3} alt="slid" /> 
            <h1>AUTO OPTIMIZE ROOM STATUS</h1>
            <h2>Once your rooms get booked any where or checked out it optimizes every where</h2>
            </div>

        </SwiperSlide>
       
      </Swiper>
   
    </>
  );
}
