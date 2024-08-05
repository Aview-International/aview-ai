import React from 'react';

const VideoDisplay = ({ videoFile }) => {
  return (
    <section className="ml-4 w-[65%] text-white">
      <h2 className="mt-2 text-lg text-white/70">Project Name</h2>
      <div className="flex h-full w-full items-center justify-center px-s4">
        <div className="relative flex h-[70%] w-full items-center justify-center rounded-lg bg-white">
          <div className="absolute top-1/2 left-1/2 flex h-full w-64 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
            {videoFile && (
              <video
                controls
                className="h-full w-full"
                src={URL.createObjectURL(videoFile)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDisplay;
