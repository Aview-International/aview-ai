// import Image from 'next/image';
// import { useContext, useEffect, useState } from 'react';
// import MenuOpenContext from '../../store/menu-open-context';
// import Link from 'next/link';
// import messages from '../../public/img/icons/messages.svg';
// import DashboardMobileMenu from '../navigation/DashboardMobileMenu';
// import MenuButtonIcon from '../navigation/MenuButtonIcon';
// import { customGreeting } from '../../utils/greeting';
// import { useSelector } from 'react-redux';

// const DashBoardHeader = ({ userInfo }) => {
//   const [time, setTime] = useState(customGreeting());
//   const messageStatus = useSelector((state) => state.messages.status);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(customGreeting());
//     }, 5000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const menuOpenCtx = useContext(MenuOpenContext);

//   return (
//     <header className="relative flex w-full items-center justify-between px-s4 py-s3 text-white md:px-s9">
//       <MenuButtonIcon
//         handler={menuOpenCtx.openMenuHandler}
//         styles={'absolute left-6'}
//       />
//       <DashboardMobileMenu />
//       <div className="hidden md:block">
//         <h3 className="text-xl">
//           {time} <span className="font-bold">{userInfo.firstName}!</span>
//         </h3>
//         <p className="text-lg text-gray-2">Welcome to your Aview Dashboard</p>
//       </div>
//       <div className="hidden md:block">
//         <Link href="/dashboard/messages">
//           <a className="relative flex items-center rounded-full bg-gray-1 px-s2 py-2.5 text-sm">
//             <span className="mr-s1.5 grid place-content-center brightness-0 invert">
//               <Image src={messages} alt="Messages" />
//             </span>
//             <span className="mt-0.5">Messages</span>
//             {messageStatus.readByUser === false && (
//               <span className="absolute -bottom-0.5 -right-0.5 inline-block h-4 w-4 rounded-full bg-red" />
//             )}
//           </a>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default DashBoardHeader;
import React from 'react';
import Link from 'next/link';
import Button from '../UI/Button';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white-transparent rounded-xl text-white">
      <div>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" className="h-10" />
          </a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/login">
          <a className="text-white m-3">Log in</a>
        </Link>
        <Link href="/signup">
          <a className="text-white m-3">Sign up</a>
        </Link>
        <Button type="primary" purpose="route" route="/upgrade">
          Upgrade
        </Button>
        <Button type="secondary" purpose="route" route="/done">
          Done
        </Button>
      </div>
    </header>
  );
};

export default Header;
