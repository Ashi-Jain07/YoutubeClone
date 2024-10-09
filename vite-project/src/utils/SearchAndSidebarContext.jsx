import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export function SideBarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};