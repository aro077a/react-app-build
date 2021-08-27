

// import { useSelector } from 'react-redux';
import { SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import about_background_img from '../../assets/images/about_image.png';
import { testimonials } from '../home-container/fakeData';
import TestimonialsSlide from '../home-container/TestimonialsSlide';
import { testimonialsType } from '../model';
import ContentDescription from '../reusable-components/ContentDescription';
import ImageContainer from '../reusable-components/ImageContainer';
import ReusableSwiper from '../reusable-components/ReusableSwiper';


import AboutUs from './AboutUs';
import AboutWorks from './AboutWorks';
import Approach from './Approach';
import JoinTeam from './JoinTeam';



const AboutContainer = () => {

  return (
  
    <div className='about__wrapper'>
      <div className='about__wrapper__image'>
        <ImageContainer img={about_background_img} />
      </div>
      <div className='about__wrapper__desc'>
        <ContentDescription
          secondLine='SPECIALISTS IN
          DIGITAL SOLUTIONS'
          info='Our designers and engineers know collaboration is the essence of any project.
          It’s a simple philosophy we’ve followed for nearly two decades. And it delivers 
          results.'
        />
      </div>
      <AboutWorks />
      <AboutUs />
      <JoinTeam />
      <Approach />

      <div className='about__wrapper__slider'>
        <h3 className='about__wrapper__slider--title'>
          WHAT THEY SAY ABOUT US
        </h3>
        <ReusableSwiper
          pagination={{
            clickable: true,
          }}
        >
          {testimonials.map((item: testimonialsType) => {
            return (
              <SwiperSlide key={uuidv4()}>
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
    </div>
  );
};

export default AboutContainer;
