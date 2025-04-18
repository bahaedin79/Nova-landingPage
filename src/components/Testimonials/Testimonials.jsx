import React from 'react';
import { HiMiniStar } from 'react-icons/hi2';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center my-25">
      <h2 className="section__subtitle">Testimonial</h2>
      <h3 className="section__title">What they are saying about us</h3>
      <Swiper
        effect={'slide'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        style={{
          width: '100%', // Ensure Swiper takes full width
          overflow: 'hidden', // Prevent overflow issues
        }}
      >
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-1.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-3.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-2.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-5.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-5.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-5.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-5.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-5.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-5.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[350px]">
          <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-value-card my-12 mx-5 p-5 rounded-md">
            <div className="flex">
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star active" />
              <HiMiniStar className="testimonials__star" />
              <HiMiniStar className="testimonials__star" />
            </div>
            <p>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum
              anim magna sunt elit fore quem dolore labore illum veniam.
            </p>
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
              <img className="w-full" src="./images/testimonials/testimonials-5.jpg" alt="testimonials user Avatar" />
            </div>
            <div>
              <h3 className="font-nunito text-lg font-bold text-heading">Saul Goodman</h3>
              <h4 className="text-sm font-nunito text-gray-400 mt-1">Ceo & Founder</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
