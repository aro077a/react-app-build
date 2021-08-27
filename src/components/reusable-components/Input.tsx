import Fade from 'react-reveal/Fade';

import { InputProps } from './models';

const Input = ({
  name,
  value,
  placeholder,
  type,
  className,
  onChange,
  checked,
  onBlur,
  errorsMessage,
  id,
}: InputProps) => {
  return (
    <div className='input__container'>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        className={className}
        onChange={onChange}
        checked={checked}
        onBlur={onBlur}
        id={id}
      />
      {errorsMessage && (
        <Fade top>
          <div className='input__container--error'>{errorsMessage}</div>
        </Fade>
      )}
    </div>
  );
};

export default Input;
