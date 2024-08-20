import React, { useState } from 'react';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import SubtitleEditor from '../../components/dashboard/SubtitleEditor';
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

  const handleLanguageChange = (type, value) => {
    setLanguage((prevLanguage) => ({
      ...prevLanguage,
      [type]: value,
    }));
  };

  return (
    <div className="h-screen w-full p-6">
      <div className="flex w-full">
        <UploadSection
          onFileUpload={handleFileUpload}
          isVoiceGen={true}
          onLanguageChange={handleLanguageChange}
          videoFile={videoFile}
          languagesArray={language}
        />
        <VideoDisplay videoFile={videoFile} />
      </div>
      {/* <SubtitleEditor
        subtitles={subtitles}
        onSubtitlesChange={handleSubtitlesChange}
      /> */}
    </div>
  );
};

VoiceoverGenerator.getLayout = DashboardLayout;

export default VoiceoverGenerator;
