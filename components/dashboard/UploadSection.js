
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/UI/Button';
import Border from '../../components/UI/Border';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';

const UploadSection = ({ onFileUpload, onLanguageChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div className="w-1/3 h-full pt-4 pb-11 px-3 rounded-xl bg-white-transparent">
      <h1 className="text-white text-2xl pb-11 b-4">Subtitle Generator</h1>
      <p className="text-white py-3">Upload your video file</p>
      <div className="bg-white-transparent rounded-xl border-white p-6 mb-4">
        <input
          type="file"
          className="hidden"
          accept="video/mp4"
          onChange={handleFileChange}
          id="video_upload"
        />
        <label className="cursor-pointer" htmlFor="video_upload">
          <div className="flex flex-col  items-center m-4">
            <img src="/upload-icon.svg" alt="Upload" className="h-16 mb-4" />
            <p className="text-white text-xl">Upload file</p>
            <p className="text-white text-sm m-3">Automatically generate captions based on your video</p>
          </div>
        </label>
      </div>
      <div className="flex items-center mb-4">
        <div className = "m-2">
      <p className="text-white text-sm py-3">What languages do you want translated?</p>
      </div>


      <Button type="secondary" purpose="onClick" onClick={() => {}}>
         <select className="mr-2 bg-black text-white p-2" onChange={(e) => onLanguageChange(e.target.value)}>
          <option value="English">English</option>
        </select>
        </Button>
       
        <span className="text-white mx-2">to</span>

        <Button type="secondary" purpose="onClick" onClick={() => {}}>
        <select className="ml-2 bg-black text-white p-2" onChange={(e) => onLanguageChange(e.target.value)}>
          <option value="Select">Select</option>
        </select>
        </Button>
        
      </div>
      <div className="flex justify-between">
        <Button type="secondary" purpose="onClick" onClick={() => {}}>
          Generate subtitles
        </Button>
      </div>
    </div>
  );
};

export default UploadSection;