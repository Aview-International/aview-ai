import React from 'react';
import VidDownload from '../../components/dashboard/VidDownload';
import Header from '../../components/dashboard/Header';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const VideoDownload = () => {
  return (
    <div className="rounded-lg h-screen bg-white-transparent">
      <VidDownload />
    </div>
  );
};

VideoDownload.getLayout = DashboardLayout;
export default VideoDownload;
