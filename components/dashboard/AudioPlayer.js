import { useState } from 'react';
import PlayIcon from '../../public/img/icons/play.svg';
import PauseIcon from '../../public/img/icons/pause.svg';
import Image from 'next/image';
import Button from '../UI/Button';
import CustomSelectInput from '../FormComponents/CustomSelectInput';

const AudioPlayer = ({ audioRecord }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false)

  const onPlayClick = () => {};

  return (
    <>
      {isNextPage ? (
        <TranslatePage />
      ) : (
        <>
          <div className="flex h-[90%] w-full flex-col items-center justify-center gap-y-5">
            <p>Whisper this</p>
            <p>We gonna get this thing right away for translate!</p>
          </div>
          <div className="flex h-[10%] w-full items-center justify-between">
            <button
              onClick={onPlayClick}
              className="mr-s3 flex items-center justify-center"
            >
              <Image
                src={isPlaying ? PauseIcon : PlayIcon}
                alt=""
                width={40}
                height={40}
              />
            </button>
            <Button
              onClick={() => setIsNextPage((isNextPage) => !isNextPage)}
              type="primary"
              purpose="onClick"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </>
  );
};

const TranslatePage = ({ voiceText }) => {
  const fromOptions = ['English', 'Hindi', 'Spanish', 'Portguese', 'Arabic'];
  const toOptions = ['English', 'Hindi', 'Spanish', 'Portguese', 'Arabic'];
  const [payload, setPayload] = useState({
    originLanguage: '',
    translatedLanguage: '',
  });
  return (
    <>
      <div className="h-[90%] w-full border-b border-white/60">
        <div className="flex items-center justify-between">
          <CustomSelectInput
            options={fromOptions}
            onChange={(option) =>
              setPayload({ ...payload, translatedLanguage: option })
            }
            value={payload.translatedLanguage}
            className="mr-2"
          />
          <CustomSelectInput
            options={toOptions}
            onChange={(option) =>
              setPayload({ ...payload, translatedLanguage: option })
            }
            value={payload.translatedLanguage}
            className="mr-2"
          />
        </div>
        <div className="flex items-center justify-between gap-x-3 my-3 h-full">
         <div className='h-[260px] bg-white rounded-lg basis-[45%]'>

         </div>
         <span className="text-white">→</span>
         <div className='h-[260px] bg-white rounded-lg basis-[45%]'>

         </div>
        </div>
      </div>
      <div className="h-[10%] w-full flex items-center justify-between py-2">
        <Button purpose="onClick" type="primary">
          Restart
        </Button>
        <Button purpose="onClick" type="secondary">
          Download text file
        </Button>
      </div>
    </>
  );
};
export default AudioPlayer;
