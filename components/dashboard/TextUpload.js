import React, { useState } from 'react';
import Border from '../../components/UI/Border';

const TextToSpeechInput = () => {
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState('English');

  return (
    <div className="p-4 bg-white-transparent rounded-lg">
      <p className="text-white mb-2">Type in any language and turn text into natural sounding speech</p>
      <Border borderRadius="md" classes="w-full mb-4">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full h-24 p-2 bg-transparent text-white border-none outline-none resize-none"
          placeholder="Type here..."
        />
      </Border>
      <div className="flex justify-between items-center">
        <select
          className="bg-gray-700 text-black p-2 rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          {/* Add more languages as needed */}
        </select>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <span className="material-icons">placeholder</span>
        </button>
      </div>
    </div>
  );
};

export default TextToSpeechInput;
