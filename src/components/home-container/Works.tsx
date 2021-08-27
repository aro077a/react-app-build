import { Carousel } from '3d-react-carousal';

import Button from '../reusable-components/Button';
import Title from '../reusable-components/Title';

import WorksContentTab from './WorksContentTab';
import { worksData } from './worksFakeData';

const Works = ({ homeWorks }: any) => {
  //destructuring work part
  const { title: workTitle = '', description: workDescription = '' } =
    homeWorks || [];

  const clearedDescription = workDescription
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/&nbsp;/gi, '');

  const slides: any = [];

  worksData.forEach((item) => {
    slides.push(
      <WorksContentTab
        title={item.title}
        info={item.info}
        img={item.img}
        key={item.id}
      />
    );
  });

  return (
    <div className='works__container'>
      <Title
        title={workTitle}
        className='works__container--title'
        titleClassName='works__container--titleBlock'
      />
      <p className='works__container--text'>{clearedDescription}</p>
      <div className='works__container__slider'>
        <Carousel slides={slides} autoplay interval={2000} />
      </div>
      <Button buttonText='SEE PORTFOLIO' className='works__container--button' />
    </div>
  );
};

export default Works;
