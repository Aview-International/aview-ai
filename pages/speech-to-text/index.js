import React from 'react';
import SpeechUpload from '../../components/dashboard/SpeechUpload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const SpeechConvert = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start rounded-lg bg-white-transparent p-6 pt-s10">
      <h1 className="mb-4 text-5xl font-bold text-white">
        Speech to Text Conversion
      </h1>
      <SpeechUpload />
    </div>
  );
};

SpeechConvert.getLayout = DashboardLayout;
export default SpeechConvert;
