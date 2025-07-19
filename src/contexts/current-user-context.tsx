import { logout } from '@features/auth/services/logout.service';
import {
  getStoredUser,
  removeCurrentUser,
  saveCurrentUser,
} from '@features/auth/services/user-storage.service';
import { clearAccessToken } from '@services/token.service';
import { createContext, useContext, useState } from 'react';
import {
  ICurrentUserContextType,
  ICurrentUserData,
  ICurrentUserProviderProps,
} from 'types/current-user.types';

const CurrentUserContext = createContext<ICurrentUserContextType | null>(null);

export const CurrentUserProvider = ({ children }: ICurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<ICurrentUserData>(() => getStoredUser());

  const loginCurrentUser = (userData: ICurrentUserData) => {
    setCurrentUser(userData);
    saveCurrentUser(userData);
  };

  const logOutCurrentUser = async () => {
    try {
      await logout();
    } catch (e) {
      console.error(e);
    }

    setCurrentUser(null);
    removeCurrentUser();
    clearAccessToken();
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, loginCurrentUser, logOutCurrentUser, setCurrentUser }}>
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
