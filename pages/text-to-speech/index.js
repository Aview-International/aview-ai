import React from 'react';
import TextUpload from '../../components/dashboard/TextUpload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const TextConvert = () => {
  return (
    <div className="h-screen w-full p-6">
      <div className="h-full w-full rounded-lg flex flex-col justify-center items-center gap-y-8 bg-white-transparent">
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
