import { clearAccessToken, getAccessToken, setAccessToken } from '@services/token.service';
import axios, { AxiosError } from 'axios';
import { AUTH_ENDPOINTS } from '@constants/api-endpoints/auth';
import { IApiResponseError } from 'types/api-response.types';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error: AxiosError<IApiResponseError>) => {
    const originalRequest = error.config;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (originalRequest?.skipAuthRefresh) {
      return Promise.reject(error.response?.data?.error || error.message);
    }

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      try {
        originalRequest._retry = true;

        const response = await axios.get(BASE_URL + AUTH_ENDPOINTS.REFRESH_TOKEN, {
          withCredentials: true,
        });

        if (response.status === 200) {
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          const accessToken = response.data.data.accessToken;
          setAccessToken(accessToken);
          return axiosInstance(originalRequest);
        }
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 401) {
          clearAccessToken();
          window.location.href = '/logout';
        }
      }
    }

    return Promise.reject(error.response?.data.error);
  },
);
