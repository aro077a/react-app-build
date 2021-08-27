import { CareerOfferType } from '../model';

import { offerData } from './fakeDataOffer';

const Offer = () => {
  return (
    <div className='offer__container'>
      <h3 className='offer__container--title'>WE OFFER</h3>
      <div className='offer__container__content'>
        {offerData.map((item: CareerOfferType) => {
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

export default Offer;
