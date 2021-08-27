import { FC } from 'react';

import { ButtonProps } from './models';

const Button: FC<ButtonProps> = ({ className, buttonText, type}) => {
  return (
    <button  className={className} type={type ? 'submit' : 'button'}>
      <span>{buttonText}</span>
    </button>
  );
};

export default Button;
