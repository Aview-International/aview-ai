import React from 'react';
import Image from 'next/image';
import Button from '../../components/UI/Button';
import UploadIcon from '../../public/img/icons/upload.svg';
import Complete from '../../public/img/icons/complete.svg';
import Caption from '../../public/img/icons/Caption.svg';
import Translate from '../../public/img/icons/Translate.svg';
import CustomSelectInput from '../FormComponents/CustomSelectInput';

const UploadSection = ({
  onFileUpload,
  fileName,
  isVoiceGen = false,
  onLanguageChange,
  videoFile,
  languagesArray,
  getTranscribedText,
}) => {
  const options = ['English', 'Hindi', 'Spanish', 'Portuguese', 'Arabic'];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div className="mt-2 w-full max-w-md rounded-xl bg-white-transparent px-3 pt-3 pb-s10 text-white md:w-1/3" style={{ maxHeight: 'calc(95vh - 200px)' }}>
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
          image={videoFile != null ? Complete : UploadIcon}
          handleFileChange={handleFileChange}
          title={videoFile != null ? `${fileName}` : 'Upload file'}
          text={
            videoFile != null
              ? 'Your video has been uploaded successfully'
              : 'Automatically generate captions based on your video'
          }
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
        <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
          <CustomSelectInput
            options={options}
            onChange={(e) => onLanguageChange('fromLanguage', e)}
            value={languagesArray.fromLanguage}
            className="mr-0 mb-4 flex-grow md:mr-2 md:mb-0 md:flex-grow-[2]"
          />
          <span className="text-4xl text-white">→</span>
          <CustomSelectInput
            options={options}
            onChange={(e) => onLanguageChange('toLanguage', e)}
            value={languagesArray.toLanguage}
            className="mt-4 flex-grow md:mr-2 md:mt-0 md:flex-grow-[2]"
            placeholder="Select"
          />
        </div>
        <div className="mt-6 w-full">
          <Button
            type="secondary"
            purpose="onClick"
            className="w-full md:w-auto"
            onClick={isVoiceGen ? null : getTranscribedText}
          >
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
            className={`text-center text-white/70 ${
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
