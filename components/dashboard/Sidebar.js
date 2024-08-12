import Image from 'next/image';
import Link from 'next/link';
import { DASHBOARD_NAVLINKS } from '../../constants/constants';
import aviewLogo from '../../public/img/aview/logo.svg';
import signout from '../../public/img/icons/signout.svg';
import sidebarArrow from '../../public/img/icons/sidebar-arrow.svg';
import { useRouter } from 'next/router';
import { logoutUser } from '../../services/firebase';

const DashboardSidebar = () => {
  return (
    <aside
      className={`relative 
       hidden h-full w-[160px] pt-s5 text-white lg:block`}
    >
      <div className="flex w-full items-center justify-between px-s2">
        <Image
          src={aviewLogo}
          alt="AVIEW International logo"
          width={70}
          height={70}
        />
      </div>
      <Navlink />
      <Signout />
    </aside>
  );
};

const Navlink = () => {
  const { route } = useRouter();
  return (
    <div className="mt-s10 mb-s3 w-full text-sm">
      {DASHBOARD_NAVLINKS.map((link, index) => (
        <Link
          href={link.route('/dashboard/settings/profile')}
          key={`sidebar-link-${index}`}
        >
          <a
            className={`group relative mb-s2.5 flex items-center rounded-[4px] p-s1 hover:bg-[#fcfcfc] hover:bg-opacity-10 ${
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
            <span>{link.text}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

const Signout = () => {
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
