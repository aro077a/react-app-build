import { FC, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { NavbarProps } from '../model';

const ItemsNavigation: FC<NavbarProps> = ({ showMenu, setLabelName }) => {
  const [selected, setSelected] = useState('all');
  const labels = ['all', 'social', 'ecomerce', 'travel', 'lifestyle', 'other'];
  const selectData = (label: string) => {
    setSelected(label);
    setLabelName && setLabelName(label);
  };

  return (
    <div className='wrapper'>
      <div className='wrapper__navigation__wrapper'>
        {labels.map((item) => (
          <div
            key={uuidv4()}
            role='button'
            aria-hidden='true'
            tabIndex={0}
            onClick={() => selectData(item)}
            className='wrapper__navigation__wrapper__item'
          >
            <button
              onClick={showMenu}
              className={
                item === selected
                  ? 'wrapper__navigation__wrapper__item--buttonActive'
                  : 'wrapper__navigation__wrapper__item--button'
              }
              data-text={item}
              type='button'
            >
              <h2>{item}</h2>
            </button>
          </div>
        ))}
      </div>
      <div className='wrapper__closeButton'>
        <span
          role='button'
          tabIndex={0}
          aria-hidden='true'
          onClick={showMenu}
          className='wrapper__closeButton__close--first'
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default ItemsNavigation;
