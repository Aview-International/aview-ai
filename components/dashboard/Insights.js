import { useSelector } from 'react-redux';

const Insights = () => {
  const userInfo = useSelector((state) => state.user);
  const summary = [
    {
      value: userInfo.pendingVideos ?? 0,
      description: 'Videos Pending',
    },
    {
      value: userInfo.completedVideos ?? 0,
      description: 'Videos Completed',
    },
    {
      value: 'N/A',
      description: 'Coming Soon',
    },
    {
      value: 'N/A',
      description: 'Coming Soon',
    },
  ];

  return (
    <div className="text-white">
      <div className="grid w-full gap-4 text-center md:grid-cols-3 md:gap-6 xl:grid-cols-4">
        {summary.map((data, index) => (
          <Counters key={`summary-${index}`} {...data} />
        ))}
      </div>
    </div>
  );
};

const Counters = ({ value, description }) => (
  <div className="flex flex-col-reverse items-start justify-center rounded-2xl bg-white-transparent px-s1 py-s3 text-left md:flex-col md:items-center md:py-s6 md:px-s2 md:text-center">
    <div className="text-xl md:text-8xl">{value}</div>
    <p className="text-sm">{description}</p>
  </div>
);
export default Insights;
