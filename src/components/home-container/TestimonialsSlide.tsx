import CommaIcon from '../icon-containers/CommaIcon';
import { testimonialsType } from '../model';

const TestimonialsSlide = ({
  info,
  name,
  profession,
  className,
}: testimonialsType) => {
  return (
    <div
      className={`${
        className ? 'testimonial__services__slide' : 'testimonials__slide'
      }`}
    >
      <p
        className={`${
          className
            ? 'testimonial__services__slide--info'
            : 'testimonials__slide--info'
        }`}
      >
        {info}
      </p>
      <p
        className={`${
          className
            ? 'testimonial__services__slide--name'
            : 'testimonials__slide--name'
        }`}
      >
        {name}
      </p>
      <p
        className={`${
          className
            ? 'testimonial__services__slide--profession'
            : 'testimonials__slide--profession'
        }`}
      >
        {profession}
      </p>
      <div
        className={`${
          className
            ? 'testimonial__services__slide--icon'
            : 'testimonials__slide--icon'
        }`}
      >
        <CommaIcon />
      </div>
    </div>
  );
};

export default TestimonialsSlide;
