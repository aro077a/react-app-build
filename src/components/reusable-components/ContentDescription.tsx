import { FC } from 'react';

import Fade from 'react-reveal/Fade';

import BlueLine from './BlueLine';
import Button from './Button';
import { ContentDescriptionProps } from './models';

const ContentDescription: FC<ContentDescriptionProps> = ({
  firstLine,
  info,
  buttonClassName,
  buttonText,
}) => {
  return (
    <Fade bottom delay={100} duration={1500} distance='5rem'>
      <div className='contentDescription' >
        <h1 className='contentDescription__title' dangerouslySetInnerHTML={{__html:firstLine}}></h1>
        <BlueLine />
        <p className='contentDescription__info' dangerouslySetInnerHTML={{__html: info}}></p>
        {!!buttonText && (
          <Button
            className={buttonClassName || 'contentDescription__button'}
            buttonText={buttonText}
          ></Button>
        )}
      </div>
    </Fade>
  );
};

export default ContentDescription;
