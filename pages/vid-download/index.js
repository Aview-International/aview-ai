import React, { useState } from 'react';
import VidDownload from '../../components/dashboard/VidDownload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const VideoDownload = () => {
  const [isloaded, setIsLoaded] = useState(true);
  return (
    <div className="min-h-screen rounded-lg bg-white-transparent">
      <VidDownload isLoaded={isloaded} />
    </div>
  );
};

VideoDownload.getLayout = DashboardLayout;
export default VideoDownload;
