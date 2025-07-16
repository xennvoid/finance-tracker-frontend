import { axiosInstance } from '@api/axios-instance';
import { USER_ENDPOINTS } from '@constants/api-endpoints/user';
import { IUpdateUserRequestBody, IUpdateUserResponse } from '../types/update-user.types';

export const updateUser = async (userData: IUpdateUserRequestBody) => {
  const response = await axiosInstance.patch<void, IUpdateUserResponse>(
    USER_ENDPOINTS.UPDATE_USER,
    userData,
  );

  return response;
};
