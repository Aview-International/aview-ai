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
  const [isLoading, setIsLoading] = useState(true);
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
        } text-center text-5xl font-bold text-white`}
      >
        YouTube Video Downloader
      </h1>
      <div className="m-3 flex w-[90%] flex-col items-center justify-center gap-y-5 md:m-5 md:w-3/5 md:flex-row md:gap-x-5">
        <Border borderRadius="md" classes="w-full md:w-2/3 rounded-xl">
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
        <div className="mys1 flex w-[90%] flex-col justify-center overflow-y-scroll md:mt-s4 md:w-full md:flex-row md:items-start md:gap-x-10">
          <div className="h-48 w-full rounded-lg bg-white p-0.5 md:h-80 md:w-[540px]">
            <video controls className="h-full w-full rounded-lg">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col items-start justify-center gap-y-1.5 md:gap-y-3">
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
            className="mb-1 mt-3 w-full rounded-md bg-white-transparent p-1 md:mb-2 md:mt-0 md:w-[540px] md:p-2"
            key={index}
          >
            <p className="border-b border-white/60 p-1 md:p-2">
              {option.title}
            </p>
            {option.optionsArray.map((optionArray, index) => {
              return (
                <div
                  className={`grid w-full grid-cols-[1fr_1fr_2fr] place-content-center lg:grid-cols-3 ${
                    index != option.optionsArray.length - 1 &&
                    'border-b border-white-transparent'
                  }`}
                  key={index}
                >
                  <p className="flex items-center justify-start border-x-0 border-r border-white-transparent pl-1.5 md:pl-3">
                    {optionArray.type}
                  </p>
                  <p className="flex items-center justify-start border-x-0 border-r border-white-transparent pl-1.5 md:pl-3">
                    {optionArray.size}
                  </p>
                  <div className="flex items-center justify-start py-1 pl-1.5 md:py-2 md:pl-3">
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
