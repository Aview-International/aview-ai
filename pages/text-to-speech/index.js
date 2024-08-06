import React from 'react';
import TextUpload from '../../components/dashboard/TextUpload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const TextConvert = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start rounded-lg bg-white-transparent p-6 pt-s10">
      <h1 className="mb-4 text-5xl font-bold text-white">
        Text to Speech Conversion
      </h1>
      <TextUpload />
    </div>
  );
};

TextConvert.getLayout = DashboardLayout;
export default TextConvert;
