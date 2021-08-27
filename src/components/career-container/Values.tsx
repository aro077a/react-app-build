import { CareerValueType } from '../model';

import { valuesData } from './fakeDataValues';

const Values = () => {
  return (
    <div className='values__container'>
      <div className='values__container__header'>
        <h3>OUR VALUES</h3>
        <p>
          Bravery is the word we live by. We’re a team undaunted by challenges
          and unwilling to accept anything less than beautiful design, seamless
          experience and rock-solid code.
        </p>
      </div>
      <div className='values__container__content'>
        {valuesData.map((item: CareerValueType) => {
      
          return (
            <div key={item.id}>
              <div>{item.icon}</div>
              <span>{item.title}</span>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
