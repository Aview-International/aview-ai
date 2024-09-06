import React, { useState, useRef } from 'react';
import UploadSection from '../../components/dashboard/UploadSection';
import VideoDisplay from '../../components/dashboard/VideoDisplay';
import VideoEditor from '../../components/dashboard/VideoEditor';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import ErrorHandler from '../../utils/errorHandler';
import { TRANSCRIBE_VIDEO } from '../../graphql/ai-tools';

const SubtitleGenerator = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subtitles, setSubtitles] = useState([]);
  const [fileName, setFileName] = useState('');
  const [language, setLanguage] = useState({
    fromLanguage: '',
    toLanguage: '',
  });

  const [uploadFile, { loading }] = useMutation(TRANSCRIBE_VIDEO, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
      ErrorHandler(err.message);
    },
  });

  const handleLanguageChange = (type, value) => {
    setLanguage((prevLanguage) => ({
      ...prevLanguage,
      [type]: value,
    }));
  };

  const handleSubtitlesChange = (updatedSubtitles) => {
    setSubtitles(updatedSubtitles);
  };

  const getSubtitle = async () => {
    if (videoFile == null) {
      toast.error('Please upload video');
      return;
    }

    uploadFile({ variables: { file: videoFile } });
    // if (language.fromLanguage === '' || language.toLanguage === '') {
    //   toast.error('Please select languages');
    //   return;
    // }
    // if (language.fromLanguage === language.toLanguage) {
    //   toast.error('Languages must be different');
    //   setLanguage({ ...language, toLanguage: '' });
    //   return;
    // }
    // console.log('loading');
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
    <div className="w-full h-full">
      <div className="flex flex-col items-center h-full justify-center md:flex-row">
        <UploadSection
          handleFileName={setFileName}
          fileName={fileName}
          onLanguageChange={handleLanguageChange}
          videoFile={videoFile}
          languagesArray={language}
          getTranscribedText={getSubtitle}
          handleVideo={setVideoFile}
        />
        <VideoDisplay
          videoFile={videoFile}
          // subtitles={subtitles}
          // videoRef={videoRef}
          handleVideo={setVideoFile}
        />
      </div>
    </div>
  );
};

SubtitleGenerator.getLayout = DashboardLayout;

export default SubtitleGenerator;
