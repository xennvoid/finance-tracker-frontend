import { axiosInstance } from '@api/axios-instance';
import { USER_ENDPOINTS } from '@constants/api-endpoints/user';
import { IGetMeResponse } from '../types/get-me.types';

export const getMe = async () => {
  const response = await axiosInstance<void, IGetMeResponse>(USER_ENDPOINTS.GET_ME);

  return response.data;
};
