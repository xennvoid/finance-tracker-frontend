import { ReactNode } from 'react';

export type ICurrentUserData = {
  email: string;
  firstName: string;
  lastName: string;
} | null;

export interface ICurrentUserContextType {
  currentUser: ICurrentUserData | null;
  loginCurrentUser: (userData: ICurrentUserData) => void;
  logOutCurrentUser: () => void;
}

export interface ICurrentUserProviderProps {
  children: ReactNode;
}
