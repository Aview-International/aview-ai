import React, { useRef, useEffect } from 'react';

const SubtitleEditor = ({ subtitles }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollLeft = 0;
    }
  }, [subtitles]);

  return (
    <div
      className="h-32 fixed bottom-0 left-48 right-0 overflow-x-auto whitespace-nowrap bg-white-transparent p-4 text-white"
      ref={editorRef}
    >
      <div className="inline-block">
        {Array.from({ length: 1000 }, (_, index) => (
          <div key={index} className="mr-4 inline-block">
            <p className="text-center">
              {(index * 10).toString().padStart(2, '0')}:00
            </p>
            <p className="text-center">
              {subtitles[index]?.text || `Subtitle ${index + 1}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubtitleEditor;
