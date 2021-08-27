import Slider from 'react-slick';

import { SliderContainerProps } from './models';

const SliderContainer = ({ children, settings }: SliderContainerProps) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderContainer;
