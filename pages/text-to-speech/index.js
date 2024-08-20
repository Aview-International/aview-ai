import React from 'react';
import TextUpload from '../../components/dashboard/TextUpload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const TextConvert = () => {
  return (
    <div className="h-screen w-full p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 rounded-lg bg-white-transparent">
        <h1 className="text-5xl font-bold text-white">
          Text to Speech Conversion
        </h1>
        <TextUpload />
      </div>
    </div>
  );
};

TextConvert.getLayout = DashboardLayout;
export default TextConvert;
