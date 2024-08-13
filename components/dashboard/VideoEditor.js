import React, { useState, useRef, useEffect } from 'react';

const VideoEditor = ({ subtitles, onSubtitlesChange }) => {
  const [duration, setDuration] = useState(30); // Default duration, should be set based on actual video length
  const [currentTime, setCurrentTime] = useState(0);
  const [zoom, setZoom] = useState(1);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (timelineRef.current) {
        timelineRef.current.style.width = `${duration * zoom * 20}px`; // Increased multiplier for better visibility
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [duration, zoom]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.1));

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-1 right-0 bg-white-transparent text-white ml-40" >
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <button className="mr-2">Play</button>
          <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
        <div>
          <button onClick={handleZoomOut} className="mr-2">Zoom Out</button>
          <button onClick={handleZoomIn}>Zoom In</button>
        </div>
      </div>
      <div className="relative overflow-x-auto" style={{ height: '100px' }}>
        <div ref={timelineRef} className="relative h-full">
          {/* Time markers */}
          {[...Array(Math.ceil(duration))].map((_, i) => (
            <div key={i} className="absolute top-0 h-full" style={{ left: `${i * zoom * 20}px` }}>
              <div className="h-3 w-px bg-gray-600"></div>
              <span className="text-xs">{formatTime(i)}</span>
            </div>
          ))}
          {/* Subtitles track */}
          <div className="absolute top-6 left-0 right-0 h-12 bg-gray-700">
            {subtitles.map((subtitle, index) => (
              <div
                key={index}
                className="absolute h-full bg-blue-500 opacity-50"
                style={{
                  left: `${subtitle.start * zoom * 20}px`,
                  width: `${(subtitle.end - subtitle.start) * zoom * 20}px`
                }}
              ></div>
            ))}
          </div>
          {/* Playhead */}
          <div
            className="absolute top-0 h-full w-px bg-red-500"
            style={{ left: `${currentTime * zoom * 20}px` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;