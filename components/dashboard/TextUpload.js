import React, { useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import Button from '../../components/UI/Button';

const TextToSpeechInput = () => {
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState('English');

  return (
    <div className="m-2 flex w-3/4 h-full flex-col justify-center rounded-xl bg-white-transparent p-4">
      <Shadow classes="flex flex-col jstify-center h-2/4 w-full mr-s4 cursor-pointer">
        <Border
          borderRadius="2xl"
          classes="flex flex-col justify-center w-full h-2/4"
        >
          <div className="h-full w-full rounded-xl bg-black">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="h-24 w-full resize-none border-none bg-transparent p-4 text-xl text-white outline-none"
              placeholder="Type in any language and turn text into natural sounding speech"
            />
          </div>
        </Border>
      </Shadow>

      <div className="mt-6 mb-2 flex items-center justify-between">
        <Shadow className="rounded-3xl">
          <Border className="rounded-3xl">
            <select
              className="rounded bg-black p-2 text-white"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              {/* Add more languages as needed */}
            </select>
          </Border>
        </Shadow>

        <Button className="bg-blue-500 hover:bg-blue-700 rounded py-2 px-4 font-bold text-white">
          <span className="material-icons">Convert</span>
        </Button>
      </div>
    </div>
  );
};

export default TextToSpeechInput;
