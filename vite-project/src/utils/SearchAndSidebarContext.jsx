import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SearchContext = createContext();

//Create a context for searchbar
export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

//Create a context for sidebar
export function SideBarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};