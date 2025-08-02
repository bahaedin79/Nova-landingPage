import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import { useFetch } from '../../hooks/useFetch';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Testimonials() {
  const { data: testimonials, loading: isPending, error } = useFetch('/testimonials.json');
  return (
    <section className="flex flex-col items-center justify-center gap-8 text-center my-25">
      <h2 className="section__subtitle">Testimonial</h2>
      <h3 className="section__title">What they are saying about us</h3>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
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
          width: '100%',
          overflow: 'hidden',
        }}>
        {testimonials &&
          testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id} className="max-w-[350px]">
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
