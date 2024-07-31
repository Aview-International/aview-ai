import React from 'react';

const VideoDisplay = ({ videoFile }) => {
  return (
    <div className="w-3/3 h-2/3 bg-white p-4">
      <h2 className="text-black text-2xl mb-4">Project Name</h2>
      {videoFile ? (
        <video
          controls
          className="w-full h-full"
          src={URL.createObjectURL(videoFile)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-black">No video selected</p>
        </div>
      )}
    </div>
  );
};

export default VideoDisplay;
