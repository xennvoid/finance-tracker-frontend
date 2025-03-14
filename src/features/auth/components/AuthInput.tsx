import { FC } from 'react';
import { Stack, TextField, TextFieldProps, Typography } from '@mui/material';

type AuthInputProps = TextFieldProps & {
  inputTitle: string;
};

const AuthInput: FC<AuthInputProps> = ({ inputTitle, ...props }) => {
  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle1" fontWeight={500}>
        {inputTitle}
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        slotProps={{
          input: {
            sx: {
              borderRadius: 2,
            },
          },
        }}
        {...props}
      />
    </Stack>
  );
};

export default AuthInput;
