import Button from '../reusable-components/Button';
import Title from '../reusable-components/Title';

const Estimate = ({ homeEstimate }: any) => {
  //destructuring estimate part
  const {
    title: estimateTitle = '',
    description: estimateDescription = '',
    image_url: estimateImage = '',
  } = homeEstimate || [];

  const clearedDescription = estimateDescription
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/&nbsp;/gi, '');

  return (
    <div className='estimate__container'>
      <div className='estimate__container__text'>
        <Title
          className='estimate__container__text--title'
          title={estimateTitle}
        />
        <p className='estimate__container__text--subTitle'>
          {clearedDescription}
        </p>
        <Button
          buttonText='Get in touch'
          className='estimate__container__text__button'
        />
      </div>
      <div className='estimate__container__image'>
        <img src={estimateImage} alt='estimateImage' />
      </div>
    </div>
  );
};

export default Estimate;
