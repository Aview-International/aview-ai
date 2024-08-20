import React, { useState } from 'react';
import UploadSection from '../../components/dashboard/UploadSection';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import VideoEditor from '../../components/dashboard/VideoEditor';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
//import DashboardSidebar from '../../components/dashboard/Sidebar';

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
    <div className="flex h-screen w-full flex-col">
      <div className="flex flex-grow overflow-hidden">

        <div className="flex flex-col w-full">
          <div className="flex flex-grow">
            <UploadSection onFileUpload={handleFileUpload} isVoiceGen={false} />
            <VideoDisplay videoFile={videoFile} subtitles={subtitles} />
          </div>
        </div>
      </div>
      <VideoEditor subtitles={subtitles} onSubtitlesChange={handleSubtitlesChange} />
    </div>
  );
};

SubtitleGenerator.getLayout = DashboardLayout;

export default SubtitleGenerator;
