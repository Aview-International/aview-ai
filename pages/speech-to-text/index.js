import React from 'react';
import SpeechUpload from '../../components/dashboard/SpeechUpload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import DashboardSidebar from '../../components/dashboard/Sidebar';

const SpeechConvert = () => {
  return (
    <div className= "flex h-1/2 w-full flex-row">
      <DashboardSidebar>
          </DashboardSidebar>
    <div className="flex min-h-screen w-full flex-col items-center justify-start rounded-lg bg-white-transparent p-6 pt-s10">
      <h1 className="mb-11 text-5xl font-bold text-white">
        Speech to Text Conversion
      </h1>
      <SpeechUpload />
    </div>
    </div>
  );
};

SpeechConvert.getLayout = DashboardLayout;
export default SpeechConvert;
