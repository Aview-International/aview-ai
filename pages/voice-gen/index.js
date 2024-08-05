import React, { useState } from 'react';
import Header from '../../components/dashboard/Header';
import VoiceoverUpload from '../../components/dashboard/VoiceoverUpload';
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
    setTranslatedLanguage(language);
  };

  const handleSubtitlesChange = (subtitles) => {
    setSubtitles(subtitles);
  };

  return (
    <>
      <div className="flex h-3/4 w-full flex-row">
        <DashboardSidebar>
          <UploadSection onFileUpload={handleFileUpload} isVoiceGen={true} />
        </DashboardSidebar>

        <VideoDisplay videoFile={videoFile} subtitles={subtitles} />
      </div>
      <SubtitleEditor
        subtitles={subtitles}
        onSubtitlesChange={handleSubtitlesChange}
      />
    </>
  );
};

VoiceoverGenerator.getLayout = DashboardLayout;
export default VoiceoverGenerator;
