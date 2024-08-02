import React, { useState } from 'react';
import Border from '../../components/UI/Border';
import Button from '../../components/UI/Button';

const VidDownload = () => {
  const [videoLink, setVideoLink] = useState('');

  return (
    <div className="w-full h-screen bg-white-transparent flex flex-col items-center justify-center">
      <h1 className="text-white text-7xl font-bold mb-8">YouTube Video Downloader</h1>

      <div className="flex flex-row items-center justify-center">
      <Border borderRadius="md" classes="w-1/3 mb-4">
        <input
          type="text"
          placeholder="Paste video link here"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="w-full p-4 bg-transparent text-white outline-none border-none"
        />
      </Border>
      <div className="flex space-x-4">
        <Button type="primary" onClick={() => console.log('Downloading...')}>
          Download
        </Button>
      </div>


      </div>
      
    </div>
  );
};

export default VidDownload;
