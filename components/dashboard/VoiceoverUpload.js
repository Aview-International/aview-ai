import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import CustomSelectInput from '../FormComponents/CustomSelectInput';

const VoiceUpload = ({ onFileUpload }) => {
  const [payload, setPayload] = useState({
    originLanguage: 'English',
    translatedLanguage: '',
  });

  const options = ['English', 'Spanish', 'French']; // Add more

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div className="h-full w-1/3 rounded-xl bg-white-transparent px-6 pt-4 pb-11">
      <h1 className="mb-6 text-2xl font-bold text-white">
        Multilingual Voiceover Generator
      </h1>
      <p className="mb-4 text-white">How do you want to add your voiceover?</p>
      <div className="mb-6 flex space-x-4">
        <div className="flex-1 cursor-pointer rounded-xl bg-white-transparent p-6">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 mb-2 h-12 w-12 rounded-lg"></div>
            <p className="text-lg font-semibold text-white">
              Upload voiceover file
            </p>
            <p className="mt-3 text-center text-sm text-white">
              Upload your own voiceover file to be converted into a new language
            </p>
          </div>
        </div>
        <div className="flex-1 cursor-pointer rounded-xl bg-white-transparent p-6">
          <div className="flex flex-col items-center">
            {/* Placeholder for contextual icon */}
            <div className="bg-blue-500 mb-2 h-12 w-12 rounded-lg"></div>
            <p className="text-lg font-semibold text-white">
              Contextual voiceover
            </p>
            <p className="mt-2 text-center text-sm text-white">
              Automatically convert your voiceover to a new language based on
              your content
            </p>
          </div>
        </div>
      </div>
      <p className="mb-4 text-white">What language do you want translated?</p>
      <div className="mb-6 flex w-full flex-row items-center justify-evenly">
        <CustomSelectInput
          options={options}
          onChange={(option) =>
            setPayload({ ...payload, originLanguage: option })
          }
          value={payload.originLanguage}
        />
        <span className="mx-2 text-white">→</span>
        <CustomSelectInput
          options={options}
          onChange={(option) =>
            setPayload({ ...payload, translatedLanguage: option })
          }
          value={payload.translatedLanguage}
        />
      </div>
      <Button type="secondary" purpose="onClick" onClick={() => {}}>
        Convert
      </Button>
    </div>
  );
};

export default VoiceUpload;
