import BlueLine from './BlueLine';
import { TitleProps } from './models';

const Title = ({ title, className, titleClassName }: TitleProps) => {
  return (
    <div className={titleClassName}>
      <h1 className={className}>{title}</h1>
      <BlueLine />
    </div>
  );
};

export default Title;
