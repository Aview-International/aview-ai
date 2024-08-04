import React from 'react';

const VideoDisplay = ({ videoFile }) => {
  return (
    <section className="ml-4 w-full flex-1 flex flex-col">
      <h2 className="mt-2 text-lg text-white/70">Project Name</h2>
      <div className="flex-1 mt-2 bg-white rounded-lg flex items-center justify-center overflow-hidden">
        {videoFile ? (
          <video
            controls
            className="max-w-full max-h-full object-contain"
            src={URL.createObjectURL(videoFile)}
          />
        ) : (
          <p className="text-gray-400">Upload a video to display here</p>
        )}
      </div>
    </section>
  );
};

export default VideoDisplay;