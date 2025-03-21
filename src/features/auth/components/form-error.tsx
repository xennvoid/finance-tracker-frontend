import { Typography } from '@mui/material';
import { FC } from 'react';

interface FormErrorProps {
  isError: boolean;
  message: string;
}

const FormError: FC<FormErrorProps> = ({ isError, message }) => {
  return (
    <Typography
      color="error"
      sx={{
        height: 2,
        visibility: isError ? 'visible' : 'hidden',
      }}>
      {isError && message}
    </Typography>
  );
};

export default FormError;
