import Works from './Works';
import WorksScrollSlider from './WorksScrollSlider';

const OurWorks = ({ homeWorks }: any) => {
  return (
    <div className='ourWorks__container'>
      <Works homeWorks={homeWorks} />
      <WorksScrollSlider />
    </div>
  );
};
export default OurWorks;
