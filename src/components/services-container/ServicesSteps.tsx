import StepsMid from './steps-mid';
import StepsLeft from './StepsLeft';
import StepsRight from './StepsRight';

const ServicesSteps = () => {
  return (
    <div className='services__steps'>
      <h2 className='services__steps--title'>How it goes, step by step</h2>
      <p className='services__steps--text'>
        We use a traditional software development lifecycle in order to keep the
        process open, transparent, and give you a clear road map to the
        successful conclusion of your project
      </p>
      <div className='services__steps__list'>
        <StepsLeft />
        <StepsMid />
        <StepsRight />
      </div>
    </div>
  );
};

export default ServicesSteps;
