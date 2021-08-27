import { FC, ReactNode } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
