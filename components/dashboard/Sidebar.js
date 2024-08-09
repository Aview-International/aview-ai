import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DashboardSidebar = () => {
  const router = useRouter();

  const navItems = [
    { path: '/subtitle-gen', icon: '📄', title: 'Subtitle' },
    { path: '/voice-gen', icon: '🎙️', title: 'Voice' },
    { path: '/text-to-speech', icon: '🗣️', title: 'TTS' },
    { path: '/speech-to-text', icon: '📢', title: 'STT' },
    { path: '/vid-download', icon: '▶️', title: 'Download' },
  ];

  return (
    <aside className="w- bg-black text-white h-screen flex flex-col mt-11">
      <nav className="flex flex-col w-full">
        {navItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <a className={`flex items-center w-full py-4 px-4 hover:bg-[#2a2a2a] ${router.pathname === item.path ? 'bg-[#2a2a2a]' : ''}`}>
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="text-sm">{item.title}</span>
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;