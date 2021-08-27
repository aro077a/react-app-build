import { IServices } from '../../redux/features/our-services/model';

const ServicesNavbar = ({ services }: IServices) => {
  // const scrollHandler = (e: any) => {};
  return (
    <div className='services__navbar'>
      {services &&
        services.map((service) => {
          return (
            <p
              key={service.id}
              // onClick={() => scrollHandler(service.title)}
              aria-hidden='true'
            >
              {service.title}
            </p>
          );
        })}
    </div>
  );
};

export default ServicesNavbar;
