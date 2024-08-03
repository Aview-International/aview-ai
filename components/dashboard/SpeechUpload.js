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
      <div className="flex justify-center items-center bg-white-transparent rounded-xl">
        <div className= " w-3/5 rounded-lg shadow-lg text-white p-10">
          <h2 className="text-xl font-semibold text-center m-9">Record yourself or upload your own audio</h2>
          <p className="text-gray-300 text-center m-5">
            
            Enable mic access, record yourself reading some prompts and generate the sample in different voices
          </p>
          <div className="flex justify-around mb-12">
            <Button onClick={startRecording} type="primary">
              Start recording
            </Button>
            <label className="cursor-pointer">
              <div></div>
              <Button on Click={handleFileUpload} type="secondary">
                Upload audio file
              </Button>
              <input type="file" className="hidden" accept="audio/*" onChange={handleFileUpload} />
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default SpeechUpload;
