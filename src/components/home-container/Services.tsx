import { SwiperSlide } from 'swiper/react';

import RightArrowIcon from '../icon-containers/RightArrowIcon';
import { servicesType } from '../model';
import ReusableSwiper from '../reusable-components/ReusableSwiper';
import Title from '../reusable-components/Title';

import { servicesData } from './fakeDataServices';
import SlideContentTab from './SlideContentTab';

const Services = () => {
  return (
    <div className='services__container'>
      <div className='services__container__head'>
        <Title
          title='our services'
          className='services__container__head--title'
        />
        <div className='services__container__head__textBlock'>
          <span className='services__container__head__textBlock--text'>
            Read More
          </span>
          <span className='services__container__head__textBlock--icon'>
            <RightArrowIcon />
          </span>
        </div>
      </div>
      <ReusableSwiper
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={false}
        className='mySwiper' 
        grabCursor={true}
        breakpoints={{
          "360": {
            "slidesPerView": 1.2,
          },
          "410": {
            "slidesPerView": 1.5,
          },
          "500": {
            "slidesPerView": 1.8,
          },
          "540": {
            "slidesPerView": 2,
          },
          "580": {
            "slidesPerView": 2.2,
          },
          "668": {
            "slidesPerView": 2.5,
          },
          "840": {
            "slidesPerView": 2.7,
          },
          "920": {
            "slidesPerView": 3,
          },
          "980": {
            "slidesPerView": 3.2,
          },
          "1070": {
            "slidesPerView": 3.5,
          },
          "1240": {
            "slidesPerView": 4,
          },
          "1400": {
            "slidesPerView": 4.5,
          },
          "1530": {
            "slidesPerView": 5,
          }
        }} 
      >
        {servicesData.map((item: servicesType) => {
          return (
            <SwiperSlide key={item.id} className='services__swiper-slide'>
              <SlideContentTab title={item.title} desc={item.desc} />
            </SwiperSlide>
          );
        })}
      </ReusableSwiper>
      
    </div>
  );
};

export default Services;
