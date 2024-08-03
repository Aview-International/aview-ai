import React, { useState } from 'react';
import Border from '../../components/UI/Border';
import Button from '../../components/UI/Button';

const VidDownload = () => {
  const [videoLink, setVideoLink] = useState('');

  return (
    <div className="w-full h-screen bg-white-transparent flex flex-col items-center">
      <h1 className="text-white text-7xl font-bold mt-20 pt-20 ">YouTube Video Downloader</h1>

      <div className="flex flex-row items-center w-3/5 justify-center rounded-xl m-5">
      <Border borderRadius="md" classes="w-2/3 mb-4 rounded-xl">
      <div className="bg-black rounded-xl w-full h-full">
        <input
          type="text"
          placeholder="Paste video link here"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="w-full p-4 bg-transparent text-white outline-none border-none"
        />
        </div>
      </Border>
      <div className="flex m-5">
        <Button type="primary" onClick={() => console.log('Downloading...')}>
          Download
        </Button>
      </div>


      </div>
      
    </div>
  );
};

export default VidDownload;
