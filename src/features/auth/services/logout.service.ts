import { axiosInstance } from '@api/axios-instance';
import { AUTH_ENDPOINTS } from '@constants/api-endpoints/auth';
import { IApiResponse } from 'types/api-response.types';

export const logout = async () => {
  const response = await axiosInstance<void, IApiResponse<undefined>>(AUTH_ENDPOINTS.LOGOUT);

  return response;
};
