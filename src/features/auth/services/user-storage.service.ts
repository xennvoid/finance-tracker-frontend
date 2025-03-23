import { ICurrentUserData } from 'types/current-user.types';

const USER_LOCAL_STORAGE_KEY = 'currentUser';

export const getStoredUser = () => {
  const storedUserData = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return storedUserData ? JSON.parse(storedUserData) : null;
};

export const saveCurrentUser = (userData: ICurrentUserData) => {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userData));
};

export const removeCurrentUser = () => {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
};
