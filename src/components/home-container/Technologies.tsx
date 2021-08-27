import Title from '../reusable-components/Title';

const Technologies = () => {
  return (
    <div className='techno__wrapper'>
      <div className='techno__wrapper__square__container'>
        <div className='techno__wrapper__square__container__first-square'>
          <div className={`inner__square`}></div>
        </div>
        <div className='techno__wrapper__square__container__second-square'>
          <div className={`inner__square`}></div>
        </div>
        <div className='techno__wrapper__square__container__third-square'>
          <div className={`inner__square`}></div>
        </div>
      </div>
      <Title
        title='Web development technologies we use'
        className='techno__wrapper__title'
      />
    </div>
  );
};

export default Technologies;
