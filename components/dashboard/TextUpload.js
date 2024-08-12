import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import Textarea from '../FormComponents/Textarea';
import CustomSelectInput from '../FormComponents/CustomSelectInput';

const TextToSpeechInput = () => {
  const options = ['English', 'Hindi', 'Spanish', 'Portguese', 'Arabic'];
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState();
  const [output, setOutput] = useState(false);

  return (
    <>
      <div className="flex h-[55%] w-2/3 flex-col justify-center rounded-lg bg-white-transparent">
        <div className="px-4">
          <Textarea
            _id={'textarea'}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type in any language and turn text into natural sounding speech"
            value={inputText}
            textBlack={false}
            bgColor={false}
          />
        </div>
        <div className="h-[1px] w-full bg-white/40"></div>
        <div className="flex items-center justify-between p-4">
          <CustomSelectInput
            options={options}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mr-2 flex-grow-[2]"
          />
          <Button>Convert</Button>
        </div>
      </div>
      {output && (
        <div className="mt-5 flex items-center justify-center gap-x-6">
          <Button type="primary">Download speech File</Button>
          <Button type="secondary">Restart</Button>
        </div>
      )}
    </>
  );
};

export default TextToSpeechInput;
