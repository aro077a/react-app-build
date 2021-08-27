import { FC } from 'react';

import Fade from 'react-reveal/Fade';

import Navbar from '../home-container/Navbar';
import { MobileNavbarProps } from '../model';
import Button from '../reusable-components/Button';
import SocialIcons from '../reusable-components/SocialIcons';

import MobileTranslate from './MobileTranslate';

const MobileNavbar: FC<MobileNavbarProps> = ({
  navLinks,
  showMenu,
  selectedLang,
}) => {
  return (
    <Fade top fraction={0.5} delay={100} duration={1500} distance='7rem'>
      <div className='mobileNavbar__container'>
        <div className='mobileNavbar__container__navbar'>
          <div>
            <Navbar showMenu={showMenu} navLinks={navLinks} />
            <MobileTranslate selectedLang={selectedLang} />
            <Button
              className='mobileNavbar__container__navbar--button'
              buttonText='GET AN ESTIMATE'
            />
          </div>
        </div>

        <div className='mobileNavbar__container__iconBlock'>
          <div className='mobileNavbar__container__iconBlock--icons'>
            <SocialIcons />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MobileNavbar;
