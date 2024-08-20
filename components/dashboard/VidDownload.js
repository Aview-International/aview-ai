import React, { useState } from 'react';
import Border from '../../components/UI/Border';
import Button from '../../components/UI/Button';
import { toast } from 'react-toastify';
import { getYoutubeVideo } from '../../services/apis';
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
const VidDownload = () => {
  const [videoLink, setVideoLink] = useState('');
  const [videoUrl, setVideoUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [videoOptions, setVideoOptions] = useState(options);

  const handleDownload = async () => {
    if (!videoLink) {
      toast.error('Enter the url to download');
      return;
    }
    try {
      const videoData = await getYoutubeVideo(videoLink);
      const videoBlob = await videoData.blob();
      const videoObjectUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoObjectUrl);
      const videoOptions = videoData.videoOptions;
      setVideoOptions([
        {
          title: 'Video',
          optionsArray: videoOptions.filter((option) => option.type === 'MP4'),
        },
        {
          title: 'Audio',
          optionsArray: videoOptions.filter((option) => option.type === 'MP3'),
        },
      ]);
      setIsLoading(true);
      setVideoLink('');
    } catch (e) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center text-white">
      <h1
        className={`${
          isLoading ? 'mt-s10' : 'mt-s24'
        } text-5xl font-bold text-white`}
      >
        YouTube Video Downloader
      </h1>
      <div className="m-5 flex w-3/5 flex-row justify-center gap-x-5">
        <Border borderRadius="md" classes="w-2/3 rounded-xl">
          <div className="h-full rounded-xl bg-black">
            <input
              type="text"
              placeholder="Paste video link here"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              className="border-none bg-transparent p-4 text-white outline-none"
            />
          </div>
        </Border>
        <Button type="primary" onClick={handleDownload}>
          Download
        </Button>
      </div>
      {isLoading && (
        <div className="mt-s4 flex w-full flex-row items-start justify-center gap-x-10">
          <div className="h-80 w-[540px] rounded-lg bg-white">
            <video controls className="h-full w-full">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
