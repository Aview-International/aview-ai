import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '../store';
import { SocketProvider } from '../socket';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SocketProvider>
        <MenuOpenContextProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Layout Component={Component} pageProps={pageProps} />
        </MenuOpenContextProvider>
      </SocketProvider>
    </Provider>
  );
};

const Layout = ({ Component, pageProps }) => {
  useEffect(() => {
    // prevent blobs from overflowing
    document
      .getElementById('__next')
      .classList.add('overflow-x-clip', 'w-full', 'relative');
    // AOS animation
    AOS.init();
    AOS.refresh();
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.onresize = setViewportHeight;
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
