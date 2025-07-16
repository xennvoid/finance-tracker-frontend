import { IUser } from '@features/user/types/user.types';
import { ReactNode } from 'react';

export type ICurrentUserData = Omit<IUser, 'password'> | null;

export interface ICurrentUserContextType {
  currentUser: ICurrentUserData | null;
  loginCurrentUser: (userData: ICurrentUserData) => void;
  logOutCurrentUser: () => void;
  setCurrentUser: React.Dispatch<React.SetStateAction<ICurrentUserData>>;
}

export interface ICurrentUserProviderProps {
  children: ReactNode;
}
