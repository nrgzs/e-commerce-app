import hero1 from './../../public/hero1.jpg';
import hero2 from '../../public/hero2.jpg';
import hero3 from '../../public/hero2.jpg';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function Hero() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="hero hero-1 text-gray-200 text-center font-bold text-3xl ">
          HERO SECTION 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero-2 text-gray-200 text-center font-bold text-3xl ">
          HERO SECTION 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero-2 text-gray-200 text-center font-bold text-3xl">
          HERO SECTION 3
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
