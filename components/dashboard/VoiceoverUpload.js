import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import CustomSelectInput from '../FormComponents/CustomSelectInput';

const VoiceUpload = ({ onFileUpload, onLanguageChange }) => {
  const [payload, setPayload] = useState({
    originLanguage: 'English',
    translatedLanguage: ''
  });

  const options = ['English', 'Spanish', 'French']; // Add more 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div className="w-1/3 h-full pt-4 pb-11 px-6 rounded-xl bg-white-transparent">
      <h1 className="text-white text-2xl font-bold mb-6">Multilingual Voiceover Generator</h1>

      <p className="text-white mb-4">How do you want to add your voiceover?</p>
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 bg-white-transparent rounded-xl p-6 cursor-pointer">
          <div className="flex flex-col items-center">
            {/* Placeholder for upload icon */}
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-2"></div>
            <p className="text-white text-lg font-semibold">Upload voiceover file</p>
            <p className="text-white text-sm text-center mt-3">
              Upload your own voiceover file to be converted into a new language
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white-transparent rounded-xl p-6 cursor-pointer">
          <div className="flex flex-col items-center">
            {/* Placeholder for contextual icon */}
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-2"></div>
            <p className="text-white text-lg font-semibold">Contextual voiceover</p>
            <p className="text-white text-sm text-center mt-2">
              Automatically convert your voiceover to a new language based on your content
            </p>
          </div>
        </div>
      </div>
      <p className="text-white mb-4">What language do you want translated?</p>
      <div className="flex w-full flex-row items-center justify-evenly mb-6">
        <CustomSelectInput
          options={options}
          onChange={(option) =>
            setPayload({ ...payload, originLanguage: option })
          }
          value={payload.originLanguage}
        />
        <span className="text-white mx-2">→</span>
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