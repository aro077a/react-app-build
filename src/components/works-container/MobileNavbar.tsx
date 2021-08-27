import { FC } from 'react';

import Fade from 'react-reveal/Fade';

import { MobileNavbarProps } from '../model';

import ItemsNavigation from './ItemsNavigation';

const MobileNavbar: FC<MobileNavbarProps> = ({ showMenu, setLabelName }) => {
  return (
    <Fade top fraction={0.5} delay={100} duration={1500} distance='7rem'>
      <div className='mobileNavbar__container'>
        <ItemsNavigation showMenu={showMenu} setLabelName={setLabelName} />
      </div>
    </Fade>
  );
};

export default MobileNavbar;
