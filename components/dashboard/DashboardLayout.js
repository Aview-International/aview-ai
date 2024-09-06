import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardStructure = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen w-full">
      <Sidebar setHandler={setIsOpen} isOpen={isOpen} />
      <main
        className={`${
          isOpen ? 'lg:w-[calc(100%-180px)]' : 'lg:w-[calc(100%-80px)]'
        } flex flex-col bg-black w-full items-stretch`}
      >
        <Header />
        <div className="mx-auto h-full w-full self-stretch overflow-y-auto bg-black/30 p-s3">
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
