import hero1 from './../../public/heroimg1.jpg';
import hero2 from '../../public/heroimg2.jpg';
import hero3 from '../../public/heroimg2.jpg';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function Hero() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      effect={'fade'}
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
        <div className="hero hero-1 text-gray-200 text-center font-bold text-3xl relative">
          <p className='absolute   w-72 top-1/3 drop-shadow-md'>Lorem ipsum dolor sit amet</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero-2 text-gray-200 text-center font-bold text-3xl ">
          <p className='absolute   w-72 top-1/3 drop-shadow-md'>Sed ut perspiciatis unde omnis iste</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero-2 text-gray-200 text-center font-bold text-3xl">
          <p className='absolute   w-72 top-1/3 drop-shadow-md'>Et exercitationem perferendis id voluptas</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
