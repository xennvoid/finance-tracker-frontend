import { ReactNode } from 'react';

export type ISidebarContext = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideBar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
} | null;

export interface ISidebarContextProviderProps {
  children: ReactNode;
}
