import React, { useState } from 'react';
import Border from '../../components/UI/Border';
import Button from '../../components/UI/Button';

const VidDownload = () => {
  const [videoLink, setVideoLink] = useState('');
  const [videoDownload, setVideoDownload] = useState(false);

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="mt-s24 text-5xl font-bold text-white ">
        YouTube Video Downloader
      </h1>

      <div className="m-5 flex w-3/5 flex-row items-center justify-center rounded-xl">
        <Border borderRadius="md" classes="w-2/3 mb-4 rounded-xl">
          <div className="h-full w-full rounded-xl bg-black">
            <input
              type="text"
              placeholder="Paste video link here"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              className="w-full border-none bg-transparent p-4 text-white outline-none"
            />
          </div>
        </Border>
        <div className="m-5 flex">
          <Button type="primary" onClick={() => console.log('Downloading...')}>
            Download
          </Button>
        </div>
      </div>
      {
        videoDownload && 
        <div className='flex flex-row justify-center items-center gap-x-16 w-full'>
          <div className='w-60 h-80 bg-red'></div>
          <div className='flex flex-col justify-center items-start gap-y-5'>
            <TableView />
          </div>
        </div>
      }
    </div>
  );
};


const TableView = ({ options, title }) => {
  return (
    <>
    
      
    </>
  )
}

export default VidDownload;
