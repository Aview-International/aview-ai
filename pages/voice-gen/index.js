import React, { useState } from 'react';
import Header from '../../components/dashboard/Header';
import VoiceoverUpload from '../../components/dashboard/VoiceoverUpload';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import SubtitleEditor from '../../components/dashboard/SubtitleEditor';

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
    <div className="flex flex-col items-stretch bg-black min-h-screen p-6">
      <Header />
     
      <div className="flex justify-center items-center  ">
        <VoiceoverUpload onFileUpload={handleFileUpload} />
        <div className="flex flex-col flex-1 ml-6">
          <VideoDisplay videoFile={videoFile} subtitles={subtitles} />
          <SubtitleEditor subtitles={subtitles} onSubtitlesChange={handleSubtitlesChange} />
        </div>
      </div>
    </div>
  );
};

export default VoiceoverGenerator;