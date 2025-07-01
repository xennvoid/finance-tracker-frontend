import { createContext, FC, useContext, useState } from 'react';
import { ISidebarContext, ISidebarContextProviderProps } from 'types/sidebar-context.types';

const SidebarContext = createContext<ISidebarContext>(null);

export const SidebarContextProvider: FC<ISidebarContextProviderProps> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleSideBar = () => {
    setIsOpened((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpened(false);
  };

  const openSidebar = () => {
    setIsOpened(true);
  };

  return (
    <SidebarContext.Provider
      value={{ isOpened, setIsOpened, toggleSideBar, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const sidebarContext = useContext(SidebarContext);

  if (!sidebarContext) {
    throw new Error('useSidebarContext has to be used within <SidebarContextProvider.Provider>');
  }

  return sidebarContext;
};
