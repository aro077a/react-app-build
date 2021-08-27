import { useState, FC, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

const MobileTranslate: FC<any> = ({ selectedLang }) => {
  const LangArray = ['EN', 'RU', 'FR', 'HY'];
  const [lang, setLang] = useState('');

  useEffect(() => {
    setLang(selectedLang);
  }, [selectedLang]);

  return (
    <div className='mobile__translate__container'>
      {LangArray.map((item) => (
        <span
          key={uuidv4()}
          role='button'
          aria-hidden='true'
          className={`mobile__translate__container--item ${
            item === lang ? 'selected' : ''
          }`}
          onClick={() => setLang(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default MobileTranslate;
