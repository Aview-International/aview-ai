import React, { useRef, useEffect } from 'react';

 const SubtitleEditor = ({ subtitles, onSubtitlesChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollLeft = 0;
    }
  }, [subtitles]);

  return (
    <div className="fixed bottom-0 left-0 right-0 h- bg-white-transparent text-white p-4 overflow-x-auto whitespace-nowrap" ref={editorRef}>
      <div className="inline-block">
        {Array.from({ length: 1000 }, (_, index) => (
          <div key={index} className="inline-block mr-4">
            <p className="text-center">{(index * 10).toString().padStart(2, '0')}:00</p>
            <p className="text-center">{subtitles[index]?.text || `Subtitle ${index + 1}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubtitleEditor;
