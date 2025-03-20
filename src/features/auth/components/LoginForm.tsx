import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import AuthInput from './AuthInput';
import AuthFormButton from './AuthFormButton';
import AuthFormFooter from './AuthFormFooter';
import AuthFormWrapper from './AuthFormWrapper';
import { ROUTES } from 'routes';
import { useLoginActionStateWithMutation } from '../hooks/useLoginMutation';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const { error, isError, isPending, action, actionState } = useLoginActionStateWithMutation();

  return (
    <AuthFormWrapper action={action}>
      <Typography variant="h5" fontWeight={700} textAlign="center">
        Login to your account
      </Typography>
      <Stack spacing={3}>
        <AuthInput
          name="email"
          inputTitle="Email"
          type="email"
          placeholder="Enter your email"
          defaultValue={actionState.email}
        />
        <AuthInput
          name="password"
          inputTitle="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
        />
      </Stack>
      <AuthFormButton>Log in</AuthFormButton>
      <AuthFormFooter
        textBelow="Don't have an account ?"
        linkText="Register"
        linkPath={ROUTES.REGISTER}
      />
    </AuthFormWrapper>
  );
};

export default LoginForm;
