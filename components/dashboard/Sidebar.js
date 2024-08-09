import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import aviewLogo from '../../public/img/aview/logo.svg';

const DashboardSidebar = () => {
  const router = useRouter();

  const navItems = [
    { path: '/subtitle-gen', icon: '📄' },
    { path: '/voice-gen', icon: '🎙️' },
    { path: '/text-to-speech', icon: '🗣️' },
    { path: '/speech-to-text', icon: '📢' },
    { path: '/vid-download', icon: '▶️' },
  ];

  return (
    <aside className="w-16 bg-black text-white h-screen flex flex-col p-5 items-center">
     

      <nav className="flex-grow m-8 p-11">
        {navItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className={`flex flex-col items-center justify-around px-3 py-8 hover:bg-white-transparent ${router.pathname === item.path ? 'bg-gray-800' : ''}`}>
              <span className="text-xl">{item.icon}</span>
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;