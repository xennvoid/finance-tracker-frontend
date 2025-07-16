import { FC } from 'react';
import CustomButton from '@components/custom-button';
import CustomTextField from '@components/custom-text-field';
import { Autocomplete, Box } from '@mui/material';
import { formatNameInput } from '@utils/formatters/form-field-formatters';
import { Controller } from 'react-hook-form';
import { useUpdateUserForm } from '../hooks/use-update-user-form';
import { useDebounce } from '@hooks/use-debounce';
import { useGetCountriesByNameQuery } from '@features/countries/hooks/use-get-countries-by-name-query';
import { getCountriesByName } from '@features/countries/services/get-countries-by-name.service';

interface UpdateUserFormProps {}

const UpdateUserForm: FC<UpdateUserFormProps> = ({}) => {
  const { handleSubmit, onSubmit, control, watch } = useUpdateUserForm();

  const countryInput = watch('country');
  const debouncedCountry = useDebounce(countryInput);

  const { data: countries = [], isLoading: countriesIsLoading } =
    useGetCountriesByNameQuery(debouncedCountry);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr', lg: '1fr 1fr' },
          gap: { xs: 2, md: 3 },
          mb: 3,
        }}>
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: 'First name is required',
            validate: (value) => {
              if (!/^[\p{L} \-'’]*$/u.test(value)) {
                return 'Invalid character detected';
              }
              if (value.length < 2) {
                return 'Minimum 2 characters required';
              }
              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              onChange={(e) => field.onChange(formatNameInput(e.target.value))}
              placeholder="John"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="First Name"
            />
          )}
        />
        <Controller
          name="userName"
          control={control}
          rules={{
            validate: (value) => {
              if (value.length < 1) {
                return 'Minimum 1 character required';
              }
              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="johnsmith"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="User Name"
              autoComplete="username"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{
            required: 'Last name is required',
            validate: (value) => {
              if (!/^[\p{L} \-'’]*$/u.test(value)) {
                return 'Invalid character detected';
              }
              if (value.length < 2) {
                return 'Minimum 2 characters required';
              }
              return true;
            },
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              onChange={(e) => field.onChange(formatNameInput(e.target.value))}
              placeholder="Smith"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Last Name"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              type="email"
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="johnsmith@gmail.com"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Email"
              autoComplete="email"
            />
          )}
        />
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              type="date"
              label="Date of Birth"
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="country"
          control={control}
          rules={{
            validate: async (value) => {
              if (!value || value.length < 2) return true;

              try {
                await getCountriesByName(value, true);
                return true;
              } catch {
                return 'Country not found';
              }
            },
          }}
          render={({ field, fieldState }) => (
            <Autocomplete
              id="country"
              value={field.value}
              freeSolo
              options={countries}
              loading={countriesIsLoading}
              onChange={(_, value) => field.onChange(value)}
              renderInput={(params) => (
                <Box ref={params.InputProps.ref}>
                  <CustomTextField
                    {...field}
                    type="text"
                    label="Country"
                    placeholder="Spain"
                    slotProps={{ htmlInput: { ...params.inputProps } }}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                </Box>
              )}
            />
          )}
        />
      </Box>
      <CustomButton type="submit" sx={{ width: { xs: '100%', md: '30%', lg: '20%' } }}>
        Save
      </CustomButton>
    </Box>
  );
};

export default UpdateUserForm;
