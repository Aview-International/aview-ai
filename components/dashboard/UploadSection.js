import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from '../../components/UI/Button';
import UploadIcon from '../../public/img/icons/upload.svg';
import Complete from '../../public/img/icons/complete.svg';
import Caption from '../../public/img/icons/Caption.svg';
import Translate from '../../public/img/icons/Translate.svg';
import CustomSelectInput from '../FormComponents/CustomSelectInput';
import { toast } from 'react-toastify';

const UploadSection = ({
  handleFileName,
  fileName,
  isVoiceGen = false,
  onLanguageChange,
  videoFile,
  languagesArray,
  getTranscribedText,
  handleVideo,
}) => {
  const options = ['English', 'Hindi', 'Spanish', 'Portuguese', 'Arabic'];

  return (
    <div className="mt-2 w-full max-w-md rounded-xl bg-white-transparent px-3 pt-3 pb-s8 text-white md:w-1/3">
      <h1 className="mb-5 text-lg">
        {isVoiceGen ? 'Multilingual Voiceover Generator' : 'Subtitle Generator'}
      </h1>
      <p className="mt-5 mb-2 text-white">
        {isVoiceGen
          ? 'How do you want to add your voiceover?'
          : 'Upload your video file'}
      </p>
      {!isVoiceGen ? (
        <ImageSection
          image={videoFile != null ? Complete : UploadIcon}
          title={videoFile != null ? `${fileName}` : 'Upload file'}
          text={
            videoFile != null
              ? 'Your video has been uploaded successfully'
              : 'Automatically generate captions based on your video'
          }
          handleVideo={handleVideo}
          handleFileName={handleFileName}
        />
      ) : (
        <div className="flex h-48 w-full flex-row gap-x-2">
          <ImageSection
            image={Caption}
            handleFileName={handleFileName}
            title="Upload voiceover file"
            text="Upload your own voiceover file to be converted into a new language"
            isVoiceGen={isVoiceGen}
            handleVideo={handleVideo}
          />
          <ImageSection
            image={Translate}
            handleFileName={handleFileName}
            title="Contextual voiceover"
            text="Automatically convert your voiceover to a new language based on your content"
            isVoiceGen={isVoiceGen}
            handleVideo={handleVideo}
          />
        </div>
      )}
      <div className="mt-4 flex flex-col items-start justify-center">
        <p className="py-2">
          What language{!isVoiceGen ? 's' : ''} do you want translated?
        </p>
        <div className="flex w-full flex-row items-center justify-between md:gap-x-2">
          <CustomSelectInput
            options={options}
            onChange={(e) => onLanguageChange('fromLanguage', e)}
            value={languagesArray.fromLanguage}
            className="mr-0 mb-4 flex-grow md:mr-2 md:mb-0 md:flex-grow-[2]"
          />
          <span className="text-3xl text-white">→</span>
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
  handleFileName,
  title,
  text,
  isVoiceGen = false,
  handleVideo,
}) => {
  const [isFileDragging, setIsFileDragging] = useState(false);
  const dropZoneRef = useRef(null);

  const handleVideoUpload = (file) => {
    handleVideo(file);
    handleFileName(file.name);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    try {
      if (files && files.length == 1) {
        const file = files[0];
        if (file.type.startsWith('video/')) {
          handleVideoUpload(file);
        } else {
          throw new Error('Please submit a video file.');
        }
      } else {
        throw new Error('Please submit a single video file.');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const dropZone = dropZoneRef.current;
    const handleDragOver = (e) => {
      e.preventDefault(); // Prevent default behavior to allow drop
      setIsFileDragging(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsFileDragging(false);
    };

    const handleDrop = (e) => {
      e.preventDefault(); // Prevent default behavior to handle the file drop in JavaScript
      setIsFileDragging(false);
    };

    if (dropZone) {
      dropZone.addEventListener('dragover', handleDragOver);
      dropZone.addEventListener('dragleave', handleDragLeave);
      dropZone.addEventListener('drop', handleDrop);

      // Remove event listeners on cleanup
      return () => {
        dropZone.removeEventListener('dragover', handleDragOver);
        dropZone.removeEventListener('dragleave', handleDragLeave);
        dropZone.removeEventListener('drop', handleDrop);
      };
    }
  }, []);

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      <input
        type="file"
        className="hidden"
        accept={title === 'Upload file' ? 'video/*' : 'audio/*'}
        onChange={(e) => handleVideoUpload(e.target.files[0])}
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
            className={`${
              isVoiceGen ? 'text-[10px] lg:text-[14px]' : 'text-[18px]'
            } text-center font-semibold`}
          >
            {title}
          </p>
          <p
            className={`text-center text-white/70 md:text-center ${
              isVoiceGen ? 'text-[12px] md:text-xs' : 'text-sm'
            }`}
          >
            {text}
          </p>
        </div>
      </label>
    </div>
  );
};

export default UploadSection;
