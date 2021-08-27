import { worksType } from '../model';

import WorksContentTab from './WorksContentTab';
import { worksData } from './worksFakeData';

const WorksScrollSlider = () => {
  return (
    <div className='worksSlider__container'>
      {worksData.map((item: worksType) => {
        return (
          <div key={item.id} className='worksSlider__container__slide'>
            <WorksContentTab
              title={item.title}
              info={item.info}
              img={item.img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WorksScrollSlider;
