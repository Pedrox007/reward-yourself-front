import React, { useState } from 'react';
import Navbar from './NavBar';
import SideNav from './SideNav';

const Layout = ({ children, type }) => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const openNav = () => setIsOpenNav(true);
  const closeNav = () => setIsOpenNav(false);

  return (
    <main className="layout">
      <SideNav isOpenNav={isOpenNav} closeNav={closeNav} />

      <Navbar openNav={openNav} type={type} />
      {children}
    </main>
  );
};

export default Layout;
