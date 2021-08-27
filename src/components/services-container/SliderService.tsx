import { SwiperSlide } from "swiper/react";

import {
  IServices,
  serviceContentType,
} from "../../redux/features/our-services/model";
import TestimonialsSlide from "../home-container/TestimonialsSlide";
import LeftArrowIcon from "../icon-containers/LeftArrowIcon";
import RightArrowIcon from "../icon-containers/RightArrowIcon";
import ReusableSwiper from "../reusable-components/ReusableSwiper";
import SliderContainer from "../reusable-components/Slider";

const SliderService = ({ sliderData, sliderSubData }: IServices) => {
  // const shortDescription=sliderData?[0].description.replace( /(<([^>]+)>)/ig, '').replace(/&nbsp;/ig,'');
  // console.log("sliderSubData", sliderSubData);

  return (
    <>
      <SliderContainer
        settings={{
          slidesPerRow: 1,
          dots: true,
          className: "center",
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          prevArrow: <LeftArrowIcon />,
          nextArrow: <RightArrowIcon />,
        }}
      >
        <ReusableSwiper
          pagination={{
            clickable: true,
          }}
        >
          {sliderData?.map((item: serviceContentType, index: any) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="development__container__slider__title">
                  <h1 className="development__container__slider__title--title">
                    {item.title}
                  </h1>
                </div>
                <TestimonialsSlide
                  className="service"
                  info={item.description}
                  name={sliderSubData && sliderSubData[index]?.title}
                  profession={
                    sliderSubData && sliderSubData[index]?.description
                  }
                />
              </SwiperSlide>
            );
          })}
        </ReusableSwiper>
      </SliderContainer>
    </>
  );
};

export default SliderService;
