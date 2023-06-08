import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import '@/styles/globals.css';

import { store } from '@/redux/store';
import { Provider } from 'react-redux';


import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function App({ Component, pageProps }) {
  const persistor = persistStore(store);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
