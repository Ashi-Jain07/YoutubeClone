import React from 'react';
import Header from './components/Header';
import { SearchProvider } from './utils/SearchAndSidebarContext';
import { SideBarProvider } from './utils/SearchAndSidebarContext';
import { Outlet } from 'react-router';

function App() {
  

  return (
    <SideBarProvider>
    <SearchProvider>
      <Header/>
      <Outlet />
    </SearchProvider>
    </SideBarProvider>
  );
};

export default App;
