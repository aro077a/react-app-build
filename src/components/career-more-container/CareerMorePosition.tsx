import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import LeftArrowIcon from '../icon-containers/LeftArrowIcon';
import { ICareerMorePositionType } from '../model';
import Title from '../reusable-components/Title';

import { careerMorePositionData } from './fakeDataCareerMore';

const CareerMorePosition = ({ careerData }: any) => {
  //in this destructions list must be 'description' wich is coming not correct from backend
  // const {title = '', sub_title = '',  image_url = ''} = (careerData[0] && careerData[0]) || {};

  console.log(careerData, '8888888888888888888888888');

  return (
    <div className='morePosition__container'>
      <div className='morePosition__container__link'>
        <Link to='/career'>
          <LeftArrowIcon />
          CAREERS
        </Link>
      </div>
      <div className='morePosition__container__header'>
        <h1>ANDROID DEVELOPER</h1>
        <Title
          title='Erevan, Armenia'
          className='morePosition__container__header--subTitle'
        />
        {/* <p className='morePosition__container__header--text' >
         {sub_title}
        </p>
        <img
          src={image_url}
          alt='startup_image'
          className='morePosition__container__header--image'
        /> */}
      </div>
      <div className='morePosition__container__content'>
        {careerMorePositionData.map((item: ICareerMorePositionType) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <ul>
                {item.desc.map((el) => {
                  return (
                    <li
                      key={uuidv4()}
                      className={`${item.desc.length <= 1 ? 'unList' : ''}`}
                    >
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerMorePosition;
