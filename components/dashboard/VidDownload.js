import React, { useState } from 'react';
import Border from '../../components/UI/Border';
import Button from '../../components/UI/Button';

const VidDownload = ({ isLoaded }) => {
  const [videoLink, setVideoLink] = useState('');
  const options = [
    {
      title: 'Audio',
      optionsArray: [
        {
          type: 'MP3',
          size: '200',
          url: '',
        },
      ],
    },
    {
      title: 'Video',
      optionsArray: [
        {
          type: 'MP3',
          size: '200',
          url: '',
        },
        {
          type: 'MP3',
          size: '200',
          url: '',
        },
        {
          type: 'MP3',
          size: '200',
          url: '',
        },
      ],
    },
  ];

  return (
    <div className="flex h-full flex-col items-center">
      <h1
        className={`${
          isLoaded ? 'mt-s10' : 'mt-s24'
        } text-5xl font-bold text-white`}
      >
        YouTube Video Downloader
      </h1>

      <div className="m-5 flex w-3/5 flex-row items-center justify-center gap-x-5 rounded-xl">
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

        <Button type="primary" onClick={() => console.log('Downloading...')}>
          Download
        </Button>
      </div>
      {isLoaded && (
        <div className="mt-s4 flex w-full flex-row items-start justify-center gap-x-10">
          <div className="h-80 w-[540px] rounded-lg bg-white"></div>
          <div className="flex flex-col items-start justify-center gap-y-3">
            <TableView options={options} />
          </div>
        </div>
      )}
    </div>
  );
};

const TableView = ({ options }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <div
            className="mb-2 w-[540px] rounded-md bg-white-transparent p-2"
            key={index}
          >
            <p className="border-b border-white/60 p-2">{option.title}</p>
            {option.optionsArray.map((optionArray, index) => {
              return (
                <div
                  className={`grid w-full grid-cols-3 place-content-center ${
                    index != option.optionsArray.length - 1 &&
                    'border-b border-white-transparent'
                  }`}
                  key={index}
                >
                  <p className="flex items-center justify-start border-x-0 border-r border-white-transparent pl-3">
                    {optionArray.type}
                  </p>
                  <p className="flex items-center justify-start border-x-0 border-r border-white-transparent pl-3">
                    {optionArray.size}
                  </p>
                  <div className="flex items-center justify-start py-2 pl-3">
                    <Button>{optionArray.type}</Button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default VidDownload;
