import React from 'react';
import TextUpload from '../../components/dashboard/TextUpload';
import Header from '../../components/dashboard/Header';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const TextConvert = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white-transparent p-6">
      <h1 className="mt-10 mb-4 text-5xl font-bold text-white">
        Text to Speech Conversion
      </h1>
      <br />
      <TextUpload />
    </div>
  );
};

TextConvert.getLayout = DashboardLayout;
export default TextConvert;
