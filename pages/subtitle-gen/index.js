import React, { useState } from 'react';
import UploadSection from '../../components/dashboard/UploadSection';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import SubtitleEditor from '../../components/dashboard/SubtitleEditor';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import DashboardSidebar from '../../components/dashboard/Sidebar';

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
    <>
      <div className="flex h-1/2 w-full flex-row">
        <DashboardSidebar>
          
        </DashboardSidebar>
        <div className="flex flex-1 flex-row">
        <UploadSection
            onFileUpload={handleFileUpload}
            onLanguageChange={handleLanguageChange}
          />

        <VideoDisplay videoFile={videoFile} subtitles={subtitles} />
        </div>
      </div>
      <SubtitleEditor
        subtitles={subtitles}
        onSubtitlesChange={handleSubtitlesChange}
      />
    </>
  );
};

SubtitleGenerator.getLayout = DashboardLayout;

export default SubtitleGenerator;
