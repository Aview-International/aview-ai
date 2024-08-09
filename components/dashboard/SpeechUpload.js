import Button from '../../components/UI/Button';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AudioWave from './AudioWave';
import AudioPlayer from './AudioPlayer';

const SpeechUpload = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log('File uploaded:', file.name);
  };
  

  return (
    <div className="h-full w-2/3">
      <div className="flex h-96 w-full flex-col items-center justify-center rounded-xl bg-white-transparent px-6 py-14">
        {isRecording ? (
          <RecordAudio />
        ) : (
          <>
            <h2 className="m-5 text-center text-xl font-semibold">
              Record yourself or upload your own audio
            </h2>
            <p className="m-5 text-center justify-center w-1/2 text-white/70">
              Enable mic access, record yourself reading some prompts and
              generate the sample in different voices
            </p>
            <div className="mt-8 flex gap-x-5 justify-center items-center">
              <Button
                onClick={() => setIsRecording((isRecording) => !isRecording)}
                type="primary"
                purpose="onClick"
              >
                Start recording
              </Button>
              <label htmlFor="audio_upload">
                <Button onClick={handleFileUpload} type="secondary">
                  <span>Upload audio file</span>
                  <input
                    type="file"
                    id="audio_upload"
                    className="hidden"
                    accept="audio/*"
                  />
                </Button>
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const RecordAudio = ({  }) => {
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
    <div>
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
        toast.success(`Microphone enabled successfully, you can start recording`)}
      {
        audioRecord != null ? <AudioPlayer audioRecord={audioRecord}/> : <AudioWave setAudioRecord={setAudioRecord} />
      }
      
    </div>
  );
};

export default SpeechUpload;
