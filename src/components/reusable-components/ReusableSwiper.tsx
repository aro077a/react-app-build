import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination]);

const ReusableSwiper = ({
  children,
  spaceBetween = 1,
  centeredSlides = false,
  navigation = false,
  breakpoints = {},
  className,
  pagination = false,
  grabCursor
}: any) => {
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        className={className}
        navigation={navigation}
        pagination={pagination}
        breakpoints={breakpoints}
        grabCursor={grabCursor}
      >
        {children}
      </Swiper>
    </>
  );
};

export default ReusableSwiper;
