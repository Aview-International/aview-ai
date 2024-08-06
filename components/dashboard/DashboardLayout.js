import Header from './Header';

const DashboardStructure = ({ children }) => {
  return (
    <main className="flex max-h-screen w-full flex-col text-white">
      <Header />
      <div className={`h-full w-full flex-grow px-4 py-1.5`}>{children}</div>
    </main>
  );
};

const DashboardLayout = (page) => (
  <DashboardStructure>{page}</DashboardStructure>
);

export default DashboardLayout;
