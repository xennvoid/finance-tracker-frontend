import { useForm } from 'react-hook-form';
import { useUpdateUserMutation } from './use-update-user-mutation';
import { useCurrentUserContext } from '@contexts/current-user-context';
import { checkUserFieldsAvailability } from '../services/check-user-fields-availability.service';
import { IUpdateUserFormFields } from '../types/update-user.types';

export const useUpdateUserForm = () => {
  const { currentUser } = useCurrentUserContext();

  const { control, handleSubmit, watch, setError, clearErrors } = useForm<IUpdateUserFormFields>({
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      country: currentUser?.country,
      email: currentUser?.email,
      userName: currentUser?.userName,
      dateOfBirth: currentUser?.dateOfBirth
        ? new Date(currentUser.dateOfBirth).toISOString().split('T')[0]
        : '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const { mutateAsync } = useUpdateUserMutation();

  const onSubmit = async (data: IUpdateUserFormFields) => {
    data;
    try {
      clearErrors(['email', 'userName']);

      const availableFields = await checkUserFieldsAvailability({
        email: data.email,
        userName: data.userName,
      });

      let hasErrors = false;

      if (!availableFields.email) {
        setError('email', { message: 'Email is already taken' });
        hasErrors = true;
      }

      if (!availableFields.userName) {
        setError('userName', { message: 'Username is already taken' });
        hasErrors = true;
      }

      if (hasErrors) {
        return;
      }

      const transformedData = {
        ...data,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
        country: data.country,
      };

      await mutateAsync(transformedData);
    } catch {}
  };

  return { control, handleSubmit, onSubmit, watch };
};
