import { FC } from 'react';
import CustomButton from '@components/custom-button';
import { Box, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomTextField from '@components/custom-text-field';
import { formatCardNumberInput, formatNameInput } from '@utils/formatters/form-field-formatters';
import { popularCurrencies } from '@features/payment-card/data/popular-currencies';
import { useAddCardForm } from '@features/payment-card/hooks/use-add-card-form';

interface AddPaymentCardFormProps {}

const AddPaymentCardForm: FC<AddPaymentCardFormProps> = ({}) => {
  const { control, handleSubmit, onSubmit } = useAddCardForm();

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
          name="number"
          control={control}
          rules={{
            required: 'Card number is required',
            validate: (value) =>
              value.replace(/\s/g, '').length === 16 || 'Card number must be 16 digits',
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              onChange={(e) => field.onChange(formatCardNumberInput(e.target.value))}
              placeholder="1234 5678 9012 3456"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Card Number"
            />
          )}
        />
        <Controller
          name="holderFirstName"
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
              label="Fist Name"
            />
          )}
        />
        <Controller
          name="holderLastName"
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
          name="availableUntil"
          control={control}
          rules={{
            required: 'Valid until date is required',
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              type="date"
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Valid Until"
            />
          )}
        />
        <Controller
          name="balance"
          control={control}
          rules={{
            required: 'Balance is required',
          }}
          render={({ field, fieldState }) => (
            <CustomTextField
              {...field}
              type="number"
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="Enter amount"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label="Balance"
              sx={{
                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                  display: 'none',
                },
                '& input[type=number]': {
                  MozAppearance: 'textfield',
                },
              }}
            />
          )}
        />
        <Controller
          name="currency"
          control={control}
          render={({ field }) => (
            <CustomTextField {...field} select label="Currency">
              {popularCurrencies.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </CustomTextField>
          )}
        />
      </Box>
      <CustomButton type="submit" fullWidth>
        Add Card
      </CustomButton>
    </Box>
  );
};

export default AddPaymentCardForm;
