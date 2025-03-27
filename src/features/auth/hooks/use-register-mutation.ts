import { useMutation } from '@tanstack/react-query';
import { register } from '../services/register.service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { ROUTES } from '@routes/routes';

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success('Account successfully created! Click to go to login page!', {
        onClick: () => {
          navigate(ROUTES.LOGIN);
        },
      });
    },
  });
};
