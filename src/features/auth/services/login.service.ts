import { axiosInstance } from '@api/axios-instance';
import { ILoginFormData, ILoginResponse, ILoginResponseData } from '../types/login.types';
import { setAccessToken } from '@services/token.service';
import { AUTH_ENDPOINTS } from '@constants/api-endpoints/auth';

export const login = async ({ email, password }: ILoginFormData): Promise<ILoginResponseData> => {
  const responseData = await axiosInstance.post<void, ILoginResponse>(AUTH_ENDPOINTS.LOGIN, {
    email,
    password,
  });

  const accessToken = responseData.data.accessToken;

  setAccessToken(accessToken);

  return responseData.data;
};
