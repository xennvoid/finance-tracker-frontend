import { Stack } from '@mui/material';
import { FC, FormHTMLAttributes, ReactNode } from 'react';

interface AuthFormWrapperProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const AuthFormWrapper: FC<AuthFormWrapperProps> = ({ children, ...props }) => {
  return (
    <form {...props}>
      <Stack spacing={4}>{children}</Stack>
    </form>
  );
};

export default AuthFormWrapper;
