import React from 'react';
import SpeechUpload from '../../components/dashboard/SpeechUpload';
import Header from '../../components/dashboard/Header';

const SpeechConvert = () => {
  return (
    <div>
        <Header/>
        <div className="bg-white-transparent min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className=" text-white text-7xl font-bold mb-4">Speech to Text Conversion</h1>
      <br/>
     
      <SpeechUpload />
     
      
      </div>
      
      <div/>
    </div>
  );
};

export default SpeechConvert;
