import { InputProps } from './models';

const TextArea = ({ placeholder, onChange, name, value }: InputProps) => {
  return (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default TextArea;
