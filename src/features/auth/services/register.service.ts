import { axiosInstance } from '@api/axios-instance';
import { AUTH_ENDPOINTS } from '@constants/api-endpoints/auth';
import { IRegisterResponse } from '../types/register.types';
import { isFormFilled } from '../utils/is-form-filled';

export const register = async (formData: FormData): Promise<void> => {
  const email = formData.get('email');
  const password = formData.get('password');
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');

  if (!isFormFilled(formData)) {
    throw new Error('All fields are required');
  }

  await axiosInstance.post<void, IRegisterResponse>(
    AUTH_ENDPOINTS.REGISTER,
    {
      email,
      password,
      firstName,
      lastName,
    },
    {
      skipAuthRefresh: true,
    },
  );
};
