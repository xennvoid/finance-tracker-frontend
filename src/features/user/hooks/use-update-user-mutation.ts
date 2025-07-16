import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../services/update-user.service';
import { IUpdateUserRequestBody } from '../types/update-user.types';
import { toast } from 'react-toastify';

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['user', 'update'],
    mutationFn: (data: IUpdateUserRequestBody) => updateUser(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['me'] });
      toast.success(data.message);
    },
  });
};
