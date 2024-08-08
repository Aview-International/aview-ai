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
    originLanguage: 'English',
    translatedLanguage: '',
  });

  return (
    <div className="mt-2 rounded-xl bg-white-transparent px-3 pt-3 pb-s10 text-white w-1/3" style={{ height: 'auto', maxHeight: '75vh', maxWidth: '33.333%' }}> {/* Width control added */}
      <h1 className="mb-5 text-xl">
        {isVoiceGen ? "Multilingual Voiceover Generator" : "Subtitle Generator"}
      </h1>
      <p className="my-5 pt-3 px-3 text-md text-white">
        {isVoiceGen ? "How do you want to add your voiceover?" : "Upload your video file"}
      </p>

      {!isVoiceGen ? (
        <ImageSection
          image={UploadIcon}
          handleFileChange={handleFileChange}
          title="Upload file"
          text="Automatically generate captions based on your video"
        />
      ) : (
        <div className="flex h-auto w-full flex-row items-center justify-center gap-x-2">
          <ImageSection
            image={Caption}
            handleFileChange={handleFileChange}
            title="Upload voiceover file"
            text="Upload your own voiceover file to be converted into a new language"
          />
          <ImageSection
            image={Translate}
            handleFileChange={handleFileChange}
            title="Contextual voiceover"
            text="Automatically convert your voiceover to a new language based on your content"
          />
        </div>
      )}

      <div className="flex flex-col items-start justify-center mt-4">
        <p className="my-3 py-2 px-4 text-md">
          What language{!isVoiceGen ? 's' : ''} do you want translated?
        </p>
        <div className="flex w-full flex-row items-center justify-around">
          <CustomSelectInput
            options={options}
            onChange={(option) =>
              setPayload({ ...payload, originLanguage: option })
            }
            value={payload.originLanguage}
            className="mr-2 flex-grow-[2]"
          />
          <span className="text-white text-4xl">→</span>
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
        <div className="mt-6 px-12 py-5 w-full">
          <Button type="secondary" purpose="onClick" className="w-2">
            {isVoiceGen ? 'Convert' : 'Generate subtitles'}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ImageSection = ({ image, handleFileChange, title, text }) => {
  return (
    <>
      <input
        type="file"
        className="hidden"
        accept={title === "Upload file" ? "video/*" : "audio/*"}
        onChange={handleFileChange}
        id={title === "Upload file" ? "video_upload" : "voiceover_upload"}
      />
      <label className="cursor-pointer" htmlFor={title === "Upload file" ? "video_upload" : "voiceover_upload"}>
        <div className="flex flex-col items-center justify-center rounded-xl bg-white-transparent py-8 px-4">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
          />
          <h3 className="text-lg font-semibold mt-4">{title}</h3>
          <p className="text-sm text-center mt-2 text-gray-400">{text}</p>
        </div>
      </label>
    </>
  );
};

export default UploadSection;
