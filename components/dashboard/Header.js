import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../UI/Button';
import DashboardMobileMenu from '../navigation/DashboardMobileMenu';
import MenuButtonIcon from '../navigation/MenuButtonIcon';

const Header = () => {
  const [isMenuIconOpen, setMenuIconOpen] = useState(false);

  const handlerMenuIcon = () => {
    setMenuIconOpen(!isMenuIconOpen);
  };

  return (
    <header className="relative flex w-full items-center justify-end bg-white-transparent py-s3 text-white lg:py-5 lg:px-5">
      <MenuButtonIcon handler={handlerMenuIcon} styles={'absolute left-6'} />
      <DashboardMobileMenu isOpen={isMenuIconOpen} handler={handlerMenuIcon} />
      <div className="hidden space-x-4 md:flex">
        <Link href="/login">
          <a className="m-3 mr-4">Log in</a>
        </Link>
        <Link href="/signup">
          <a className="m-3 mr-11">Sign up</a>
        </Link>
        <Button type="primary">Upgrade</Button>
        <Button type="secondary">Done</Button>
      </div>
    </header>
  );
};

export default Header;
