import React from 'react';
import SpeechUpload from '../../components/dashboard/SpeechUpload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';


const SpeechConvert = () => {
  return (
    <div className="h-screen w-full p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-6 rounded-lg bg-white-transparent">
        <h1 className="text-5xl font-bold text-white">
          Speech to Text Conversion
        </h1>
        <SpeechUpload />
      </div>
    </div>
    </div>
  );
};

SpeechConvert.getLayout = DashboardLayout;
export default SpeechConvert;
