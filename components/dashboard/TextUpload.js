import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import Textarea from '../FormComponents/Textarea';
import CustomSelectInput from '../FormComponents/CustomSelectInput';
import { getText } from '../../services/apis';
import { toast } from 'react-toastify';

const TextToSpeechInput = () => {
  const options = ['English', 'Hindi', 'Spanish', 'Portguese', 'Arabic'];
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const isValidText = (text) => {
    const regex = /^[A-Za-z]+(\s[A-Za-z]+)+$/;
    return regex.test(text);
  };

  const trasnlateText = async () => {
    if (inputText.length == 0) {
      toast.error('Please ente the text');
      return;
    }
    if (language == '') {
      toast.error('Please select a language');
      return;
    }
    if (isValidText(inputText)) {
      console.log('Valid input:', inputText);
      // try {
      //   const translatedText = await getText(inputText, language);
      //   setOutput(translatedText);
      //   setLoading(true);
      //   setInputText('');
      // } catch (error) {
      //   console.log(error.message);
      //   toast.error(error.message);
      // }
    } else {
      toast.error(
        'Input should contain only alphabets and must have more than one word.'
      );
    }
  };

  const handleRestart = () => {
    setInputText('');
    setOutput('');
    setFileUrl('');
    setLanguage('');
  };

  const downloadFile = () => {
    console.log('button clicked');
    // if (!output) {
    //   toast.error('Something went wrong try again after some time');
    //   return;
    // }
    // const blob = new Blob([output], { type: 'text/plain' });
    // const url = URL.createObjectURL(blob);

    // const link = document.createElement('a');
    // link.href = url;
    // link.download = `speech_${language}.txt`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    // URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="flex h-[50%] w-[95%] flex-col justify-center rounded-lg bg-white-transparent md:w-2/3 ">
        <div className="px-2 md:px-4">
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
            onChange={(e) => setLanguage(e)}
            className="mr-2 flex-grow-[2]"
          />
          <Button purpose="onClick" onClick={trasnlateText}>
            Convert
          </Button>
        </div>
      </div>
      {loading && (
        <div className="mt-5 flex items-center justify-center gap-x-6">
          <Button
            type="primary"
            purpose="onClick"
            onChange={downloadFile}
            disabled={!loading}
          >
            Download speech File
          </Button>
          <Button type="secondary" purpose="onClick" onClick={handleRestart}>
            Restart
          </Button>
        </div>
      )}
    </>
  );
};

export default TextToSpeechInput;
