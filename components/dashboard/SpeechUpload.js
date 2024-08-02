import Button from '../../components/UI/Button';
import React from 'react';

const SpeechUpload = () => {
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      console.log('File uploaded:', file.name);
      // Process the file or update state here
    };
  
    const startRecording = () => {
      console.log('Start recording');
      // Implement recording logic or trigger recording here
    };
  
    return (
      <div className="flex justify-center items-center bg-black">
        <div className="bg-white-transparent w-full max-w-lg rounded-lg shadow-lg text-white p-10">
          <h2 className="text-xl font-semibold text-center mb-4">Record yourself or upload your own audio</h2>
          <p className="text-gray-300 text-center mb-6">
            
            Enable mic access, record yourself reading some prompts and generate the sample in different voices
          </p>
          <div className="flex justify-around">
            <Button onClick={startRecording} type="primary">
              Start recording
            </Button>
            <label className="cursor-pointer">
              <span className=" text-white rounded-full px-6 py-2 inline-block hover:bg-gray-700 hover:text-gray-200">
                Upload audio file
              </span>
              <input type="file" className="hidden" accept="audio/*" onChange={handleFileUpload} />
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default SpeechUpload;
