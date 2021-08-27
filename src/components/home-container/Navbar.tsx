import { FC } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { whiteLogoPath } from '../../utils/paths';
import { NavbarProps } from '../model';

const Navbar: FC<NavbarProps> = ({
  showMenu,
  navLinks,
  scrollTop,
  headerClass,
}) => {
  const { pathname } = useLocation();

  const activePath = whiteLogoPath.filter((e) => e === pathname);

  return (
    <div
      className={
        scrollTop && scrollTop > 0
          ? 'colorWhileAnimated'
          : headerClass === 'scrolled__header'
          ? 'navbar__dark'
          : activePath.length
          ? 'navbar__dark'
          : 'navbar__light'
      }
      role='button'
      aria-hidden='true'
      tabIndex={0}
      onClick={showMenu}
    >
      {navLinks?.map((link) => {
        return (
          <NavLink
            to={`/${link.link}`}
            activeClassName={
              pathname === '/'
                ? 'navbar__dark__selected'
                : 'navbar__light__selected'
            }
            key={link.id}
          >
            {link.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
