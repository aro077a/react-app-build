import { Link } from 'react-router-dom';

import {
  allServicesType,
  IServices,
} from '../../redux/features/our-services/model';

const ServicesListItem = ({ services }: IServices) => { 

  return (
    <div className='services__list'>
      {services?.map((service: allServicesType) => {            
            const shortDescription=service.description.replace( /(<([^>]+)>)/ig, '').replace(/&nbsp;/ig,'').split(" ").slice(0,10).join(" ");
        return (
          <div
            className={`services__list__item ${
              +service.id % 2 === 0
                ? 'services__list__itemLeft'
                : 'services__list__itemRight'
            }`}
            key={service.id}
          >
            <div className='services__list__item__text'>
              <h2>{service.title}</h2>
              <p className='services__list__item__text--subtitle'>
                {service.sub_title}
              </p>
              <p
                className='services__list__item__text--txt'
                // dangerouslySetInnerHTML={{ __html: service.description }}
              >
                {`${shortDescription}...`}
              </p>
              <Link
                to={{
                  pathname: `services/${service.id}`,
                }}
              >
                Read More
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='12.629'
                  viewBox='0 0 26 12.629'
                >
                  <path
                    fill='#03989b'
                    d='M25.745 6.161L19.1.581a.732.732 0 0 0-1.021.08.707.707 0 0 0 .081 1.007l5.168 4.343H.724a.714.714 0 1 0 0 1.428H23.3l-5.133 4.344a.707.707 0 0 0-.078 1.007.731.731 0 0 0 1.022.076l6.64-5.619a.707.707 0 0 0 0-1.085z'
                    transform='translate(0 -.41)'
                  />
                </svg>
              </Link>
            </div>
            <div className='services__list__item__img'>
              <img src={service.image_url} alt='list-item' />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesListItem;
