import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../UI/Button';
import aviewLogo from '../../public/img/aview/logo.svg';
import closeIcon from '../../public/img/icons/close.svg';
import { useRouter } from 'next/router';
import { DASHBOARD_NAVLINKS } from '../../constants/constants';

export default function DashboardMobileMenu({ isOpen, handler }) {
  return (
    <div
      className={`h-screen-trick transition-300 absolute top-0 left-0 z-50 flex w-2/4 flex-col gap-12 bg-black pt-8 pb-10 2xs:px-2 md:px-6 md:hidden ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex h-12 flex-grow-0 items-center justify-between">
        {isOpen && (
          <div onClick={handler}>
            <Link href="/dashboard">
              <div className="ml-4 h-12 w-12">
                <Image
                  src={aviewLogo}
                  width={48}
                  height={48}
                  alt="aview logo"
                />
              </div>
            </Link>
          </div>
        )}
        <div className="mr-5 h-7 w-7" onClick={handler}>
          <Image src={closeIcon} width={28} height={28} alt="close icon" />
        </div>
      </div>
      <nav className="flex flex-grow flex-col justify-between overflow-hidden">
        <MainMenu isOpen={isOpen} handler={handler}/>
      </nav>
      {/* <div className={`flex-grow-0 flex-col gap-4`}>
        <Button
          purpose="route"
          route="/login"
          type="secondary"
          fullWidth={true}
        >
          Logout
        </Button>
      </div> */}
    </div>
  );
}

export function MainMenu({isOpen, handler}) {
  const { route } = useRouter();

  return (
    <div className="flex flex-col">
      {DASHBOARD_NAVLINKS.map((menuItem, idx) => {
        return (
          <div onClick={handler} key={idx}>
            <Link href={menuItem.route('/dashboard/settings')}>
              <a
                className={`group relative mb-s2 flex items-center rounded-[4px] py-s1 px-s0 hover:bg-[#fcfcfc] hover:bg-opacity-10 ${
                  route === menuItem.route && 'bg-[#fcfcfc] bg-opacity-10'
                }`}
              >
                <span
                  className={`gradient-1 absolute right-0 top-1/2 block h-4 w-1 -translate-y-1/2 rounded-md group-hover:animate-dropin ${
                    route === menuItem.route
                      ? 'visible'
                      : 'invisible group-hover:visible'
                  }`}
                ></span>
                <span
                  className={`mr-5 group-hover:animate-popup ${
                    route === menuItem.route
                      ? 'animate-popup'
                      : 'brightness-0 invert'
                  }`}
                >
                  <Image
                    src={menuItem.image}
                    alt={menuItem.text}
                    width={25}
                    height={25}
                    layout="fixed"
                  />
                </span>
                <span
                  className={`${
                    isOpen
                      ? ''
                      : 'absolute left-24 top-1 z-10 rounded-md'
                  }`}
                >
                  <span
                    className={`text-2xl${
                      isOpen
                        ? ''
                        : 'hidden rounded-md p-s1 group-hover:inline-block'
                    } ${route === menuItem.route ? 'text-[#fcfcfc]' : ''}`}
                  >
                    {menuItem.text}
                  </span>
                </span>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
