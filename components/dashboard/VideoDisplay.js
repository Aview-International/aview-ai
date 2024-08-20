const VideoDisplay = ({ videoFile }) => {
  return (
    <section className="ml-4 h-full w-2/3 text-white">
      <h2 className="mt-2 text-lg text-white/70">Project Name</h2>
      <div className="relative mt-s3 flex h-[420px] w-full items-center justify-center rounded-lg bg-white">
        <div className="absolute top-1/2 left-1/2 flex h-full w-auto -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
          {videoFile && (
            <video
              controls
              className="h-full object-contain"
              src={URL.createObjectURL(videoFile)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoDisplay;
