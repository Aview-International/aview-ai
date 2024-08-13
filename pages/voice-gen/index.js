import React, { useState } from 'react';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import VideoEditor from '../../components/dashboard/VideoEditor';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import DashboardSidebar from '../../components/dashboard/Sidebar';
import UploadSection from '../../components/dashboard/UploadSection';

const VoiceoverGenerator = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [subtitles, setSubtitles] = useState([]);

  const handleFileUpload = (file) => {
    setVideoFile(file);
  };

  const handleLanguageChange = (language) => {
    // setTranslatedLanguage(language); This function needs to be defined or removed if not used
  };

  const handleSubtitlesChange = (subtitles) => {
    setSubtitles(subtitles);
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex flex-grow overflow-hidden">
       
        <div className="flex flex-col w-full">
          <div className="flex flex-grow">
            <UploadSection onFileUpload={handleFileUpload} isVoiceGen={true} />
            <VideoDisplay videoFile={videoFile} subtitles={subtitles} />
          </div>
        </div>
    </div>
    <VideoEditor subtitles={subtitles} onSubtitlesChange={handleSubtitlesChange} />
    </div>
  );
};
VoiceoverGenerator.getLayout = DashboardLayout;

export default VoiceoverGenerator;
