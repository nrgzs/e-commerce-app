import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import pic from '../../public/image.png';
import Card from './productCart';

export default function Bestsellers({ data }) {
  return (
    <div className="flex flex-col justify-center items-center mx-20 my-10 ">
      <h2 className="font-bold text-2xl ">BestSellers</h2>
      <div className="container sm">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={{
            576: {
              spaceBetween: 5,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            1280: {
              spaceBetween: 10,
              slidesPerView: 5,
            },
          }}
          /*  loop={true} */
          navigation
          pagination={{ clickable: true }}
          /* scrollbar={{ draggable: true }} */
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Card
                  img={item.images[0]}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
