import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardStructure = ({ children }) => {
  return (
    <div className="h-screen overflow-y-auto">
      <Header />
      <main className="flex h-[calc(100vh-73px)] w-full bg-black">
        <Sidebar />
        <div className="mx-auto w-full flex-1 items-stretch lg:w-[calc(100%-160px)]">
          <div className="h-full bg-black/30">{children}</div>
        </div>
      </main>
    </div>
  );
};

const DashboardLayout = (page) => (
  <DashboardStructure>{page}</DashboardStructure>
);

export default DashboardLayout;
