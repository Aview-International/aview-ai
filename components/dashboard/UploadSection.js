import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/UI/Button';
import UploadIcon from '../../public/img/icons/upload.svg';
import Caption from '../../public/img/icons/Caption.svg';
import Translate from '../../public/img/icons/Translate.svg';
import CustomSelectInput from '../FormComponents/CustomSelectInput';

const UploadSection = ({ onFileUpload, isVoiceGen = false }) => {
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

      {!isVoiceGen ? (
        <ImageSection
          image={UploadIcon}
          handleFileChange={handleFileChange}
          text="Automatically generate captions based on your video"
        />
      ) : (
        <div className="flex h-full w-full flex-row items-center justify-center gap-x-2">
          <ImageSection
            image={Caption}
            handleFileChange={handleFileChange}
            text="Upload your own voiceover file to be converted into a new language"
            isVoiceGen={isVoiceGen}
          />
          <ImageSection
            image={Translate}
            handleFileChange={handleFileChange}
            text="Automatically convert your voiceover to a new language based on your content"
            isVoiceGen={isVoiceGen}
          />
        </div>
      )}

      <div className="flex flex-col items-start justify-center">
        <p className="my-3 text-sm">What languages do you want translated?</p>
        <div className="flex w-full flex-row items-center justify-around">
          <CustomSelectInput
            options={options}
            onChange={(option) =>
              setPayload({ ...payload, originLanguage: option })
            }
            value={payload.originLanguage}
            className="mr-2 flex-grow-[2]"
          />
          <span className="text-white">→</span>
          <CustomSelectInput
            options={options}
            onChange={(option) =>
              setPayload({ ...payload, translatedLanguage: option })
            }
            value={payload.translatedLanguage}
            className="mr-2 flex-grow-[2]"
          />
        </div>
        <div className="mt-6">
          <Button type="secondary" purpose="onClick">
            {!isVoiceGen ? 'Generate Subtitles' : 'Convert'}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ImageSection = ({
  image,
  handleFileChange,
  text,
  isVoiceGen = false,
}) => {
  return (
    <>
      <input
        type="file"
        className="hidden"
        accept="video/mp4"
        onChange={handleFileChange}
        id="video_upload"
      />
      <label className="cursor-pointer" htmlFor="video_upload">
        <div className="flex flex-col items-center rounded-xl bg-white-transparent py-s2">
          <Image
            src={image}
            alt="Upload"
            width={130}
            id="video_upload"
            height={isVoiceGen ? 100 : 140}
          />
          <p className={`${isVoiceGen} ? 'text-sm' : 'text-xs'`}>{text}</p>
        </div>
      </label>
    </>
  );
};

export default UploadSection;
