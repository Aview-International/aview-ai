import React, { useState } from 'react';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import SubtitleEditor from '../../components/dashboard/SubtitleEditor';
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
    <div className="h-screen w-full p-6">
      <div className="flex w-full">
        <UploadSection onFileUpload={handleFileUpload} isVoiceGen={true} />
        <VideoDisplay videoFile={videoFile} subtitles={subtitles} />
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
