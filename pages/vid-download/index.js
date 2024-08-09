import React, { useState } from 'react';
import VidDownload from '../../components/dashboard/VidDownload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import DashboardSidebar from '../../components/dashboard/Sidebar';

const VideoDownload = () => {
  const [isloaded, setIsLoaded] = useState(true);
  return (
    <div className= "flex h-1/2 w-full flex-row">
      <DashboardSidebar>
          </DashboardSidebar>
    <div className="min-h-screen w-full rounded-lg bg-white-transparent">
      <VidDownload isLoaded={isloaded} />
    </div>
    </div>
  );
};

VideoDownload.getLayout = DashboardLayout;
export default VideoDownload;
