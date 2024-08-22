import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../UI/Button';
import AviewLogo from '../../public/img/aview/logo.svg';
import Image from 'next/image';
import DashboardMobileMenu from '../navigation/DashboardMobileMenu';
import MenuButtonIcon from '../navigation/MenuButtonIcon';

const Header = () => {
  const [isMenuIconOpen, setMenuIconOpen] = useState(false);

  const handlerMenuIcon = () => {
    setMenuIconOpen(!isMenuIconOpen);
  };

  return (
    <header className="relative flex items-center justify-between bg-white-transparent py-s3 text-white lg:border-b-[1px] lg:bg-black lg:py-0.5 lg:px-5">
      <MenuButtonIcon handler={handlerMenuIcon} styles={'absolute left-6'} />
      <DashboardMobileMenu isOpen={isMenuIconOpen} handler={handlerMenuIcon} />
      <div className="hidden lg:block">
        <Image src={AviewLogo} alt="Logo" width={60} height={60} />
      </div>
      <div className="hidden space-x-4 lg:flex">
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
