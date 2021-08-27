import { v4 as uuidv4 } from 'uuid';

import { AboutWorksDataType } from '../model';

import { aboutWorksData } from './aboutWorksData';

const AboutWorks = () => {
  return (
    <div className='about__works__container'>
      <div className='about__works__container__textBlock'>
        <h3 className='about__works__container__textBlock--title'>
          WHY WORK WITH ARNOLOGY?
        </h3>
        <p className='about__works__container__textBlock--text'>
          We are a talented tech team streaming to find the best tech solutions
          for our customers.
        </p>
      </div>

      <div className='about__works__container__infoBlock'>
        {aboutWorksData.map((item: AboutWorksDataType) => {
          return (
            <div
              className='about__works__container__infoBlock__item'
              key={uuidv4()}
            >
              <div>{item.img}</div>
              <div>
                <p>{item.result}</p>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutWorks;
