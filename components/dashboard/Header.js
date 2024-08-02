import React from 'react';
import Link from 'next/link';
import Button from '../UI/Button';
import AviewLogo from '../../public/img/aview/logo.svg';
import Image from 'next/image';
import OnboardingButton from '../Onboarding/button';

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-[1px] py-0.5 px-5 bg-transparent text-white/60">
      <div className=''>
        <Image src={AviewLogo} alt="Logo" width={60} height={60}/>
      </div>
      <div className="flex space-x-4 text-white">
        <Link href="/login">
          <a className="m-3 ">Log in</a>
        </Link>
        <Link href="/signup">
          <a className="m-3 ">Sign up</a>
        </Link>
        <Button type="primary" >
          Upgrade
        </Button>
        <Button type="secondary" >
          Done
        </Button>
      </div>
    </header>
  );
};

export default Header;
