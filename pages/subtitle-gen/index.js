import React, { useState } from 'react';
import UploadSection from '../../components/dashboard/UploadSection';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import VideoEditor from '../../components/dashboard/VideoEditor';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { toast } from 'react-toastify';

const SubtitleGenerator = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [language, setLanguage] = useState({
    fromLanguage: '',
    toLanguage: '',
  });

  const handleFileUpload = (file) => {
    setVideoFile(file);
    setFileName(file.name);
  };

  const handleLanguageChange = (type, value) => {
    setLanguage((prevLanguage) => ({
      ...prevLanguage,
      [type]: value,
    }));
  };

  const getSubtitle = async () => {
    if (videoFile == null) {
      toast.error('Please upload video');
      return;
    }
    if (language.fromLanguage == '' || language.toLanguage == '') {
      toast.error('Please select languages');
      return;
    }
    if (language.fromLanguage === language.toLanguage) {
      toast.error('Languages must be different');
      setLanguage({ ...language, toLanguage: '' });
      return;
    }
    console.log('loading');
    // try {
    //   const transcribedText = await getText(videoFile, language);
    //   downloadFile(transcribedText);
    //   setIsLoading(true);
    // } catch (error) {
    //   console.log(error.message);
    //   toast.error(error.message);
    // }
  };

  const downloadFile = ({ output }) => {
    if (!output) {
      toast.error('Something went wrong try again after some time');
      return;
    }
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `speech_${language}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen w-full flex-col p-6">
      <div className="flex flex-row">
        <UploadSection
          onFileUpload={handleFileUpload}
          fileName={fileName}
          onLanguageChange={handleLanguageChange}
          videoFile={videoFile}
          languagesArray={language}
          getTranscribedText={getSubtitle}
        />
        <VideoDisplay videoFile={videoFile} />
      </div>
      {/* <VideoEditor /> */}
    </div>
  );
};

SubtitleGenerator.getLayout = DashboardLayout;

export default SubtitleGenerator;
