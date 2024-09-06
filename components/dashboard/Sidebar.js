import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DASHBOARD_NAVLINKS } from '../../constants/constants';
import signout from '../../public/img/icons/signout.svg';
import sidebarArrow from '../../public/img/icons/sidebar-arrow.svg';
import AviewLogo from '../../public/img/aview/logo.svg';
import { useRouter } from 'next/router';

const DashboardSidebar = ({ setHandler, isOpen }) => {
  return (
    <aside
      className={`${
        isOpen ? 'w-[180px]' : 'w-[80px]'
      } relative hidden bg-white-transparent pt-s10 text-white transition-all md:block`}
    >
      <div className="flex w-full items-center justify-between px-s2">
        {isOpen && (
          <Link href="/dashboard">
            <a>
              <Image
                src={AviewLogo}
                alt="AVIEW International logo"
                width={70}
                height={70}
              />
            </a>
          </Link>
        )}
        <button
          className={!isOpen ? 'rotate-180' : ''}
          onClick={() => setHandler(!isOpen)}
        >
          <Image src={sidebarArrow} alt="arrow" width={35} height={35} />
        </button>
      </div>
      <Navlink isOpen={isOpen} />
      {/* <Signout isOpen={isOpen}/> */}
    </aside>
  );
};

const Navlink = ({ isOpen }) => {
  const { route } = useRouter();
  return (
    <div className="mt-s10 mb-s3 w-full text-sm">
      {DASHBOARD_NAVLINKS.map((link, index) => (
        <Link
          href={link.route('/dashboard/settings/profile')}
          key={`sidebar-link-${index}`}
        >
          <a
            className={`group relative mb-s2.5 flex items-center rounded-[4px] py-s1 px-s3 hover:bg-[#fcfcfc] hover:bg-opacity-10 ${
              route === link.route() && 'bg-[#fcfcfc] bg-opacity-10'
            }`}
          >
            <span
              className={`gradient-1 absolute right-0 top-1/2 block h-4 w-1 -translate-y-1/2 rounded-md group-hover:animate-dropin ${
                route === link.route()
                  ? 'visible'
                  : 'invisible group-hover:visible'
              }`}
            ></span>
            <span
              className={`mr-5 group-hover:animate-popup ${
                route === link.route() ? 'animate-popup' : 'brightness-0 invert'
              }`}
            >
              <Image
                src={link.image}
                alt={link.text}
                width={20}
                height={20}
                layout="fixed"
              />
            </span>
            <span
              className={`${
                isOpen ? '' : 'absolute left-24 top-1 z-10 rounded-md bg-black'
              }`}
            >
              <span
                className={`${
                  isOpen
                    ? ''
                    : 'hidden rounded-md bg-black p-s1 group-hover:inline-block'
                } ${route === link.route() ? 'text-[#fcfcfc]' : ''}`}
              >
                {link.text}
              </span>
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};

const Signout = ({ isOpen }) => {
  return (
    <button
      className={`hover:gradient-dark group absolute bottom-5 flex w-full items-center p-s1 text-sm`}
    >
      <span
        className={`gradient-1 invisible absolute right-0 top-1/2 block h-4 w-1 -translate-y-1/2 rounded-md group-hover:visible group-hover:animate-dropin`}
      ></span>
      <span
        className={`mr-5 brightness-0 invert group-hover:animate-popup group-hover:brightness-100 group-hover:invert-0`}
      >
        <Image
          src={signout}
          alt={'Sign Out'}
          width={20}
          height={20}
          layout="fixed"
        />
      </span>
      <span>Sign Out</span>
    </button>
  );
};

export default DashboardSidebar;
