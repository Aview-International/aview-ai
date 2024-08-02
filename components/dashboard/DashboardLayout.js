import Header from './Header';


const DashboardStructure = ({ children }) => {
  return (
    <main className="flex max-h-screen w-full flex-col text-white">
      <Header />
      <div className={`ml-auto flex h-full w-full px-4 py-1.5`}>{children}</div>
    </main>
  );
};

const DashboardLayout = (page) => (
  <DashboardStructure>{page}</DashboardStructure>
);

export default DashboardLayout;
