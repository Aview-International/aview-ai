import React from 'react';
import TextUpload from '../../components/dashboard/TextUpload';
import Header from '../../components/dashboard/Header';

const TextConvert = () => {
  return (
    <div>
        <Header/>
        <div className="bg-white-transparent min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-white text-7xl font-bold mt-12 mb-4">Text to Speech Conversion</h1>
      <br/>
      <TextUpload />
      </div>
      
      <div/>
    </div>
  );
};

export default TextConvert;
