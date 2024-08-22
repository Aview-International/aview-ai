import Button from '../../components/UI/Button';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AudioWave from './AudioWave';
import AudioPlayer from './AudioPlayer';

const SpeechUpload = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  };

  return (
    <div className="h-3/5 md:w-4/5 w-full text-white px-4">
      <div className="flex h-full flex-col justify-center items-center gap-y-5 rounded-xl bg-white-transparent">
        {isRecording ? (
          <RecordAudio />
        ) : (
          <StartRecording
            setIsRecording={setIsRecording}
            handleFileUpload={handleFileUpload}
          />
        )}
      </div>
    </div>
  );
};

const RecordAudio = () => {
  const [micState, setMicState] = useState('waiting');
  const [audioRecord, setAudioRecord] = useState();

  const getPermissionInitializeRecorder = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setMicState('allowed');
    } catch (error) {
      setMicState('denied');
    }
  };
  useEffect(() => {
    getPermissionInitializeRecorder();
  }, []);
  return (
    <>
      {micState === 'waiting' &&
        toast.error(`Waiting for microphone usage, please allow microphone access to record
          voice sample 🎙️`)}
      {micState === 'denied' &&
        toast.error(`
          Unfortunately, we are unable to access the microphone to enable voice
          recording. Please check your privacy settings to allow microphone
          usage 😪🎙️
          `)}
      {micState === 'allowed' &&
        toast.success(
          `Microphone enabled successfully, you can start recording`
        )}
      {audioRecord != null ? (
        <AudioPlayer audioRecord={audioRecord} />
      ) : (
        <AudioWave setAudioRecord={setAudioRecord} />
      )}
    </>
  );
};

const StartRecording = ({ setIsRecording, handleFileUpload }) => {
  return (
    <div className="px-3 md:px-6">
      <h2 className="text-center text-xl font-semibold">
        Record yourself or upload your own audio
      </h2>
      <p className="w-full md:w-2/4 mx-auto md:mt-2 mt-4 text-center text-white/60">
        Enable mic access, record yourself reading some prompts and generate the
        sample in different voices
      </p>
      <div className="mt-4 md:mt-8 flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-5">
        <Button
          onClick={() => setIsRecording((isRecording) => !isRecording)}
          type="primary"
          purpose="onClick"
          className="w-full"
        >
          Start recording
        </Button>
        <label htmlFor="audio_upload">
          <Button type="secondary">
            <span>Upload audio file</span>
            <input
              type="file"
              id="audio_upload"
              className="hidden"
              accept="audio/*"
              onChange={handleFileUpload}
            />
          </Button>
        </label>
      </div>
    </div>
  );
};

export default SpeechUpload;
