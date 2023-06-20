import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='https://pk.khaadi.com/media/wysiwyg/khaadi/01-01-2ndscroll/2nd-scroll-2-0602.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://pk.khaadi.com/media/wysiwyg/khaadi/01-01-2ndscroll/Under-2500-thumbnail-0613.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://pk.khaadi.com/media/wysiwyg/khaadi/01-01-2ndscroll/2nd-scroll-0530.jpg'/></SwiperSlide>
      
    </Swiper>
  )
}

export default Slider
