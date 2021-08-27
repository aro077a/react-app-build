import { v4 as uuidv4 } from 'uuid';

import { ApproachType } from '../model';
import Title from '../reusable-components/Title';

import { approachData } from './fakeDataApproach';

const Approach = () => {
  return (
    <div className='approach__container'>
      <h3 className='approach__container--title'>OUR APPROACH</h3>
      <p className='approach__container--text'>
        Whether you are fortune 500 or a startup we can help you to unlock
        opportunity by creating human-centered products.
      </p>
      <div className='approach__container__content'>
        {approachData.map((item: ApproachType) => {
          return (
            <div key={uuidv4()}>
              <Title
                title={item.title}
                className='approach__container__content--title'
              />
              {item?.content?.map((el: string) => (
                <p
                  className='approach__container__content--text'
                  key={uuidv4()}
                >
                  {el}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Approach;
