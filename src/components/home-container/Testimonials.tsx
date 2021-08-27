import { SwiperSlide } from 'swiper/react';

import { testimonialsType } from '../model';
import ReusableSwiper from '../reusable-components/ReusableSwiper';
import Title from '../reusable-components/Title';

import { testimonials } from './fakeData';
import TestimonialsSlide from './TestimonialsSlide';

const Testimonials = () => {
  return (
    <div className='testimonials__container'>
      <Title
        title='Testimonials'
        className='testimonials__container--title'
        titleClassName='testimonials__container--titleBlock'
      />
      <ReusableSwiper
        pagination={{
          clickable: true,
        }}
      >
        {testimonials.map((item: testimonialsType) => {
          return (
            <SwiperSlide key={item.id}>
              <TestimonialsSlide
                info={item.info}
                name={item.name}
                profession={item.profession}
              />
            </SwiperSlide>
          );
        })}
      </ReusableSwiper>
    </div>
  );
};

export default Testimonials;
