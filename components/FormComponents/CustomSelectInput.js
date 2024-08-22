import Border from '../UI/Border';
import Arrow from '../../public/img/icons/dropdown-arrow.svg';
import Image from 'next/image';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const CustomSelectInput = ({
  options,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className="relative text-xl text-white min-w-[128px] md:min-w-[150px]">
        <Border borderRadius="[5px]" classes={"w-full"}>
          <div
            className="flex w-full cursor-pointer items-center justify-between rounded-md bg-black p-1 basis-2/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-white/80 text-base">{value || 'Select'}</p>
            <span className={`transition-300 mx-1  ${isOpen && 'rotate-180'}`}>
              <Image src={Arrow} alt="arrow" />
            </span>
          </div>
        </Border>

        <Options
          isOpen={isOpen}
          options={options}
          setIsOpen={setIsOpen}
          onChange={onChange}
        />
      </div>
    </OutsideClickHandler>
  );
};

const Options = ({ isOpen, options, setIsOpen, onChange }) => {
  return (
    <Border
      borderRadius="[5px]"
      classes={`w-full absolute left-0 top-full mt-3 z-10 transition-300 max-h-[130px] overflow-x-hidden overflow-y-scroll ${
        isOpen ? 'visible opacity-1' : 'invisible opacity-0'
      }`}
    >
      <div className="gradient-1 rounded-[5px]">
        {options.map((option, i) => (
          <p
            className="my-1 cursor-pointer bg-black p-1 text-base"
            key={`option-${i}`}
            onClick={() => {
              onChange(option);
              setIsOpen(false);
            }}
          >
            {option}
          </p>
        ))}
      </div>
    </Border>
  );
};

export default CustomSelectInput;
