import { ServiceTitleProps } from '../model';

const ServicesTitle = ({
  title,
  className,
  titleClassName,
}: ServiceTitleProps) => {
  return (
    <div className={titleClassName}>
      <h1 className={className}>{title}</h1>
    </div>
  );
};

export default ServicesTitle;
