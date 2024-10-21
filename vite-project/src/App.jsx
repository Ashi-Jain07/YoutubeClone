import React from 'react';
import Header from './components/Header';
import Footer from './components/footer.jsx';
import { SearchProvider } from './utils/SearchAndSidebarContext';
import { SideBarProvider } from './utils/SearchAndSidebarContext';
import { Outlet } from 'react-router';
import { Provider } from "react-redux";
import videoStore from './utils/videoStore.js';

function App() {

  return (
    <Provider store={videoStore}>
      <SideBarProvider>
        <SearchProvider>
          <Header />
          <Outlet />
          <Footer />
        </SearchProvider>
      </SideBarProvider>
    </Provider>
  );

};

export default App;
