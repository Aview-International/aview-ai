import React, { useState } from 'react';
import UploadSection from '../../components/dashboard/UploadSection';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import SubtitleEditor from '../../components/dashboard/SubtitleEditor';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const SubtitleGenerator = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [translatedLanguage, setTranslatedLanguage] = useState('');
  const [subtitles, setSubtitles] = useState([]);

  const handleFileUpload = (file) => {
    setVideoFile(file);
  };

  const handleLanguageChange = (language) => {
    setTranslatedLanguage(language);
  };

  const handleSubtitlesChange = (subtitles) => {
    setSubtitles(subtitles);
  };

  return (
    <div className="h-screen w-full flex-col p-6">
      <div className="flex flex-row">
        <UploadSection
          onFileUpload={handleFileUpload}
          onLanguageChange={handleLanguageChange}
        />
        <VideoDisplay videoFile={videoFile} subtitles={subtitles} />
      </div>
      {/* <SubtitleEditor
        subtitles={subtitles}
        onSubtitlesChange={handleSubtitlesChange}
      /> */}
    </div>
  );
};

SubtitleGenerator.getLayout = DashboardLayout;

export default SubtitleGenerator;
