import { worksType } from '../model';

const WorksContentTab = ({ title, info, img }: worksType) => {
  return (
    <div className='worksContentTab__slide'>
      <h3 className='worksContentTab__slide__title'>{title}</h3>
      <img src={img} alt='' />

      <p className='worksContentTab__slide__info'> {info}</p>
    </div>
  );
};

export default WorksContentTab;
