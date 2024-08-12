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
  const options = ['English', 'Hindi', 'Spanish', 'Portuguese', 'Arabic'];
  const [payload, setPayload] = useState({
    originLanguage: '',
    translatedLanguage: '',
  });

  return (
    <div className="mt-2 w-1/3 rounded-xl bg-white-transparent px-3 pt-3 pb-s10 text-white">
      <h1 className="mb-5 text-xl">
        {isVoiceGen ? 'Multilingual Voiceover Generator' : 'Subtitle Generator'}
      </h1>
      <p className="mt-5 mb-2 text-sm text-white">
        {isVoiceGen
          ? 'How do you want to add your voiceover?'
          : 'Upload your video file'}
      </p>

      {!isVoiceGen ? (
        <ImageSection
          image={UploadIcon}
          handleFileChange={handleFileChange}
          title="Upload file"
          text="Automatically generate captions based on your video"
        />
      ) : (
        <div className="flex h-48 w-full flex-row gap-x-2">
          <ImageSection
            image={Caption}
            handleFileChange={handleFileChange}
            title="Upload voiceover file"
            text="Upload your own voiceover file to be converted into a new language"
            isVoiceGen={isVoiceGen}
          />
          <ImageSection
            image={Translate}
            handleFileChange={handleFileChange}
            title="Contextual voiceover"
            text="Automatically convert your voiceover to a new language based on your content"
            isVoiceGen={isVoiceGen}
          />
        </div>
      )}

      <div className="mt-4 flex flex-col items-start justify-center">
        <p className="py-2 text-sm">
          What language{!isVoiceGen ? 's' : ''} do you want translated?
        </p>
        <div className="flex w-full flex-row items-center justify-between">
          <CustomSelectInput
            options={options}
            onChange={(option) =>
              setPayload({ ...payload, originLanguage: option })
            }
            value={payload.originLanguage}
            className="mr-2 flex-grow-[2]"
          />
          <span className="text-4xl text-white">→</span>
          <CustomSelectInput
            options={options}
            onChange={(option) =>
              setPayload({ ...payload, translatedLanguage: option })
            }
            value={payload.translatedLanguage}
            className="mr-2 flex-grow-[2]"
            placeholder="Select"
          />
        </div>
        <div className="mt-6 w-full">
          <Button type="secondary" purpose="onClick" className="w-2">
            {isVoiceGen ? 'Convert' : 'Generate subtitles'}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ImageSection = ({
  image,
  handleFileChange,
  title,
  text,
  isVoiceGen = false,
}) => {
  return (
    <>
      <input
        type="file"
        className="hidden"
        accept={title === 'Upload file' ? 'video/*' : 'audio/*'}
        onChange={handleFileChange}
        id={title === 'Upload file' ? 'video_upload' : 'voiceover_upload'}
      />
      <label
        className="cursor-pointer"
        htmlFor={title === 'Upload file' ? 'video_upload' : 'voiceover_upload'}
      >
        <div
          className={`flex flex-col items-center justify-center gap-y-1 rounded-xl bg-white-transparent ${
            isVoiceGen ? 'py-2.5 px-0.5' : 'py-8 px-2'
          }`}
        >
          <Image src={image} alt={title} width={60} height={80} />
          <p
            className={`${isVoiceGen ? 'text-base' : 'text-lg'} font-semibold`}
          >
            {title}
          </p>
          <p
            className={`text-white/70 text-center ${
              isVoiceGen ? 'text-xs' : 'text-sm'
            }`}
          >
            {text}
          </p>
        </div>
      </label>
    </>
  );
};

export default UploadSection;
