import { useMutation } from '@tanstack/react-query';
import { IApiResponseError } from 'types/apiResponse';
import { login } from '../services/login.service';
import { useActionState } from 'react';
import { ILoginFormData } from '@features/types/login.types';

export const useLoginMutationState = () => {
  const mutation = useMutation({
    mutationFn: login,
    onError: (err: IApiResponseError) => err,
  });

  const loginAction = async (
    _actionState: ILoginFormData,
    formData: FormData,
  ): Promise<ILoginFormData> => {
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    mutation.mutate({ email, password });

    return { email, password };
  };

  const [actionState, action] = useActionState(loginAction, { email: '', password: '' });

  return { ...mutation, action, actionState };
};
