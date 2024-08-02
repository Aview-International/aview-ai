import React from 'react';
import TextUpload from '../../components/dashboard/TextUpload';
import Header from '../../components/dashboard/Header';

const TextConvert = () => {
  return (
    <div>
        <Header/>
        <div className="bg-black min-h-screen p-6 flex flex-row items-center justify-center">
      <h1 className="text-white text-7xl font-bold mb-4">Text to Speech Conversion</h1>
      <br/>
      <TextUpload />
      </div>
      
      <div/>
    </div>
  );
};

export default TextConvert;
