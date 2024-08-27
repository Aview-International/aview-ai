import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardStructure = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen w-full overflow-y-hidden">
      <Sidebar setHandler={setIsOpen} isOpen={isOpen} />
      <main
        className={`${
          isOpen ? 'lg:w-[calc(100%-180px)]' : 'lg:w-[calc(100%-80px)]'
        } flex flex-col bg-black`}
      >
        <Header />
        <div className="mx-auto h-full w-full flex-1 self-stretch bg-black/30">
          {children}
        </div>
      </main>
    </div>
  );
};

const DashboardLayout = (page) => (
  <DashboardStructure>{page}</DashboardStructure>
);

export default DashboardLayout;
