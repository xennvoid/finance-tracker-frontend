import { useMutation } from '@tanstack/react-query';
import { login } from '../services/login.service';
import { useActionState } from 'react';
import { ILoginFormData } from '../types/login.types';
import { useCurrentUserContext } from '@contexts/current-user-context';

export const useLoginMutationState = () => {
  const { loginCurrentUser } = useCurrentUserContext();

  const { error, isError, isPending, mutate } = useMutation({
    mutationFn: login,
    onSuccess: (userData) => {
      const { email, firstName, lastName } = userData;
      loginCurrentUser({ email, firstName, lastName });
    },
  });

  const loginAction = async (
    _actionState: ILoginFormData,
    formData: FormData,
  ): Promise<ILoginFormData> => {
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    mutate({ email, password });

    return { email, password };
  };

  const [actionState, action] = useActionState(loginAction, { email: '', password: '' });

  return { error, isError, isPending, action, actionState };
};
