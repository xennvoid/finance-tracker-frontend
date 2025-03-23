import {
  getStoredUser,
  removeCurrentUser,
  saveCurrentUser,
} from '@features/auth/services/user-storage.service';
import { createContext, useContext, useState, useEffect } from 'react';
import {
  ICurrentUserContextType,
  ICurrentUserData,
  ICurrentUserProviderProps,
} from 'types/current-user.types';

const CurrentUserContext = createContext<ICurrentUserContextType | null>(null);

export const CurrentUserProvider = ({ children }: ICurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<ICurrentUserData>(null);

  const loginCurrentUser = (userData: ICurrentUserData) => {
    setCurrentUser(userData);
    saveCurrentUser(userData);
  };

  const logOutCurrentUser = () => {
    setCurrentUser(null);
    removeCurrentUser();
  };

  useEffect(() => {
    setCurrentUser(getStoredUser());
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, loginCurrentUser, logOutCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUserContext = () => {
  const currentUserContext = useContext(CurrentUserContext);

  if (!currentUserContext) {
    throw new Error('useCurrentUserContext has to be used within <CurrentUserContext.Provider>');
  }

  return currentUserContext;
};
