import React, { useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import Button from '../../components/UI/Button';


const TextToSpeechInput = () => {
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState('English');

  return (
    <div className="flex flex-col justify-center w-3/4 bg-white-transparent rounded-xl m-2 p-6">
    
      <Shadow classes="flex flex-col justify-center h-screen w-full mr-s4 cursor-pointer">
      <Border borderRadius="2xl" classes="flex flex-col justify-center w-full h-full">
        <div className="bg-black rounded-xl w-full h-full">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full h-24 p-4 bg-transparent text-xl text-white border-none outline-none resize-none"
          placeholder="Type in any language and turn text into natural sounding speech"
        />

        </div>
        
      </Border>

      </Shadow>

      
      <div className="flex mt-6 mb-2 justify-between items-center">

        <Shadow className="rounded-3xl">
        <Border className="rounded-3xl">
        <select
          className="bg-black text-white p-2 rounded"
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
        
        

        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <span className="material-icons">Convert</span>
        </Button>

      </div>
    </div>
  );
};

export default TextToSpeechInput;
