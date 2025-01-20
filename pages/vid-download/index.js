import React from 'react';
import VidDownload from '../../components/dashboard/VidDownload';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const VideoDownload = () => {
  return (
    <div className="h-full w-full p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-6 rounded-lg bg-white-transparent">
        <VidDownload />
      </div>
    </div>
  );
};

VideoDownload.getLayout = DashboardLayout;
export default VideoDownload;
