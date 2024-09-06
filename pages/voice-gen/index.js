import React, { useState } from 'react';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import VideoEditor from '../../components/dashboard/VideoEditor';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import UploadSection from '../../components/dashboard/UploadSection';

const VoiceoverGenerator = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [language, setLanguage] = useState({
    fromLanguage: '',
    toLanguage: '',
  });

  const handleFileUpload = (file) => {
    setVideoFile(file);
  };

  const handleFileRemove = () => {
    setVideoFile(null);
  };

  const handleLanguageChange = (type, value) => {
    setLanguage((prevLanguage) => ({
      ...prevLanguage,
      [type]: value,
    }));
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center h-full justify-center md:flex-row">
        <UploadSection
          onFileUpload={setVideoFile}
          isVoiceGen={true}
          onLanguageChange={handleLanguageChange}
          videoFile={videoFile}
          languagesArray={language}
        />
        <VideoDisplay videoFile={videoFile} setVideoFile={setVideoFile} />
      </div>
      {/* <VideoEditor subtitles={subtitles} onSubtitlesChange={handleSubtitlesChange} videoRef={videoRef} /> */}
    </div>
  );
};
VoiceoverGenerator.getLayout = DashboardLayout;

export default VoiceoverGenerator;
