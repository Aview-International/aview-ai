import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import Blobs from '../components/UI/Blobs';
import AiToolsPage from '../components/sections/home/AiToolsPage';

const Home = () => {
  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="Translate your Social Media Content. AVIEW is a leading multi-media translation service. We help you expand your international viewership. Start Now!"
      />
      <Header curPage="Home" />
      <AiToolsPage />
      <Footer curPage="Home" />
      {/* <Blobs /> */}
    </>
  );
};

export default Home;
