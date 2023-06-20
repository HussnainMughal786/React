import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function Carousol() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.kfcpakistan.com/images/892f12f0-fb81-11ed-9cfc-13924e99eefd-DUO-Box-1920x420_desktop_image-2023-05-26045528.jpg " width={1370} height={400} alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.kfcpakistan.com/images/88d05120-fb81-11ed-919a-ef9f5e8ff903-Equity-Banner-1920x420_desktop_image-2023-05-26045528.jpg"width={1370} height={400} alt="" /></SwiperSlide>
    
        
      </Swiper>
    </>
  )
}

export default Carousol