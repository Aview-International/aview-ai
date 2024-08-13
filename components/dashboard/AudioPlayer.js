import { useState } from 'react';
import PlayIcon from '../../public/img/icons/play.svg';
import PauseIcon from '../../public/img/icons/pause.svg';
import Image from 'next/image';
import Button from '../UI/Button';
import CustomSelectInput from '../FormComponents/CustomSelectInput';

const AudioPlayer = ({ audioRecord }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);

  const onPlayClick = () => {};

  return (
    <>
      {isNextPage ? (
        <TranslatePage />
      ) : (
        <>
          <div className="flex h-[80%] flex-col items-center justify-center gap-y-5 px-6">
            <p>Whisper this</p>
            <p>We gonna get this thing right away for translate!</p>
          </div>
          <div className="flex h-[20%] w-full items-center justify-between">
            <button
              onClick={onPlayClick}
              className="flex items-center justify-center"
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

const TranslatePage = () => {
  const fromOptions = ['English', 'Hindi', 'Spanish', 'Portguese', 'Arabic'];
  const toOptions = ['English', 'Hindi', 'Spanish', 'Portguese', 'Arabic'];
  const [payload, setPayload] = useState({
    originLanguage: '',
    translatedLanguage: '',
  });
  return (
    <>
      <div className="h-[80%] w-full px-6">
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
        <div className="flex h-full items-center justify-between gap-x-3">
          <div className="h-[200px] basis-[45%] rounded-lg bg-white"></div>
          <span className="text-white">→</span>
          <div className="h-[200px] basis-[45%] rounded-lg bg-white"></div>
        </div>
      </div>
      <div className="flex h-[20%] w-full items-center justify-between  border-t border-white/60">
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
