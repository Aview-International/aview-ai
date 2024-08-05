import React from 'react';
import SpeechUpload from '../../components/dashboard/SpeechUpload';
import Header from '../../components/dashboard/Header';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const SpeechConvert = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white-transparent p-6">
      <h1 className=" mb-4 text-7xl font-bold text-white">
        Speech to Text Conversion
      </h1>
      <br />

      <SpeechUpload />
    </div>
  );
};

SpeechConvert.getLayout = DashboardLayout;
export default SpeechConvert;
