import Sidebar from './Sidebar';
import Header from './Header';

const DashboardStructure = ({ children }) => {
  return (
    <div className = "">
    <Header />
    <main className="flex h-screen w-full bg-white-transparent">
      <Sidebar />
      
      <div className="mx-auto w-full items-stretch lg:w-[calc(100%-160px)]">
        <div className="bg-black/30">{children}</div>
      </div>
    </main>
    </div>
  );
};

const DashboardLayout = (page) => (
  <DashboardStructure>{page}</DashboardStructure>
);

export default DashboardLayout;
