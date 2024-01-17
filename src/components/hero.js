

import hero2 from '../../public/newhero.jpg';
import hero3 from '../../public/heroimg3.jpg';

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
     
    >
      <SwiperSlide>
        <div className="hero text-gray-200 text-center font-bold text-3xl ">
          <Image
            alt="img"
            className=" object-cover w-full h-full"
            src={hero2}
          ></Image>
          <p className="absolute   w-72 top-1/3 drop-shadow-md">
            Sed ut perspiciatis unde omnis iste
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero text-gray-200 text-center font-bold text-3xl">
          <Image
            alt="img"
            className=" object-fill w-full h-full"
            src={hero3}
          ></Image>
          <p className="absolute   w-72 top-1/3 drop-shadow-md">
            Et exercitationem perferendis id voluptas
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
