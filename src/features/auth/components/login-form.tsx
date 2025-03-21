import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import AuthInput from './auth-input';
import AuthFormButton from './auth-form-button';
import AuthFormFooter from './auth-form-footer';
import AuthFormWrapper from './auth-form-wrapper';
import { ROUTES } from '@routes/routes';
import { useLoginMutationState } from '../hooks/use-login-mutation-state';
import FormError from './form-error';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const { error, isError, isPending, action, actionState } = useLoginMutationState();

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
      <FormError isError={isError} message={error?.error?.message || ''} />
      <AuthFormButton loading={isPending} disabled={isPending}>
        Log in
      </AuthFormButton>
      <AuthFormFooter
        textBelow="Don't have an account ?"
        linkText="Register"
        linkPath={ROUTES.REGISTER}
      />
    </AuthFormWrapper>
  );
};

export default LoginForm;
