import Image from 'next/image';
import deleteIcon from '../../public/img/icons/trash.svg';

const VideoDisplay = ({ videoFile, handleVideo }) => {
  return (
    <section className="mx-auto flex h-full w-full items-center justify-center text-white">
      <div className="relative my-s3 flex h-[420px] w-[96%] items-center justify-center rounded-lg bg-white">
        {videoFile && (
          <>
            <div className="relative flex h-full w-auto items-center justify-center">
              <video
                // controls
                className="h-full object-contain"
                src={URL.createObjectURL(videoFile)}
              />
              <button
                className="absolute top-2 right-2 flex cursor-pointer items-center justify-center rounded-full bg-gray-1 p-2 text-white"
                onClick={() => handleVideo(null)}
              >
                <Image src={deleteIcon} width={20} height={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VideoDisplay;
