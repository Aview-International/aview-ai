import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/UI/Button';
import UploadIcon from '../../public/img/icons/upload.svg';
import CustomSelectInput from '../FormComponents/CustomSelectInput';

const SubtitleUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };
  const options = ['English', 'Hindi', 'Spanish', 'Portguese', 'Arabic'];
  const [payload, setPayload] = useState({
    originLanguage: '',
    translatedLanguage: '',
  });

  return (
    <div className="mt-2 rounded-xl bg-white-transparent px-3 pt-3 pb-s10 text-white">
      <h1 className="mb-5 text-xl">Subtitle Generator</h1>
      <p className="my-5 text-sm text-white/60">Upload your video file</p>
      <div>
        <input
          type="file"
          className="hidden"
          accept="video/mp4"
          onChange={handleFileChange}
          id="video_upload"
        />
        <label className="cursor-pointer" htmlFor="video_upload">
          <div className="flex flex-col items-center rounded-xl bg-white-transparent py-s2">
            <Image src={UploadIcon} alt="Upload" width={130} height={140} />
            <p className="text-sm">
              Automatically generate captions based on your video
            </p>
          </div>
        </label>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="my-3 text-sm">What languages do you want translated?</p>
        <div className="flex w-full flex-row items-center justify-around">
          <CustomSelectInput
            options={options}
            onChange={(option) =>
              setPayload({ ...payload, originLanguage: option })
            }
            value={payload.originLanguage}
            className="flex-grow-[2] mr-2"
          />
          <span className="text-white">→</span>
          <CustomSelectInput
            options={options}
            onChange={(option) =>
              setPayload({ ...payload, translatedLanguage: option })
            }
            value={payload.translatedLanguage}
            className="flex-grow-[2] mr-2"
          />
        </div>
        <div className="mt-6">
          <Button type="secondary" purpose="onClick">
            Generate subtitles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubtitleUpload;
