import Group_img from '../../assets/images/Group.png';
import Button from '../reusable-components/Button';

const JoinTeam = () => {
  return (
    <div className='join__team__wrapper'>
      <div className='join__team__wrapper__container'>
        <div className='join__team__wrapper__container__text'>
          <p className='join__team__wrapper__container__text--title'>
            Love building digital products? <br /> Join our team!
          </p>
          <p className='join__team__wrapper__container__text--info'>
            We’re always on the lookout for talented, ambitious team members.
            Get in touch to discuss opportunities.
          </p>
          <Button
            buttonText='CAREER'
            className='join__team__wrapper__container__text--btn'
          />
        </div>
        <div className='join__team__wrapper__container__image'>
          <img src={Group_img} alt='img' />
        </div>
        <Button
          buttonText='CAREER'
          className='join__team__wrapper__container__text--mobilebtn'
        />
      </div>
    </div>
  );
};

export default JoinTeam;
