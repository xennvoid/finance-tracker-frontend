import { clearAccessToken, getAccessToken, setAccessToken } from '@services/tokenServices';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { AUTH_ENDPOINTS } from '@constants/api-endpoints/auth';

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

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (
      error.response?.status === 401 &&
      error.response.data.error.errorCode === 'invalid_token' &&
      !error.config._retry
    ) {
      try {
        const originalRequest = error.config as CustomAxiosRequestConfig;

        originalRequest._retry = true;

        const response = await axios.get(BASE_URL + AUTH_ENDPOINTS.REFRESH_TOKEN, {
          withCredentials: true,
        });

        if (response.status === 200) {
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setAccessToken(response.data.accessToken);
          return axiosInstance(originalRequest);
        }
      } catch (error) {
        console.error(error);
        clearAccessToken();
      }
    }

    return Promise.reject(error.response.data);
  },
);
